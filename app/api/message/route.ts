import getCurrentUser from "@/app/actions/get-current-user";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"
import { tr } from "date-fns/locale";


export async function POST(req: Request,) {
    try { 

        const requestBody = await req.json();
        const currentUser = await getCurrentUser();
        // console.log(requestBody);
        const {
            message,
            conversationId
        } = requestBody;

        if (!currentUser?.id || !currentUser?.email) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }


        const newMessage = await prisma.message.create({
            include: {
                seen: true,
                sender: true,
            },
            data: {
                body: message,
                conversation: {
                    connect: {
                        id: conversationId
                    }
                },
                sender: {
                    connect: {
                        id: currentUser.id
                    }
                },
                seen: {
                    connect: {
                        id: currentUser.id
                    }
                },

                
            }
        })

        // It will just update the conversation
        const updatedConversation = await prisma.conversation.update({
            where: {
                id: conversationId,
            },
            data: {
                lastMessageAt: new Date(),
                messages: {
                    connect: {
                        id: newMessage.id
                    }
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        seen: true
                    }
                }
            }
        })
        
        // Now I have to establish a connection
        // For that we will use the pusher 
        
        
        return NextResponse.json("It is working", {status: 200})

    } catch (err) { 
        console.log(err);
        return new NextResponse("Internal Server Error, loc: /api/message",{status:500})
        
    }
}
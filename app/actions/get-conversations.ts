import getCurrentUser from "./get-current-user"
import prisma from "../libs/prismadb"


const getConversations = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return []
    }
    try {

        const conversations = await prisma.conversation.findMany({
            orderBy: {
                lastMessageAt: "desc"
            },
            where: {
                userIds: {
                    has: currentUser?.id,
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        sender: true,
                        seen: true
                    }
                }
            }
        })


        return conversations

    } catch (error: any) {

    }
}

export default getConversations
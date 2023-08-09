import getCurrentUser from "./get-current-user";
import prisma from "@/app/libs/prismadb"



const getConversationById = async (conversationId: string) => {

    try {
        
        const currentUser = await getCurrentUser();

        if (!currentUser?.email) {
            return null;
        }

        const conversation = await prisma.conversation.findFirst({
            where: {
                id: conversationId,
            },
            include: {
                users: true,
            }
        })

        return conversation;


    } catch (error) {
        console.log("Internal Server Error, loc: get-conversation-by-id",error);
        return null;
    }
}



export default getConversationById
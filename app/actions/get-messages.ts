
import prisma from "@/app/libs/prismadb"

const getMessages = async (conversationId: string) => {
    try {
        const id = conversationId;
        const messages = await prisma.message.findMany({
            where: {
                conversationId: id,
            },
            include: {
                sender: true,
                seen: true
            },
            orderBy: {
                createdAt: "asc"
            }
        })
        return messages

    } catch (error) {

        return [];
    }

}


export default getMessages










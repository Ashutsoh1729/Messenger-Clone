import getSession from "./getSession";
import prisma from "../libs/prismadb"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


const getCurrentUser = async () => {
    try {
        const session = await getSession();

        if (!session?.user?.email) {  
            return null
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if (!currentUser) {
            console.log("current user is not found");
            
            return null
        }

        return currentUser;

    } catch (error:any) {
        console.log(error);
        return null
    }
}



export default getCurrentUser;








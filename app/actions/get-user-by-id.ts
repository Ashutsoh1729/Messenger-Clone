import { useId } from "react"
import prisma from "../libs/prismadb"



const getUserById = async(userId:string) => {
    const id = userId;

    const othreUser = await prisma.user.findFirst({
        where: {
            id: id
        }
    })


    if (!othreUser) {
        return null
    }

    return othreUser;
}

export default getUserById



















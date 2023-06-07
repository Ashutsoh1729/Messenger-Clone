import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb"

import bcrypt from "bcrypt"


export async function POST(
    response: Response
) {
   try {
    const body = await response.json();
    
    const {
        email,
        name,
        password
    } = body;
    

    if (!email || !name || !password) {
        return new NextResponse("Missing Info", { status: 400 }); 
    }


    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            hashedPassword: hashedPassword
        }
    })

    return NextResponse.json(user);

   } catch (error: any) {
       
       console.log(error, "Registration Error");
       return new NextResponse("Internal Error", { status: 500 });
}


}










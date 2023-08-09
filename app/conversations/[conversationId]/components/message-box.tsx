'use client'

import { FullMessage } from "@/app/types"
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


interface MessageBoxProps{
    
    data: FullMessage,
    isLast?: boolean
}

const MessageBox: React.FC<MessageBoxProps> = ({
    data,
    isLast
}) => {


    const session = useSession();

    // console.log(session?.data?.user?.email);

    
    



    return (
        <div className="w-full flex">
        <div
            className={
                cn("my-1  ",
                    session?.data?.user?.email == data.sender.email && "ml-auto"
                )
            }
            >
                <div className="py-1 px-4 rounded-lg bg-gray-400 text-white mr-2">
                    {data.body}
                </div>
        </div>
        </div>
    )
}

export default MessageBox
import { User } from '@prisma/client'
import Image from 'next/image';
import React from 'react'


interface AvatarProps{
    user?: User;
}



const Avatar:React.FC<AvatarProps> = ({user}) => {


    return (
        <div className='relative flex items-center'>

        <div
            className='
            relative 
            inline-block 
            rounded-full 
            overflow-hidden 
            h-9 
            w-9 
            md:h-11 
            md:w-11
            '
            >
            <Image alt='Avatar' src={user?.image || "/images/placeholder.jpg"} fill />

        </div>
            <span
                className='
                absolute 
                block 
                bg-green-500 
                rounded-full 
                ring-2 
                ring-white 
                top-0 
                h-2 
                w-2 
                z-50
                mt-[2px]
                md:h-3 
                md:w-3 
                right-0
                '
                />
    </div>
    )
}

export default Avatar
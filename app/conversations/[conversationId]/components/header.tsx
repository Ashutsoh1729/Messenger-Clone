'use client'
import Avatar from '@/app/components/Avatar';
import useOtherUser from '@/app/hooks/useOtherUser';
import { Conversation, User } from '@prisma/client';

import React from 'react'
import { BsCameraVideo, BsThreeDotsVertical } from 'react-icons/bs';

interface HeaderProps {
    conversation?: Conversation & {
        users: User[]
    }
}




const Header:React.FC<HeaderProps> = ({conversation}) => {


    const otherUser = useOtherUser(conversation!)
    // console.log(otherUser);
    

    return (
        <>
            <div className=' w-full py-4 border-b '>
                <div className=' container flex items-center justify-between pl-3'>
                    <div className=' flex items-center'>
                        <Avatar user={otherUser} />
                        <div className='pl-5 text-xl font-semibold'>
                            {otherUser.name}
                        </div>
                    </div>
                    <div className=' elements pr-6 flex justify-start items-center'>
                        <div className=' p-[10px] hover:bg-gray-500/50 rounded-full mr-3' >
                        <BsCameraVideo size={20}  />
                        </div>
                        <div className=' p-2 hover:bg-gray-500/50 rounded-full' >
                        <BsThreeDotsVertical size={20} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
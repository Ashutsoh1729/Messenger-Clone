'use client'
import { FullMessage } from '@/app/types'
import React, { useEffect, useRef, useState } from 'react'
import MessageBox from './message-box';
import useConversation from '@/app/hooks/use-conversation';
import { useParams } from 'next/navigation';
import { pusherClient } from '@/app/libs/pusher';
import { find } from 'lodash';

interface BodyProps {
    initialMessages: FullMessage[];
}


const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
    

    //  ALL THE CONSTANTS 

    const bottomRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState(initialMessages)
    const { conversationId } = useConversation();

    // ALL THE FUNCTIONS

    useEffect(() => {
        
        pusherClient.subscribe(conversationId);
        bottomRef?.current?.scrollIntoView()

        // MessageHandler
        const messageHandler = (message: FullMessage) => {

            setMessages((current) => {
                if (find(current, { id: message.id })) {
                    return current
                }
                return [...current, message]
            })
        }

        // Update MessageHandler
        const updateMessageHandler = (message: FullMessage) => {
            // Will create later
        }

        pusherClient.bind("messages:new", messageHandler)

        return () => {
            pusherClient.unsubscribe(conversationId);
            pusherClient.unbind("messages:new",messageHandler);
        }
        

    },[conversationId])
    

    return (
        <div className=' h-full flex flex-col'>
            {messages.map((item,i) => {
                return (
                    <>
                        <MessageBox
                            isLast = {i === messages.length - 1}
                            data={item}
                            key={item.id}
                        />
                    </>
                )
            })}
            <div className=' mt-auto pt-5' ref={bottomRef}>

            </div>
        </div>
    )
}

export default Body
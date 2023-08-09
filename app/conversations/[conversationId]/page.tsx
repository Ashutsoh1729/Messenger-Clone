import React from 'react'
import Header from './components/header'

import Footer from './components/footer'
import Body from './components/body'
import getConversationById from '@/app/actions/get-conversation-by-id'
import getMessages from '@/app/actions/get-messages'


const ConversationPage = async ({ params }: { params: { conversationId: string } }) => {
    
    const conversationId = params.conversationId;
    const conversation = await getConversationById(conversationId);
    const messages = await getMessages(conversationId)
    // console.log(messages);
    // console.log(conversationId);
    // console.log(params);
    
    
    

    return (
        <>
            <div className=' h-full w-full lg:pl-60 flex flex-col'>
                <Header conversation = {conversation!} />
                <Body initialMessages = {messages} />
                <Footer /> 
            </div>
        </>
    )
}

export default ConversationPage
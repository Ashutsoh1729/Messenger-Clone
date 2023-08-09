'use client'
import React from 'react'
import useConversation from '../hooks/use-conversation'
import EmptyState from '../components/EmptyState';
import clsx from 'clsx';

const page = () => {

    const { isOpen } = useConversation();


    return (
        <div
            className={clsx(`
                lg:pl-80 h-full lg:block`,
                isOpen ? "block" : "hidden"
            )}
        >
            <EmptyState />
        </div>
    )
}

export default page
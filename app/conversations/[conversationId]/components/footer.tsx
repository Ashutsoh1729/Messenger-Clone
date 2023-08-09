'use client'
import { Input } from '@/components/ui/input'
import React from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'



const formSchema = z.object({
    message: z.string(),
})

interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({ }) => {

    // Here All Constants 

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        },
    })

    const pathname = useParams();
    const conversationId = pathname?.conversationId


    // Here all the Functions 

    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            console.log(data);
            const response = await axios.post("/api/message", {...data, conversationId: conversationId})
            console.log(response);
            

        } catch (error) {
            console.log(error);
        } finally {
            form.reset();
        }


    }


    return (
        <div className=' w-full border-t-2 py-2 mt-auto' >
            <div className=' container flex items-center py-2'>
                <div>
                    <BsEmojiSmile size={20} />
                </div>
                <div className=' pl-5 w-full'>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSubmit)}
                            className="flex w-full"
                        >
                            <FormField
                                control={form.control}
                                name="message"

                                render={({ field }) => (
                                    <FormItem className=' w-full'>
                                        <FormControl>
                                            <Input placeholder="Share" {...field} autoComplete='off' className=' w-9/12' />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className=' flex items-center justify-center m-0'>
                                <Button className=' p-3'><MdOutlineKeyboardArrowRight size={29}/></Button>
                            </div>
                        </form>
                    </Form>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Footer
import PusherServer from "pusher"
import PusherClient from "pusher-js"
import { string } from "zod"

const pusher_key: string = process.env.NEXT_PUBLIC_PUSHER_APP_KEY!

export const pusherServer = new PusherServer({
    appId: process.env.PUSHER_APP_ID!,
    key: pusher_key,
    secret: process.env.PUSHER_SECRET!,
    cluster: 'eu',
    useTLS: true,
})


export const pusherClient = new PusherClient(
    pusher_key,
    {
        channelAuthorization: {
            endpoint: "/api/pusher/auth",
            transport:"ajax"
        },
        cluster:"eu",
    }
)

















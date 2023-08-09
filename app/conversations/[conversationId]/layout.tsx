import Sidebar from "@/app/components/sidebar/Sidebar";
import ConversationList from "../components/ConversationList";
import getConversations from "@/app/actions/get-conversations";


export default async function ConversationsLayout(
    { children }:
        { children: React.ReactNode }) {
    const conversations = await getConversations();

    return (
        <Sidebar>
            <div className="h-full">
                <ConversationList initialItems={conversations!} />
                {children}
            </div>

        </Sidebar>
    )
}
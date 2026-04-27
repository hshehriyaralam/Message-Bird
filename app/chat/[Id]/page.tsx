"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import ChatHeader from "@/components/chat/chatHeader";
import ChatArea from "@/components/chat/chatArea";
import MessageInput from "@/components/chat/messageInput";
import { useAuthStore } from "@/store/useAuthStore";
import { useChatStore } from "@/store/useChatStore";
import { getOrCreateConversation } from "@/lib/helper/getOrCreateConversation";
import { getMessages } from "@/lib/helper/getMessage";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";
import {  getSelectedUser } from "@/lib/helper/getAlluser";




const Chats = () => {
  const [actveUser, setActiveUser] = useState<any[]>([])
  const { conversationId, setConversationId, setMessages, appendMessage} = useChatStore();
  const supabase = getSupabaseBrowserClient();
  const params = useParams();
  const selectedUserId = params.Id as string;
  const { currentUserId } = useAuthStore();
  const hasRun = useRef(false);


  const fetchSelectUser =  useMemo(() => async () => {
    const selectUser = await getSelectedUser(selectedUserId)
    setActiveUser(selectUser)
  },[actveUser,currentUserId])


  
  useEffect(() => {
    if (hasRun.current) return;
    if (!currentUserId || !selectedUserId) return;
    hasRun.current = true;
    const setupConversation = async () => {
      const conversationId = await getOrCreateConversation(
        currentUserId,
        selectedUserId,
      );
      if (conversationId) {
        setConversationId(conversationId);
      }
    };
    setupConversation();
  }, [currentUserId, selectedUserId]);

  useEffect(() => {
    if (!conversationId) return;
    const fetchOldMessages = async () => {
      const oldMessages = await getMessages(conversationId);
      setMessages(oldMessages);
    };
    fetchSelectUser()
    fetchOldMessages();
    
  }, [conversationId]);

  
  
  useEffect(() => {
    if (!conversationId) return;
    
    const channel = supabase
    .channel(`chat-${conversationId}`)
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
        filter: `conversation_id=eq.${conversationId}`,
      },
      (payload) => {
        appendMessage(payload.new as any);
      }
    )
    .subscribe();
    
    return () => {
    supabase.removeChannel(channel);
  };
}, [conversationId]);



return (
    <section className="h-screen flex flex-col">
      <ChatHeader Name={actveUser?.full_name}  />
      <ChatArea />
      <MessageInput />
    </section>
  );
};

export default Chats;

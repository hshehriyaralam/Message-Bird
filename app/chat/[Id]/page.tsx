"use client";

import ChatHeader from "@/components/chat/chatHeader";
import ChatArea from "@/components/chat/chatArea";
import MessageInput from "@/components/chat/messageInput";

const Chats = () => {
  return (
    <section className="h-screen flex flex-col bg-[#f8fafc]">
      <ChatHeader />
      <ChatArea />
      <MessageInput />
    </section>
  );
};

export default Chats;
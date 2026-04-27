"use client";

import { useChatStore } from "@/store/useChatStore";
import MessageBubble from "./messageBubble";
import { useAuthStore } from "@/store/useAuthStore";

const ChatArea = () => {
  const { messages } = useChatStore();
  const { currentUserId } = useAuthStore();

  return (
    <section className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg.message}
          time={new Date(msg.created_at).toDateString()}
          isSender={msg.sender_id === currentUserId}
        />
      ))}
    </section>
  );
};

export default ChatArea;
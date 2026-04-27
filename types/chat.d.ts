export type MessageBubbleProps = {
  message: string;
  isSender?: boolean;
  time: string;
};



export type ChatStoreType = {
  conversationId: string | null;
  setConversationId: (id: string) => void;
};


 type MessageType = {
  id: string;
  message: string;
  sender_id: string;
  created_at: string;
};

export type ChatStore = {
  conversationId: string | null;
  messages: MessageType[];
  setConversationId: (id: string) => void;
  setMessages: (messages: MessageType[]) => void;
  appendMessage: (message: MessageType) => void;
};
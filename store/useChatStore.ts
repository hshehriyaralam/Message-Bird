
import { create } from "zustand";
import {ChatStore} from '@/types/chat'




export const useChatStore = create<ChatStore>((set) => ({
  conversationId: null,
  messages: [],

  setConversationId: (id) =>
    set({
      conversationId: id,
    }),

  
  setMessages: (messages) =>
    set({
      messages,
    }),

  appendMessage: (message) =>
  set((state) => ({
    messages: [...state.messages, message],
  })),
}));

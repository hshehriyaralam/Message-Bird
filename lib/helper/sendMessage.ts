import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";

export const sendMessage = async (
  conversationId: string,
  senderId: string,
  message: string
) => {
  const supabase = getSupabaseBrowserClient();

  const { data, error } = await supabase
    .from("messages")
    .insert({
      conversation_id: conversationId,
      sender_id: senderId,
      message: message,
      message_type: "text",
    }  as any)
    .select()
    .single();

  if (error) {
    console.log("Send Message Error:", error.message);
    return null;
  }

  return data;
};

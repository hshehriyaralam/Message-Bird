import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";

export const getMessages = async (conversationId: string) => {
  const supabase = getSupabaseBrowserClient();

  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at", {
      ascending: true,
    });

  if (error) {
    console.log("Fetch Messages Error:", error.message);
    return [];
  }

  return data || [];
};

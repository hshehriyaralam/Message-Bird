import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";

export const getLastMessage = async (senderId: string) => {
  const supabase = getSupabaseBrowserClient();

  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("sender_id", senderId)
    .single()

  if (error) {
    console.log("Fetch Last Message Error:", error.message);
    return [];
  }

  return data || [];
};





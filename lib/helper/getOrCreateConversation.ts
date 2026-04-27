import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";

export const getOrCreateConversation = async (
  currentUserId: string,
  selectedUserId: string
) => {
  const supabase = getSupabaseBrowserClient();

  // Check old conversation
  const { data: existingConversation } = await supabase
    .from("conversations")
    .select("*")
    .or(`and(user_one.eq.${currentUserId},user_two.eq.${selectedUserId}),and(user_one.eq.${selectedUserId},user_two.eq.${currentUserId})`)
    .maybeSingle();

  if (existingConversation) {
    return (existingConversation as any).id;
  }

  // Create new conversation
  const { data: newConversation, error } = await supabase
    .from("conversations")
    .insert({
      user_one: currentUserId,
      user_two: selectedUserId,
    } as any)
    .select()
    .single();


  if (error) {
    console.log("Conversation Error:", error.message);
    return null;
  }

  return  (newConversation as any).id;
};
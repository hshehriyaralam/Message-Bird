  import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";

  export const getAllUsers = async (currentUserId: string) => {
    const supabase = getSupabaseBrowserClient();

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .neq("id", currentUserId)
      .order("created_at", { ascending: false });

    if (error) {
      console.log("Fetch Users Error:", error.message);
      return [];
    }

    return data || [];
  };



    export const getSelectedUser = async (selectedUserId: string) => {
    const supabase = getSupabaseBrowserClient();

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", selectedUserId)
      .single()

    if (error) {
      console.log("Fetch slected user Users Error:", error.message);
      return [];
    }

    return data || [];
  };


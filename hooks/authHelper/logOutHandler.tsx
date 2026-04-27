"use client"

import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";
export const handleLogOut = async (router : any) => {
        const supabase = getSupabaseBrowserClient()
      await supabase.auth.signOut();
      router.replace('/login')
}
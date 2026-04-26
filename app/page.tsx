'use client'

import { Button } from "@/components/ui/button";
import { handleLogOut } from "@/hooks/authHelper/logOutHandler";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter()
  const logOut = async () => {
    await handleLogOut(router)
  }
  return (
    <div>
      <Button
      onClick={logOut}
      className="p-2  border border-gray-200 bg-primary text-white">
        Log Out
      </Button>
    </div>
  );
}

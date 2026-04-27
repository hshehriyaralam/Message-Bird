"use client"
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien"
// import { useAuthStore } from "@/store/useAuthStore";
import type {LoginHandlerPropsTypes} from '@/types/auth'
import { toast } from "sonner";


export const LoginUpHandler = async ({
    email,
    password,
    router,
    reset,
}:LoginHandlerPropsTypes) => {
  // const {currentUserId, getCurrentUser} = useAuthStore() 
    const supabase = getSupabaseBrowserClient()
    try {
    const { data, error : LoginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (LoginError?.message === 'Email not confirmed') {
      toast.error("Please confirm email first.", {position : 'bottom-right'});
      return;
    }

    if (LoginError?.message === 'Invalid login credentials') {
      toast.error("Email Or Password not valid", {position : 'bottom-left'});
      return;
    }
    toast.success("Login Successfully", {position : 'bottom-left'});
    reset()

  // if(!LoginError && data?.user?.id){
  //   setCurrentUserId(data.user.id)
  // }
  router.replace("/");
  router.refresh();
} catch (error:unknown) {
    if(error instanceof Error){
      console.log("error", error.message)
    }
    toast.error("Something went wrong in Login", {position : 'bottom-left'});
  } 
}
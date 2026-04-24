"use client"
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien"
import type {LoginHandlerPropsTypes} from '@/types/auth'
import { toast } from "sonner";


export const LoginUpHandler = async ({
    email,
    password,
    router,
    reset,
}:LoginHandlerPropsTypes) => {
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
    router.push('/')
    reset()
  } catch (error:unknown) {
    if(error instanceof Error){
      console.log("error", error.message)
    }
    toast.error("Something went wrong in Login", {position : 'bottom-left'});
  } 
}
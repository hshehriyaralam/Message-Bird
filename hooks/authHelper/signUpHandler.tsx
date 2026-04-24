"use client"
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien"
import { toast } from "sonner";
import type {SignUpHandlerPropsTypes} from '@/types/auth'

export const SignUpHandler = async ({
    email,
    password,
    name, 
    router,
    reset
}:SignUpHandlerPropsTypes) => {
    const supabase = getSupabaseBrowserClient()
    try{
    const { data, error : signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });
    if (signUpError) {
      toast.error(signUpError.message,  {position : 'bottom-left'});
      return;
    }
    toast.success("Successfully SignUp", {position : 'bottom-left'})
    router.push('/login')
    reset()
    }catch(error:unknown){
      if(error instanceof Error)
        console.log(error.message)
      toast.error("Something went wrong in SignUp",  {position : 'bottom-left'})
    }

}
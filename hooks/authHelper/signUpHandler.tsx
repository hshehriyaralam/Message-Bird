"use client"
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";
import { toast } from "sonner";
import type { SignUpHandlerPropsTypes } from "@/types/auth";

export const SignUpHandler = async ({
  email,
  password,
  name,
  router,
  reset,
}: SignUpHandlerPropsTypes) => {
  const supabase = getSupabaseBrowserClient();
  try {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (signUpError) {
      toast.error(signUpError.message, {
        position: "bottom-left",
      });
      return;
    }
    const userId = data?.user?.id;
    if (!userId) {
      toast.error("User ID not found");
      return;
    }
    const { error: profileError } = await supabase
      .from("profiles")
      .insert([
        {
          id: userId,
          email: email,
          full_name: name,
        },
      ] as any);

    if (profileError) {
      console.log(profileError.message);
      return;
    }

    toast.success("Successfully Signed Up", {
      position: "bottom-left",
    });

    router.replace("/login");
    router.refresh();
    reset();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }

    toast.error("Something went wrong in SignUp", {
      position: "bottom-left",
    });
  }
};
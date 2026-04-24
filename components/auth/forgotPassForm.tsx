"use client";
import { useId, useState } from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useForm } from "react-hook-form";
import { ForgotPassDataTypes } from "@/types/auth";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";
import { toast } from "sonner";

export default function ForgotPassForm() {
  const [loading, setLoading] = useState(false);
    const emailId = useId()
    const supabase = getSupabaseBrowserClient()
    
  


  const {
    register,
    reset ,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPassDataTypes>();

  const onSubmit = async  (data: ForgotPassDataTypes) => {
    if(loading) return
    try{
      setLoading(true)
      const email = data?.email
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/resetPassword`,
      });
      toast.success("Link Share on your email", {position : 'bottom-left'})
      setLoading(false)
      reset()
    }catch(error: unknown){
      if(error instanceof Error){
        console.log(error.message)
        toast.error(error.message,  {position : 'bottom-left'})
      }
    }

  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center px-4 py-6 font-quicksand">
      <div className="w-full max-w-md ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-gray-200 p-5 lg:p-6 w-full
            min-h-[400px] rounded-xl flex flex-col gap-4"
        >
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-primary text-left    font-quicksand  mt-4  mb-3">
              Forgot your password
            </h2>

            <p className="text-gray-600 font-medium font-quicksand text-xs lg:text-[14px] ">
              Enter your email address you'd like your password reset
              information sent to{" "}
            </p>
          </div>

          <div className="w-full mt-4  flex flex-col items-start  gap-2">
            <label  htmlFor={emailId} className="text-gray-700 font-medium  text-xs lg:text-[15px] text-md  font-quicksand  mx-1">
              Enter Email address
            </label>
            <input
             required
            id={emailId}
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Your Email"
              className=" w-full  p-3 px-4 rounded-xl border border-gray-200 text-sm sm:text-base focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-[15px] cursor-pointer
            bg-primary hover:bg-primary/80 text-white font-semibold py-5 sm:py-6 rounded-xl font-quicksand "
          >
            {loading ? (
              <Spinner className="lg:size-7  size-5" />
            ) : (
              "Request reset link"
            )}
          </Button>

          <p className="text-gray-500 text-xs sm:text-sm text-center">
            Back to login?{" "}
            <span className="text-blue-900 font-semibold hover:underline">
              <a href="/login">Login</a>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}

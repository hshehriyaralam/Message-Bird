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
  const emailId = useId();
  const supabase = getSupabaseBrowserClient();

  const {
    register,
    reset,
    handleSubmit,
  } = useForm<ForgotPassDataTypes>();

  const onSubmit = async (data: ForgotPassDataTypes) => {
    if (loading) return;

    try {
      setLoading(true);

      const email = data?.email;

      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/resetPassword`,
      });

      toast.success("Link Share on your email", {
        position: "bottom-left",
      });

      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);

        toast.error(error.message, {
          position: "bottom-left",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full">
      <div className="w-full max-w-md mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full border border-gray-200 rounded-xl 
          p-4 sm:p-6 md:p-7 
          min-h-[380px] 
          flex flex-col gap-5 shadow-sm"
        >
          <div>
            <h2
              className="text-xl sm:text-2xl font-bold text-primary 
              text-left font-quicksand mb-3"
            >
              Forgot your password
            </h2>

            <p
              className="text-gray-600 font-medium font-quicksand 
              text-xs sm:text-sm"
            >
              Enter your email address you'd like your password reset
              information sent to
            </p>
          </div>

          {/* Email */}
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor={emailId}
              className="text-gray-700 font-medium 
              text-sm sm:text-base font-quicksand"
            >
              Enter Email address
            </label>

            <input
              required
              id={emailId}
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Your Email"
              className="w-full p-3 px-4 rounded-xl border border-gray-200 
              text-sm sm:text-base 
              focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-sm sm:text-base cursor-pointer
            bg-primary hover:bg-primary/80 text-white 
            font-semibold py-5 sm:py-6 rounded-xl font-quicksand"
          >
            {loading ? (
              <Spinner className="size-5 sm:size-6" />
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
"use client";
import React, { useId, useState } from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useForm } from "react-hook-form";
import { ResetPassDataTypes } from "@/types/auth";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

 function ResetPasswordForm() {
  const [loading, setLoading] = useState(false);
  const passwordId = useId();
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<ResetPassDataTypes>();

  const onSubmit = async (data: ResetPassDataTypes) => {
    if (loading) return;

    try {
      setLoading(true);

      const newPassword = data?.password;

      await supabase.auth.updateUser({
        password: newPassword,
      });
      router.replace("/login");
      router.refresh();
      toast.success("Successfully Change Password", {
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
              Reset your password
            </h2>

            <p
              className="text-gray-600 font-medium font-quicksand 
              text-xs sm:text-sm"
            >
              Almost done. Enter your new password and you're all set.
            </p>
          </div>

          {/* Password */}
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor={passwordId}
              className="text-gray-700 font-medium 
              text-sm sm:text-base font-quicksand"
            >
              Password
            </label>

            <input
              required
              id={passwordId}
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter New Password"
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
              "Change password"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}


export default  React.memo(ResetPasswordForm)
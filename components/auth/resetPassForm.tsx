"use client";
import { useId, useState } from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useForm } from "react-hook-form";
import { ResetPassDataTypes } from "@/types/auth";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const [loading, setLoading] = useState(false);
  const paswordId = useId();
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetPassDataTypes>();

  const onSubmit = async (data: ResetPassDataTypes) => {
    if (loading) return;
    try {
      setLoading(true);
      const newPassword = data?.password;
      await supabase.auth.updateUser({
        password: newPassword,
      });
      router.push("/login");
      toast.success("Successfully Change Password", {position : 'bottom-left'});
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error(error.message, {position : 'bottom-left'});
      }
    } finally {
      setLoading(false);
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
              Reset your password
            </h2>

            <p className="text-gray-600 font-medium font-quicksand text-xs lg:text-[15px] ">
              Almost done. Enter your new password and you're all set.{" "}
            </p>
          </div>

          <div className="w-full mt-4  flex flex-col items-start  gap-2">
            <label
              htmlFor={paswordId}
              className="text-gray-700 font-medium mx-1
             text-xs lg:text-[15px] text-md  font-quicksand"
            >
              Password
            </label>
            <input
              required
              id={paswordId}
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter New Password "
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
              "Change password"
            )}
          </Button>

          {/* <p className="text-gray-500 text-xs sm:text-sm text-center">
            Back to login?{" "}
            <span className="text-blue-900 font-semibold hover:underline">
              <a href="/login">Login</a>
            </span>
          </p> */}
        </form>
      </div>
    </section>
  );
}

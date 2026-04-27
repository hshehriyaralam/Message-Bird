"use client";
import { LoginDataTypes } from "@/types/auth";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useForm } from "react-hook-form";
import React, { useId, useState } from "react";
import Link from "next/link";
import { LoginUpHandler } from "@/hooks/authHelper/loginHandler";
import { useRouter } from "next/navigation";

 function LoginForm() {
  const [loading, setLoading] = useState(false);
  const emailId = useId();
  const passwordId = useId();
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
  } = useForm<LoginDataTypes>();

  const onSubmit = async (data: LoginDataTypes) => {
    if (loading) return;

    setLoading(true);

    const email = data?.email;
    const password = data?.password;

    await LoginUpHandler({
      email,
      password,
      router,
      reset,
    });

    setLoading(false);
  };

  return (
    <section className="w-full">
      <div className="w-full max-w-md mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full border border-gray-200 rounded-xl 
          p-4 sm:p-6 md:p-7 
          min-h-[380px] 
          flex flex-col gap-4 shadow-sm"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary text-center font-quicksand">
            Login
          </h2>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor={emailId}
              className="text-gray-700 font-medium text-sm sm:text-base font-quicksand"
            >
              Email
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

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor={passwordId}
              className="text-gray-700 font-medium text-sm sm:text-base font-quicksand"
            >
              Password
            </label>

            <input
              required
              id={passwordId}
              {...register("password", { required: true })}
              type="password"
              placeholder="Enter Your Password"
              className="w-full p-3 px-4 rounded-xl border border-gray-200 
              text-sm sm:text-base 
              focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Link href={"/forgotPassword"}>
              <p
                className="font-quicksand text-primary text-sm text-right 
                font-medium hover:underline"
              >
                Forgot Password
              </p>
            </Link>

            <Button
              type="submit"
              disabled={loading}
              className="w-full text-md cursor-pointer 
              bg-primary hover:bg-primary/80 text-white 
              font-semibold py-5 sm:py-6 rounded-xl font-quicksand"
            >
              {loading ? (
                <Spinner className="size-5 sm:size-6" />
              ) : (
                "Login"
              )}
            </Button>
          </div>

          <p className="text-gray-500 text-xs sm:text-sm text-center font-quicksand">
            Don't have an account?{" "}
            <span className="text-blue-900 font-semibold font-quicksand hover:underline">
              <a href="/signup">SignUp</a>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}


export default  React.memo(LoginForm)
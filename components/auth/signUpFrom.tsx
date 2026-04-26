"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useId, useState } from "react";
import { Spinner } from "../ui/spinner";
import type { SignUpDataTypes } from "@/types/auth";
import { SignUpHandler } from "@/hooks/authHelper/signUpHandler";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const router = useRouter();
  

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<SignUpDataTypes>();

  const onSubmit = async (data: SignUpDataTypes) => {
    setLoading(true);
    const email = data?.email;
    const password = data?.password;
    const name = data?.name;
    await SignUpHandler({
      email,
      password,
      name,
      router,
      reset,
    });

    setLoading(false);
  };

  return (
    <section className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full border border-gray-200 rounded-xl p-4 sm:p-6 md:p-7 shadow-sm flex flex-col gap-4"
      >
        <h2 className="text-center text-xl sm:text-2xl font-bold text-primary">
          Sign Up
        </h2>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor={nameId}
            className="text-sm sm:text-base font-medium text-gray-700"
          >
            Name
          </label>

          <input
            id={nameId}
            type="text"
            required
            placeholder="Enter Your Name"
            {...register("name", { required: true })}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor={emailId}
            className="text-sm sm:text-base font-medium text-gray-700"
          >
            Email
          </label>

          <input
            id={emailId}
            type="email"
            required
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor={passwordId}
            className="text-sm sm:text-base font-medium text-gray-700"
          >
            Password
          </label>

          <input
            id={passwordId}
            type="password"
            required
            placeholder="Enter Your Password"
            {...register("password", { required: true })}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-5 sm:py-6 rounded-xl bg-primary hover:bg-primary/80 text-white font-semibold cursor-pointer"
        >
          {loading ? (
            <Spinner className="size-5 sm:size-6" />
          ) : (
            "Sign Up"
          )}
        </Button>

        <p className="text-center text-xs sm:text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-blue-900 hover:underline"
          >
            Login
          </a>
        </p>
      </form>
    </section>
  );
}
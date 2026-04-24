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
  const nameId = useId()
  const emailId = useId()
  const paswordId = useId()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset ,
    formState: { errors },
  } = useForm<SignUpDataTypes>();

  const onSubmit =  async (data: SignUpDataTypes) => {
    setLoading(true)
    const email  = data?.email
    const password  = data?.password
    const name  = data?.name
    await SignUpHandler({email,password,name,router,reset})
    setLoading(false)
  };

  return (
    <section className="flex min-h-svh w-full items-center justify-center px-4 py-6">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-gray-200 p-5 sm:p-6 w-full min-h-[300px] rounded-xl flex flex-col gap-4 shadow-sm"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary  text-center">
            Sign Up
          </h2>

          <div  className="flex flex-col gap-1">
          <label 
          htmlFor={nameId}
          className="text-gray-700 font-medium text-sm sm:text-base  mx-2">
            Name
          </label>
          <input
          required
            id={nameId}
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter Your Name"
            className="p-3 px-4 rounded-xl border border-gray-200 text-sm sm:text-base focus:ring-2 focus:ring-primary outline-none"
          />
          </div>

          <div  className="flex flex-col gap-1">
          <label 
          htmlFor={emailId}
          className="text-gray-700 font-medium text-sm sm:text-base  mx-2">
            Email
          </label>
          <input
           required
          id={emailId}
          type="email"
          placeholder="Enter Your Email"
          {...register("email", { required: true })}
          className="p-3 px-4 rounded-xl border border-gray-200 text-sm sm:text-base focus:ring-2 focus:ring-primary outline-none"
          />
          </div>

          <div  className="flex flex-col gap-1">
          <label 
          htmlFor={paswordId}
          className="text-gray-700 font-medium text-sm sm:text-base mx-2">
            Password
          </label>
          <input
           required
          id={paswordId}
            {...register("password", { required: true })}
            type="password"
            placeholder="Enter Your Password"
            className="p-3 px-4 rounded-xl border border-gray-200 text-sm sm:text-base focus:ring-2 focus:ring-primary outline-none"
          />
            </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-md   cursor-pointer bg-primary  hover:bg-primary/80 text-white font-semibold
             py-5 sm:py-6 rounded-xl "
          >
            {loading ? <Spinner className="lg:size-7  size-5" /> : "Sign Up"}
          </Button>

          <p className="text-gray-500 text-xs sm:text-sm text-center">
            Already have an account?{" "}
            <span className="text-blue-900 font-semibold hover:underline">
              <a href="/login">Login</a>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}

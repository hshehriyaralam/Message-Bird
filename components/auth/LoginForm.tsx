"use client";
import { LoginDataTypes } from "@/types/auth";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useForm } from "react-hook-form";
import { useId, useState } from "react";
import Link from "next/link";
import { LoginUpHandler } from "@/hooks/authHelper/loginHandler";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const emailId = useId();
  const paswordId = useId();
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataTypes>();
  const onSubmit = async (data: LoginDataTypes) => {
    if (loading) return;
    setLoading(true);
    const email = data?.email;
    const password = data?.password;
    await LoginUpHandler({ email, password, router,reset });
    setLoading(false);
  };

  return (
    <section className="flex min-h-svh w-full items-center justify-center px-4 py-6 font-quicksand">
      <div className="w-full max-w-md ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-gray-200 p-5 sm:p-8 w-full
     min-h-[400px] rounded-xl flex flex-col gap-4"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-primary text-center font-quicksand">
            Login
          </h2>

          <div className="flex flex-col gap-1">
            <label
              htmlFor={emailId}
              className="text-gray-700 font-medium text-sm sm:text-base font-quicksand  mx-2"
            >
              Email
            </label>
            <input
              required
              id={emailId}
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter Your Email"
              className="p-3 px-4 rounded-xl border border-gray-200 text-sm sm:text-base focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor={paswordId}
              className="text-gray-700 font-medium text-sm sm:text-base font-quicksand  mx-2"
            >
              Password
            </label>
            <input
              required
              id={paswordId}
              {...register("password", { required: true })}
              className="p-3 px-4 rounded-xl border border-gray-200 text-sm sm:text-base focus:ring-2 focus:ring-primary outline-none"
              type="password"
              placeholder="Enter Your Password"
            />
          </div>

          <div>
            <Link href={"/forgotPassword"}>
              <p
                className="font-quicksand text-primary  text-sm text-right font-medium
            mb-1 mx-2 hover:underline"
              >
                Forgot Password
              </p>
            </Link>

            <Button
              type="submit"
              disabled={loading}
              className="w-full text-md cursor-pointer
            bg-primary hover:bg-primary/80 text-white font-semibold py-5 sm:py-6 rounded-xl font-quicksand "
            >
              {loading ? <Spinner className="lg:size-7  size-5" /> : "Login"}
            </Button>
          </div>

          <p className="text-gray-500 text-xs sm:text-sm text-center font-quicksand">
            Don't have an account?{" "}
            <span className="text-blue-900 font-semibold font-quicksand  hover:underline">
              <a href="/signup">SignUp</a>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}

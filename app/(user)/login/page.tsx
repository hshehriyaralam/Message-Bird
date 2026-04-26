import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <section
      className="min-h-svh w-full flex items-center justify-center 
      px-4 sm:px-6 md:px-8 py-6 font-quicksand">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
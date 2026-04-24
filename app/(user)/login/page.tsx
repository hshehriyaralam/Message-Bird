import LoginForm from "@/components/auth/LoginForm"
const Login = () => {
  return (
     <section className="flex min-h-svh  w-full items-center 
     justify-center p-6 md:p-6  font-quicksand">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </section>
  )
}

export default Login

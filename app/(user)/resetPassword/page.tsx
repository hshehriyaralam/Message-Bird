import ResetPasswordForm from "@/components/auth/resetPassForm"


const ResetPassword = () => {
  return (
    <section className="flex min-h-svh  w-full items-center justify-center p-6 md:p-6  font-quicksand">
      <div className="w-full max-w-sm">
        <ResetPasswordForm />
    </div>
    </section>
  )
}

export default ResetPassword

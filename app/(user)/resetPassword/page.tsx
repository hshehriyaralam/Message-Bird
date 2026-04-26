import ResetPasswordForm from "@/components/auth/resetPassForm";

const ResetPassword = () => {
  return (
    <section
      className="min-h-svh w-full flex items-center justify-center 
      px-4 sm:px-6 md:px-8 py-6 font-quicksand"
    >
      <div className="w-full max-w-md">
        <ResetPasswordForm />
      </div>
    </section>
  );
};

export default ResetPassword;
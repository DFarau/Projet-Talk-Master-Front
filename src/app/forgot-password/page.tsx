import AuthForm from "@/components/AuthForm";

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <AuthForm type="forgot-password" />
    </div>
  );
}
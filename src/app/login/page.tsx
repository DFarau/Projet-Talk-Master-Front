import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <AuthForm type="login" />
    </div>
  );
}
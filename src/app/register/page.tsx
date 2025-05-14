import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-full">
      <AuthForm type="register" />
    </div>
  );
}
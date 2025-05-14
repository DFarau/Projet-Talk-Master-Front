import TalkForm from "@/components/TalkForm";

export default function TalkPage() {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-white">
      <TalkForm type="create" />
    </div>
  );
}
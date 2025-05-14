import TalkForm from "@/components/TalkForm";

export default function TalkPage() {
  return (
    <div className="flex flex-col w-full items-center md:justify-center md:min-h-screen bg-white">
      <TalkForm type="create" />
    </div>
  );
}
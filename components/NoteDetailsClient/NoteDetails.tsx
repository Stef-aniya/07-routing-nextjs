"use client";
import { useRouter } from "next/navigation";
const NoteDetailsClient = () => {
  const router = useRouter();
  const handleBack = () => {
    const ok = confirm("Are you sure?");
    if (ok) {
      router.back();
    }
  };
  return <button onClick={handleBack}>Back</button>;
};
export default NoteDetailsClient;

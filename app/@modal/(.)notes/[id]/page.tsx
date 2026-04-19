import Modal from "@/components/Modal/Modal";
import { getNote } from "@/lib/api";
type Props = {
  params: { id: string };
};
const NotePreview = async ({ params }: Props) => {
  const note = await getNote(params.id);
  return (
    <Modal onClose={() => (window.location.href = "/notes")}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};
export default NotePreview;

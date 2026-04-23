import Modal from "@/components/Modal/Modal";
import { getNote } from "@/lib/api";
type Props = {
  params: { id: string };
};
const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getNote(id);
  return (
    <Modal onClose={() => (window.location.href = "/notes")}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p> Tag: {note.tag}</p>
    </Modal>
  );
};
export default NotePreview;

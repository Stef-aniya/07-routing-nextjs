import { getNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
type Props = {
  params: Promise<{ slug: string[] }>;
};
const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug[0];
  const category = tag === "all" ? undefined : tag;
  const data = await getNotes(category);
  return (
    <div>
      <h1>Notes</h1>
      {data?.notes?.length > 0 ? (
        <NoteList notes={data.notes} />
      ) : (
        <p> No notes found</p>
      )}
    </div>
  );
};
export default NotesByCategory;

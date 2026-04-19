type Props = {
  params: { slug: string[] };
};
const NotesPage = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];
  return (
    <div>
      <h1>Notes</h1>
      <p>Selected tag: {tag}</p>
    </div>
  );
};
export default NotesPage;

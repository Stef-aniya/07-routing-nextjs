import css from "./LayoutNotes.module.css";
type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};
const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.content}>{children}</div>
    </section>
  );
};
export default NotesLayout;
// export default function Layout({ children }: { children: React.ReactNode }) {
//   return <div>{children}</div>;
// }

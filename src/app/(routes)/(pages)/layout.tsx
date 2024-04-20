import { Header } from "@/sections/layouts";
export default function MainLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      {modal}
    </>
  );
}

// INTERFACE
interface PageProps {
  children: React.ReactNode;
}

// COMPONENT
function Page({ children }: PageProps) {
  return (
    <main className="page">
      {children}
    </main>
  );
}

export default Page;

export default function FormIdLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <div className="bg-violet-100 min-h-screen">{children}</div>
      </>
    );
  }
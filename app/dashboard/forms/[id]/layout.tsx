import FormPageHeader from "@/components/FormPageHeader";
import { fetchFormById } from "@/lib/data";
import { notFound } from "next/navigation";

async function FormIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const form = await fetchFormById(params.id);

  if (!form?.id) {
    notFound();
  }

  return (
    <>
      <FormPageHeader form={form} />
      <div className="bg-violet-100 min-h-screen">{children}</div>
    </>
  );
}

export default FormIdLayout;

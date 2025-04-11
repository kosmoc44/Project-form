// app/dashboard/forms/[id]/page.tsx
import FormPageHeader from "@/components/FormPageHeader";
import { fetchFormById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function FormPage({
  params,
}: {
  params: { id: string }
}) {
  // Деструктурируем параметры сразу
  const { id } = params;
  
  try {
    // Используем полученный id
    const form = await fetchFormById(id);

    return (
      <>
        <FormPageHeader form={form} />
        <div className="p-4">Form Content Goes Here</div>
      </>
    );
  } catch (error) {
    console.log(error);
    
    notFound();
  }
}

import FormPageHeader from "@/components/FormPageHeader";
import { fetchFormById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function FormPage({ params }: { params: { id: string } }) {
  try {
    const form = await fetchFormById(params.id);

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

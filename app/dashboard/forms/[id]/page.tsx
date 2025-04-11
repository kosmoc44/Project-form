import FormPageHeader from "@/components/FormPageHeader";
import { fetchFormById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function FormPage({ params }: { params: { id: string } }) {
    const result = await fetchFormById(params.id);
  
    if ("error" in result || !result?.id) {
      notFound();
    }
  
    return (
      <>
        <FormPageHeader form={result} />
        <div className="p-4">Form Content Goes Here</div>
      </>
    );
  }

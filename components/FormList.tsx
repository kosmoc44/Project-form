import { fetchAllForms } from "@/lib/data";
import FormCard from "./FormCard";

async function FormList() {
  const forms = await fetchAllForms();
  return (
    <div>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </div>
  );
}

export default FormList;

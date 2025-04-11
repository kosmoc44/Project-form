import Link from "next/link";
import { Button } from "./ui/button";
import { File, Folder, MoreVertical, Star } from "lucide-react";
import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import IconButton from "./IconButton";
import { UserButton } from "@clerk/nextjs";
import SendForm from "./SendForm";

interface FormPageHeaderProps {
  form: IFormsEntity;
}

function FormPageHeader({ form }: FormPageHeaderProps) {
  return (
    <header
      className="flex flex-col items-start sm:items-center gap-y-4 fixed 
      w-full py-3 pt-4 px-4 bg-white shadow z-50"
    >
      <div className=" flex items-center w-full sm:items-center flex-wrap gap-3 justify-between">
        <div className="flex items-center sm:items-center gap-y-4">
          <Button asChild variant={"ghost"} size={"icon"}>
            <Link href={"/dashboard"}>
              <File />
            </Link>
          </Button>
          <p className="pl-1 sm:pl-4 pr-3">{form.localizeInfos.title}</p>
          <IconButton Icon={Folder} />
          <IconButton Icon={Star} />
        </div>
        <div className="flex items-center gap-2">
          <SendForm />
          <IconButton Icon={MoreVertical} />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* <FormPageHeaderBottom 
      form={form}
      /> */}
    </header>
  );
}

export default FormPageHeader;

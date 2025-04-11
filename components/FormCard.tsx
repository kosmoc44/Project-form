import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

function FormCard({ form }: { form: IFormsEntity }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {form.localizeInfos.title}
          <CardDescription>identifier: {form.identifier}</CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button asChild variant={"outline"}>
          <Link href={`/dashboard/forms/${form.identifier}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default FormCard;

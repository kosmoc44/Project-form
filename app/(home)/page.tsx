import AccessDenied from "@/components/AccessDenied";
import LINKButtons from "@/components/LINKButtons";
import { AccessibilityIcon, BarChart2Icon, CogIcon} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

const features = [
  {
    id: 1,
    title: "Easy to Use",
    description:
      "Our platform is designed with user-friendliness in mind, making it easy for anyone to create and manage forms.",
    Icon: <AccessibilityIcon />,
  },
  {
    id: 2,
    title: "Customizable Templates",
    description:
      "Choose from a variety of templates to create forms that suit your needs.",
    Icon: <BarChart2Icon />,
  },
  {
    id: 3,
    title: "Secure and Reliable",
    description:
      " We prioritize your data security and ensure that your forms are always available.",
    Icon: <CogIcon />,
  },
];

export default function Home({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <main>
      {searchParams.error ? (
        <AccessDenied />
      ) : (
        <>
          <div className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-5xl font-bold text-center">
                    Welcome to Project Forms
                  </h1>
                  <p className="text-2xl md:text-xl text-center text-gray-500">
                    Create and manage your forms effortlessly
                  </p>
                  <LINKButtons />
                </div>
              </div>
            </div>
            <section className="w-full py-12 md:py-24 lg:pt-50">
              <div className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Create Forms with Ease
                  </h2>
                  <p className="text-lg md:text-xl max-w-[700px] text-gray-500 md:text-xl-/relaxed">
                    Our platform allows you to create forms quickly and
                    efficiently, with a user-friendly interface and powerful
                    features.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature) => (
                    <Card key={feature.id} className="shadow-md">
                      <CardHeader className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">
                          {feature.title}
                        </h3>
                        <div>{feature.Icon}</div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-500">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <LINKButtons className="mt-8" />
              </div>
            </section>
          </div>
        </>
      )}
    </main>
  );
}
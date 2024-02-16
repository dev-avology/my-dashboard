import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Services } from '@/app/lib/definitions';
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowRightIcon,ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function ServiceCard({
  Services,
}: {
  Services: Services[];
}) {
  return (
    <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      {Services.map((service, i) => {
        return (
          <div key={service.id} className="flex flex-col overflow-hidden">
            <Card>
              <div className="relative flex-shrink-0">
                <div className="aspect-square w-full bg-gray-100 object-contain !h-48 w-full !object-cover"></div>
              </div>
              <CardHeader>
                <CardTitle>{service.amount}</CardTitle>
                <CardDescription> 
                {service.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                 <ScrollArea className="h-[200px] w-[350px] p-4 whitespace-pre-line text-base leading-6 text-gray-500">
                      {service.description && (
                    <div dangerouslySetInnerHTML={{ __html: service.description }} />
                  )}
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <p>
                <Button asChild>
                   <Link href="#" target="_blank">Purchase Now <ArrowRightCircleIcon/></Link>
                </Button>
                </p>
              </CardFooter>
            </Card>
          </div>
        );
      })}

    </div>

  );
}
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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServiceEdit from '../ui/components/service-edit'
import {Service,ServiceSchema} from "@/db/schema";

export default function ServiceCard({
  Services,
}: {
  Services: ServiceSchema[];
}) {
  return (
    <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 mt-8 pt-3 pb-4">
      
      {Services.map((service, i) => {
        return (
          <div key={service.id} className="flex flex-col overflow-hidden rounded-lg shadow ">
            <Card className="border-0 ">
              <div className="relative flex-shrink-0">
                <div className="aspect-square w-full bg-gray-100 object-contain !h-48 w-full !object-cover"></div>
                  <div className=" cursor-pointer absolute top-2 right-2">
                    <ServiceEdit row={service} />
                  </div>
              </div>
              <CardHeader>
                <CardTitle className="py-2 text-base font-semibold text-gray-900">{service.amount}</CardTitle>
                <CardDescription className="text-lg font-semibold leading-7 text-gray-900"> 
                {service.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="list-card">
                 <ScrollArea className="h-[200px] w-[350px]  whitespace-pre-line text-base leading-6 text-gray-500">
                      {service.description && (
                    <div dangerouslySetInnerHTML={{ __html: service.description }} />
                  )}
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <p className="w-full">
                <Button asChild className="w-full">
                   <Link href="#" target="_blank">Purchase Now <ArrowRightCircleIcon style={{ height: '20px', width: '20px',marginLeft:'5px' }}/></Link>
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
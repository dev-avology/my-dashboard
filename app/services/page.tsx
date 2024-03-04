import { getServices } from "@/app/db";
import { Services } from "@/app/lib/definitions";
import ServiceCard from "@/app/ui/services-card";
import AddServiceCard from "../ui/components/add-service-card"

export default async function Page() {

    const allServices = await getServices();
    //console.log(allServices)
    return (
        <div className="mx-auto max-w-screen-2xl">
            <div className="p-4">
                <div className="overflow-hidden bg-white rounded-lg shadow">
                    <AddServiceCard />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    
                        <div className="relative flex flex-col content-center">
                            <div className="flex justify-center">
                                <h1 className="mt-8 text-3xl font-bold text-gray-900">Unlimited creative content for startups and agencies</h1>
                            </div>
                            <div className="flex justify-center">
                                <div className="mt-4 text-base text-gray-500">Reel Unlimited provides unlimited graphic design and content writing services for startups and growing businesses at a flat monthly rate.
                                </div>
                            </div>
                        </div>
                        <ServiceCard Services={allServices}></ServiceCard>
                    </div>
                </div>
            </div>



        </div>
    );
}
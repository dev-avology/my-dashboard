import SideNav from '@/app/ui/dashboard/sidenav';
import {SiteHeader} from '@/components/site-header'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex flex-1 flex-col bg-gray-50 ">
      <SiteHeader/>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </div>
  );
}
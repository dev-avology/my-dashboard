import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CircleStackIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  Bars3Icon

} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboad', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Tasks',
    href: '#',
    icon: Bars3Icon,
  },
  { name: 'Services', href: '/services', icon: Squares2X2Icon },
  { name: 'Storage', href: '#', icon: CircleStackIcon },
  { name: 'Setting', href: '#', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}

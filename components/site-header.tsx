import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
           
            <Link
              href={'#'}
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.bell className="h-5 w-5 fill-current" />
                <span className="sr-only">Notifications</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
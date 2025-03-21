import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import Link from "next/link";

interface MobileNavProps {
    items: NavItem[];
}


export default function MobileNav({items}: MobileNavProps){
  useLockBodyScroll();

  return(
      <div className="fixed top-16 z-50 p-6 shadow-md md:hidden animate-in slide-in-from-bottom-80">
          <div>
              <Link href={"/"}>
                {siteConfig.name}
              </Link>
              <nav>
                  {items.map((item, index) =>(
                      <Link key={index} href={item.href}>{item.title}</Link>
                  ))}
              </nav>
          </div>
      </div>
  )
}
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import MobileMenu from "./MobileMenu";

const navMenu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Build Your Dream",
    link: "/build-your-dream",
  },
  {
    name: "Contact",
    link: "/contact",
  }
];

export default function Navbar(): React.JSX.Element {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  return (
    <nav className="h-20 bg-primary">
      <div className="px-2 lg:px-16 grid grid-cols-[200px,1fr] sm:grid-cols-[200px,1fr,200px] items-center h-full gap-2">
        <div id="company-logo">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div id="nav-menu" className="hidden sm:block">
          <ul className="w-full flex gap-8 select-none">
            {navMenu.map((item) => (
              <li key={item.link}
                className={`
                ${pathname === item.link ? 'text-secondary-blue' : 'text-primary'} 
                hover:text-secondary-blue transition-colors cursor-pointer`}
              >
                <Link href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <MobileMenu
          menu={navMenu}
          pathname={pathname}
        />
      </div>
    </nav>
  );
}

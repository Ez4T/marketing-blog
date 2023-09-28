import React from "react";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

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
  const pathname = headersList.get("x-pathname")
  return (
    <nav className="h-20 bg-primary">
      <div className="px-2 lg:px-16 grid 
      grid-cols-[200px,1fr]
      lg:grid-cols-[200px,1fr,200px] 
      items-center h-full gap-2">
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
        <div id="nav-menu" className="hidden sm:block flex-1 mx-auto">
          <ul className="flex justify-center gap-8 select-none">
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
        <div id="nav-search-box" className="hidden lg:block">
          <input
            className="w-full text-black
                bg-secondary bg-opacity-50 p-2 focus:outline-none rounded-sm
                placeholder-black placeholder-opacity-50 focus:bg-opacity-100 hover:bg-opacity-100
                transition-colors
                "
            type="text"
            required
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
}

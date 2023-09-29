import React from "react";
import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
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
        <DesktopMenu
          menu={navMenu}
        />
        <MobileMenu
          menu={navMenu}
        />
      </div>
    </nav>
  );
}

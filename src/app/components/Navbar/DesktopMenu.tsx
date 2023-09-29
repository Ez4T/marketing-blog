'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavMenu {
    menu: {
        name: string;
        link: string;
    }[];
}

export default function DesktopMenu({ menu }: NavMenu): React.JSX.Element {
    const pathname = usePathname();
    return (
        <div id="nav-menu" className="hidden sm:block">
            <ul className="w-full flex gap-8 select-none">
                {menu.map((item) => (
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
    )
}
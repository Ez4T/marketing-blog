'use client';
import React, { useState, useLayoutEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation';

interface MenuProps {
    menu: {
        name: string,
        link: string
    }[]
}

const MenuOutline = () => (
    <svg width={36} height={36} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10"
            strokeWidth="32" d="M80 160h352M80 256h352M80 352h352" />
    </svg>
)

export default function MobileMenu({ menu }: MenuProps): React.JSX.Element {
    const [open, setOpen] = useState<boolean>(false)
    const toggleMenu = () => setOpen(!open)

    const pathname = usePathname()
    const router = useRouter()

    const handleRoute = (link: string) => {
        router.push(link)
        setOpen(false)
    }

    useLayoutEffect(() => {
        const body = document.querySelector('body')
        body?.classList.remove('overflow-hidden')
        if (open) {
            body?.classList.add('overflow-hidden')
        }
    }, [open])

    return (
        <>
            <button
                onClick={toggleMenu}
                type="button"
                id="nav-menu-mobile"
                className="sm:hidden text-4xl text-primary flex justify-end items-center"
            >
                <MenuOutline />
            </button>
            <div 
            className={
                `transition-transform duration-300 ease-in-out fixed top-20 right-0 h-screen w-screen bg-primary-white 
                z-20`
            }
            style={{
                transform: open ? 'translateX(0)' : 'translateX(100%)'
            }}
            >
                <ul className='flex flex-col'>
                    {menu.map((item) => (
                        <li className={`
                            ${pathname === item.link ? 'text-secondary-blue' : 'text-primary-blue'} 
                            py-4 px-8 
                            text-2xl hover:text-secondary-blue transition-colors cursor-pointer
                            `}
                            onClick={() => handleRoute(item.link)}
                            key={item.link}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}   
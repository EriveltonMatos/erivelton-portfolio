'use client'

import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from './nav-item';



const NAV_ITEM = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Conhecimentos',
        href: '#conhecimentos'
    },
    {
        label: 'Projetos',
        href: '#projetos'
    },
    {
        label: 'Experiências',
        href: '#experiências'
    },

]

export const Header = () => {
    return ( 
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center ">
            <div className=" max-sm:flex-col max-sm:justify-center  container flex items-center justify-between">
                <Link href="#">
                   <Image
                   width={90}
                   height={90}
                   src="/images/wolf-piccc.png"
                   alt='Logo Erivelton Matos'
                   />
                </Link>
                <nav className="max-sm:hidden flex items-center gap-4 sm:gap-10 ">
                    {NAV_ITEM.map(item => (
                        <NavItem {...item} key={item.label} />
                    ))}
                </nav>

            </div>
        </header>
    );
};

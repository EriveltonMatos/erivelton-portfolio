import { cn } from "@/app/lib/utils";


type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({ label, href } : NavItemProps ) => {

    return (
        <a href={href} className={cn(
            'corPrincipal flex items-center gap-2 font-medium font-mono',
        )} >
            <span className="text-yellow-300 ">#</span>
            {label}
        </a>
    )
}
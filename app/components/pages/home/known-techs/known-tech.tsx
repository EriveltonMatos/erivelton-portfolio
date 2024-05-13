import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { ReactNode } from "react"

type KnownTechProps = {
    tech: {
        icon: ReactNode
        name: string
        startDate: string
    }
}

export const  KnownTech = ({ tech }: KnownTechProps) => {
    const relativeTime = getRelativeTimeString(new Date(tech.startDate), 'pt-BR',
    ).replace('há', '')
    return (
        <div className="p-6 rounded-lg  bg-gray-600/20 flex flex-col gap-2 corSecundaria hover:corPrincipal hover:bg-violet-900  transition-all border border-purple-800">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                {tech.icon}
            </div>

            <span>{relativeTime} de experiência</span>
        </div>
    )
}
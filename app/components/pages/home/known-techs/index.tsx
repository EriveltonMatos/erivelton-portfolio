import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { TbBrandGit, TbBrandJavascript, TbBrandNextjs, TbBrandReact, TbBrandTailwind } from "react-icons/tb"
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />
        
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
               
                <KnownTech tech={{
                    icon: <FaJava />,
                    name: 'Java',
                    startDate: '2022-06-01'
                }} />
                <KnownTech tech={{
                    icon: <SiSpring />,
                    name: 'Spring',
                    startDate: '2022-06-01'
                }} />
                <KnownTech tech={{
                    icon: <TbBrandNextjs />,
                    name: 'Next.js',
                    startDate: '2022-06-01'
                }} />
                <KnownTech tech={{
                    icon: <TbBrandReact />,
                    name: 'React',
                    startDate: '2022-06-01'
                }} />
                <KnownTech tech={{
                    icon: <TbBrandGit />,
                    name: 'GIT',
                    startDate: '2022-06-01'
                }} />
                <KnownTech tech={{
                    icon: <TbBrandTailwind />,
                    name: 'Tailwind',
                    startDate: '2022-06-01'
                }} />
            </div>
        </section>
    )
}
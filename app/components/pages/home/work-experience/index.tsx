import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

export const WorkExperience = () => {
    return (
    <section id="experiências" className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
        <div className="max-w-[420px]">
            <SectionTitle subtitle="experiências" title="Experiências Profissionais" />
            <p className="text-gray-400 mt-6">
                Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos
            </p>
        </div>

        <div className="flex flex-col gap-4">
            <ExperienceItem />
        </div>
    </section>    
    )
}
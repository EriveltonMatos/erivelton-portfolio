import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"

export const Highlightedprojects = () => {
    return (
        <section className="container py-16 ">
            <SectionTitle subtitle="destaques" title="Projetos em destaque" />
            <HorizontalDivider className="mb-16"/>

            <div>
                <ProjectCard />
                <HorizontalDivider className="my-16" />
            </div>
        </section>
    )
}
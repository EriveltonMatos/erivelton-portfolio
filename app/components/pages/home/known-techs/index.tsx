import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { TbBrandGit, TbBrandJavascript, TbBrandNextjs, TbBrandReact, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb"
import { SiHibernate, SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import 'animate.css'
import { MotionDiv } from "@/app/components/motion-div/motion-div"



const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1},
}


export const KnownTechs = () => {
    return (
        <MotionDiv
        variants={variants}
        initial="hidden"
        whileInView={{ opacity:1 }}
        
        transition={{
            delay: 0.5,
            ease: "easeInOut",
            duration: 0.5,
        }}
        viewport={{ amount: 0 }}
        className="flex gap-6 lg:gap-12 flex-col lg:flex-row ">
        <section id="conhecimentos" className=" container py-16">
           
            <SectionTitle  subtitle="competências" title="Conhecimentos" />
            
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
                    startDate: '2023-03-01'
                }} />
                <KnownTech tech={{
                    icon: <TbBrandJavascript />,
                    name: 'Javascript',
                    startDate: '2022-06-01'
                }} />
                <KnownTech tech={{
                    icon: <TbBrandTypescript />,
                    name: 'Typescript',
                    startDate: '2023-03-01'
                }} />
                <KnownTech tech={{
                    icon: <SiHibernate />,
                    name: 'Hibernate',
                    startDate: '2023-03-01'
                }} />
            </div>
            
        </section>
        </MotionDiv>
    )
}
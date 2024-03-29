import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"
import 'animate.css'
import { MotionDiv } from "@/app/components/motion-div/motion-div"


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1},
}

export const ProjectCard = () => {
    return(
        <MotionDiv  
        variants={variants}
        initial="hidden"
        whileInView={{ opacity:1}}
        
        transition={{
            delay: 0.5,
            ease: "easeInOut",
            duration: 0.5,
        }}
        viewport={{ amount: 0 }}
        className="flex gap-6 lg:gap-12 flex-col lg:flex-row ">
            <div className="w-full h-full">
                
                <Image
                width={420}
                height={304}
                alt="Thumbnail do projeto"
                src="/images/imagem-projeto-teste.png" 
                className="w-full  sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
               
            </div>
            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                        width={20}
                        height={20}
                        alt=""
                        src="/images/icons/project-title-icon.svg"
                    />
                    Em Atualização
                </h3>
                
                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate rem accusantium dolorem? Sed vitae est totam quo veritatis mollitia ipsa unde perspiciatis vel architecto, dolorum error explicabo nam in amet voluptatem soluta corporis. Error neque inventore quae quisquam! Facere perspiciatis porro doloremque exercitationem obcaecati cum ab sapiente est sed aspernatur.
                </p>
               
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]" >
                    <TechBadge name="Next.js"/>
                </div>
                
                
                <Link href="/projects/book-wise">
                    Ver Projeto 
                    <HiArrowNarrowRight />
                    
                </Link>
                
            </div>
    
        </MotionDiv>
    )
} 
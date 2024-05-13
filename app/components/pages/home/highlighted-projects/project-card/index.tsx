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
            <div className="w-[50%] h-full">
                
                <Image
                width={420}
                height={304}
                alt="Thumbnail do projeto"
                src="/images/dom-diegoo.png" 
                className="w-full sm:h-[250px] lg:w-[320px] lg:min-h-full object-cover rounded-lg"
                />
               
            </div>
            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                        width={30}
                        height={30}
                        alt=""
                        src="/images/vaporwave.png"
                    />
                    Dom Diego - Barbearia
                </h3>
                
                <p className="text-gray-400 my-6">Projeto freelance da barbearia Dom-Diego, localizada na Avenida Bezerra de Menezes, Fortaleza / CE, uma referência em estilo e cuidado masculino na região. </p>
               
                <p className="text-gray-400 my-6">No site da Barbearia Dom-Diego, os clientes podem explorar facilmente os serviços oferecidos, agendar horários pelo whatsapp e conhecer mais sobre a empresa. </p>

               
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]" >
                    <TechBadge name="Next.js"/>
                    <TechBadge name="React"/>
                </div>
                
                
                <Link href="https://barbearia-dom-diego.vercel.app/" target="_blank">
                    Ver Projeto 
                    <HiArrowNarrowRight />
                </Link>
                
            </div>
    
        </MotionDiv>
    )
} 
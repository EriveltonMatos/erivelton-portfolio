import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { Button } from "@/app/components/button"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";


const MOCK_CONTACTS = [
    {
        url: 'https://github.com/EriveltonMatos',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://linkedin.com/in/erivelton-matos-5a7587123',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://wa.me/5585997247193',
        icon: <TbBrandWhatsapp />
    }
    
]

export const HeroSection = () => {
    return(
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110ox]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Erivelton Matos</h2>
                   
                    <p className="text-gray-400 my-6 text-sm sm:text-base">Olá, meu nome é Erivelton Matos e sou desenvolvedor Fullstack com foco em Java/Spring e Next.js/React</p>
                    <div className="flex w-1/2 flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                            <TechBadge name="Java"/>
                            <TechBadge name="Spring" />
                            <TechBadge name="Next.js" />
                            <TechBadge name="React" />
                            <TechBadge name="Git" />
                            <TechBadge name="SQL" />
                            <TechBadge name="Docker" />
                            <TechBadge name="Tailwind" />
                            
                    </div>
                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className=" w-max shadow-button">
                            Entre em Contato
                            <HiArrowNarrowRight size={20}/>
                        </Button>

                        <div className=" text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-green-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Image 
                    width={420}
                    height={404}
                    src={"/images/profile-pic.jpg"}
                    alt="Foto de perfil do Erivelton Matos"
                    className="w-[300px] h-[400px] lg:w-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover shadow-emerald-500"
                />
            </div>
        </section>
    )
}
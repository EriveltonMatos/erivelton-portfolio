import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { Button } from "@/app/components/button"
import { Handshake } from 'lucide-react';
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";
import 'animate.css';



const MOCK_CONTACTS = [
    {
        url: 'https://github.com/EriveltonMatos',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://linkedin.com/in/erivelton-matos-5a7587123',
        icon: <TbBrandLinkedin />
    }
    
]

export const HeroSection = () => {
    return(
        <section className="relative w-full lg:justify-center lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110ox] ">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="max-sm:flex max-sm:justify-center max-sm:items-center container flex items-start justify-between flex-col-reverse lg:flex-row ">
                <div className=" animate__animated animate__fadeInLeft w-full lg:max-w-[530px] ">
                    <p className="max-sm:mt-4 max-sm:flex max-sm:justify-center  font-mono corPrincipal">Olá, meu nome é</p>
                    <h2 className=" max-sm:flex max-sm:justify-center text-4xl font-medium mt-2">Erivelton Matos</h2>
                   
                    <p className="  text-white my-6 text-sm sm:text-base ">Atuo profissionalmente como <a href="https://www.totvs.com/blog/carreiras/desenvolvedor-full-stack/" className="text-gray-300">Desenvolvedor Fullstack</a> com experiência em Next.js, React, Java, SpringBoot, Javascript, Typescript, git, hibernate, MySQL, Docker, etc. Além de possuir conhecimento em ferramentas de design como Figma e Canva. Também atuo como editor de vídeos utilizando DaVinci Resolve. Formado em Sistemas de Informação e cursando pós-graduação em Engenharia de Software, Devops e Computação em Nuvem, além de ser apaixonado por desenvolvimento web</p>
                    <div className=" max-sm:flex max-sm:justify-center max-sm:w-full flex w-1/2 flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                            <TechBadge name="Java"/>
                            <TechBadge name="Spring" />
                            <TechBadge name="Next.js" />
                            <TechBadge name="React" />
                            <TechBadge name="Git" />
                            <TechBadge name="SQL" />
                            <TechBadge name="Docker" />
                            <TechBadge name="Tailwind" />     
                    </div>
                    <div className="max-sm:flex max-sm:justify-center items-center mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className=" w-max shadow-button">
                            Entre em Contato
                            <Handshake className="text-white" size={20}/>
                        </Button>

                        <div className="max-sm:flex max-sm:justify-center text-2xl text-white flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className=" hover:text-violet-400 transition-colors"
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
                    src={"/images/profile-picc.jpg"}
                    alt="Foto de perfil do Erivelton Matos"
                    className="max-sm:mt-1 max-sm:w-60 max-sm:h-60 animate__animated animate__fadeInRight w-[300px] h-[300px] mt-[8.5rem] mr-2 lg:mb-0 shadow-2xl rounded-lg object-cover shadow-purple-500"
                />
            </div>
        </section>
    )
}
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return(
        <div className="grid grid-cols-[40px 1fr] gap-4 md:gap-10">
            <div className="flex items-center gap-4">
               <div className="rounded-full border border-gray-500 p-0.5">
                    <Image 
                    src="/images/unichristus-logo.png" 
                    width={100}
                    height={100}
                    className="rounded-full"
                    alt="Logo da empresa Unichristus"
                    />
                </div> 

                <div className="h-full w-[1px] bg-gray-800"></div>

                <div>
                    <div className="flex flex-col gap-2 text-sm sm:text-base">
                        <a
                        href="https://www.linkedin.com/school/unichristus/mycompany/"
                        target="_blank" 
                        className=" hover:text-emerald-500 transition-colors font-bold"
                        >
                           @ UNICHRISTUS
                        </a>
                        <h4 className="text-gray-300">Desenvolvedor FullStack</h4>
                        <span className="text-gray-500">ago 2022 • O momento • (1 ano e 7 meses)</span>
                        <div>
                            <p className="mb-5 text-gray-300">
                            Atualmente, desempenho um papel especial na equipe de programação da Unichristus, onde sou responsável pela
                            manutenção e pelo desenvolvimento de recursos essenciais nos sistemas da organização, bem como pela criação de
                            conteúdo educativo para professores, funcionários e alunos pelo canal LIT Tutoriais. 
                            </p>
                            <p className="mb-4 text-gray-300">
                            Habilidades Técnicas:
                            </p>
                            <p className="mb-4 text-gray-300"><span className="text-emerald-400">●</span> Front-End: HTML5, CSS3, Javascript, Typescript, React e Next.JS, além de estar estudando ANGULAR para futuros projetos.</p>
                            <p className="mb-4 text-gray-300"><span className="text-emerald-400">●</span> Back-End: Trabalho com Java 8 em projetos legados e com Java 17 em projetos atuais e em ambos os casos,
                                utilizo o ecossistema Spring (Spring Data, Spring JPA, Spring Security, entre outros) para o desenvolvimento de
                                APIs REST, além de utilizar o Maven para controle de dependências.</p>
                            <p className="mb-4 text-gray-300"><span className="text-emerald-400">●</span> Bancos de Dados: Atualmente trabalho com PostgreSQL e MySQL.</p>
                            <p className="mb-4 text-gray-300"><span className="text-emerald-400">●</span> Metodologias Ágeis e Gestão de Projetos: Trabalhamos com a metodologia ágil Scrum, utilizando o Trello como ferramenta de gerenciamento de projetos.</p>
                            <p className="mb-4 text-gray-300"><span className="text-emerald-400">●</span> Ferramentas e Tecnologias Adicionais: Utilizo o Git e o GitLab para versionamento de código, Ubuntu 22.04
                                                                como sistema operacional, além de trabalhar com o DaVinci Resolve como editor de vídeo e com Audacity para
                                                                tratamento de áudio, além de outras ferramentas de design como Figma e Canva.</p>

                        </div>

                        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                        
                        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                            <TechBadge name="Java"/>
                            <TechBadge name="Spring"/>
                            <TechBadge name="Next.js"/>
                            <TechBadge name="React"/>
                            <TechBadge name="Typescript"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="rounded-full border border-gray-500 p-0.5">
                    <Image 
                    src="/images/botelho-icon.jpg" 
                    width={90}
                    height={90}
                    className="rounded-full"
                    alt="Logo da empresa Cartório Botelho"
                    />
                </div> 

                <div className="h-full w-[1px] bg-gray-800"></div>

                <div>
                    <div className="flex flex-col gap-2 text-sm sm:text-base">
                        <a
                        href="https://www.linkedin.com/school/unichristus/mycompany/"
                        target="_blank" 
                        className=" hover:text-emerald-500 transition-colors font-bold"
                        >
                           @ CARTÓRIO BOTELHO
                        </a>
                        <h4 className="text-gray-300">Suporte de TI</h4>
                        <span className="text-gray-500">Nov 2014 • Mar 2022 • (7 anos)</span>
                        <div>
                            <p className="mb-4 text-gray-300">
                            Habilidades Técnicas:
                            </p>
                            <p className="mb-4 text-gray-300"><span className="text-emerald-400">●</span> Instalação de Hardware: Configuração e instalação de computadores, impressoras e nobreaks.</p>
                            <p className="mb-4 text-gray-300"><span className="text-emerald-400">●</span> Gerenciamento de Software: Fornecia assistência técnica para à instalação, configuração e resolução de
                                                                problemas relacionados ao software da empresa, capacitando os usuários a utilizarem as ferramentas de forma
                                                                eficaz.</p>
                            <p className="mb-4 text-gray-300"><span className="text-emerald-400">●</span> Suporte Técnico: Responsável pela resolução de problemas envolvendo a TI como impressoras, rede,
                                                                conectividade, configuração de desktops, garantindo a estabilidade e a eficiência dos sistemas e do hardware da
                                                                empresa</p>

                        </div>

                        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                        
                        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                            <TechBadge name="Pacote Office"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        
    )
}
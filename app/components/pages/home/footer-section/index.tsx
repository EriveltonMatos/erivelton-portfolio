import Image from "next/image"
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb"


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

export const FooterSection = () => {
    return (
        <section className="container py-16 mx-auto border-t border-purple-600 flex items-center justify-between">
            <div >
            <a href="#">
                <Image 
                    width={130}
                    height={130}
                    src={"/images/wolf-piccc.png"}
                    alt="Foto"
                    className="mb-6 lg:mb-0 "
                />
            </a>
            </div>

            <div>
            <div className=" text-4xl text-white flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-purple-600 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
            </div>
        </section>
    )
}
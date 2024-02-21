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
    },
    {
        url: 'https://wa.me/5585997247193',
        icon: <TbBrandWhatsapp />
    }
    
]

export const FooterSection = () => {
    return (
        <section className="container py-16 mx-auto border-t border-emerald-400 flex items-center justify-between">
            <div>
                <Image 
                    width={130}
                    height={130}
                    src={"/images/wolf-pic.png"}
                    alt="Foto"
                    className="mb-6 lg:mb-0 "
                
                />
            </div>

            <div>
            <div className=" text-4xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
            </div>
        </section>
    )
}
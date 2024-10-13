
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo1.png";
import { connectinfo } from "../constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section class="text-center flex flex-col items-center py-5  min-h-[220px]">
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                    >
                    <img src={logo} alt='logo' className='w-11 h-12 object-contain mb-5' />
                </Link>

                <span class="block text-center text-secondary">Haneen © All rights reserved {currentYear}</span>

                <ul class="flex justify-center mt-5 space-x-5">
                    {connectinfo.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-gray-900">
                            <img src={item.icon} alt={`Icon for ${item.link}`} className="w-5 h-5" />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Footer;
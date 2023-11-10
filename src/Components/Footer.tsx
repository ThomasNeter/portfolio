import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface FooterProps{
   footer: {
      name: string;
      url: string;
   }[]
}

const Footer: React.FC<FooterProps> = () => {

   return (
      <footer className="py-2 mt-10 max-w-2xl">
         <div className="flex items-center justify-center gap-x-6">
            <a
               href="Thomas Neter Resume.pdf"
               target="_blank" 
               rel="noopener noreferrer"
               className="text-sm font-semibold leading-6 text-gray-900"
               // className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
               Resume
            </a>
            <a
               href="https://www.linkedin.com/in/tneter/"
               className="text-sm font-semibold leading-6 text-gray-900"
               target="_blank" 
               rel="noopener noreferrer"
            >
               LinkedIn <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
               href="https://github.com/ThomasNeter"
               className="text-sm font-semibold leading-6 text-gray-900"
               target="_blank" 
               rel="noopener noreferrer"
            >
               Github <FontAwesomeIcon icon={faGithub} />
            </a>
         </div>
         <div className="flex items-center justify-center gap-x-6 m-2">
            <div
               className="text-sm font-semibold leading-6 text-gray-900"
            >
               neterthomas@gmail.com
            </div>
            <div
               className="text-sm font-semibold leading-6 text-gray-900"
            >
               (705) 970-3573
            </div>
         </div>
         <div className="flex items-center justify-center gap-x-6 text-sm leading-6 text-gray-900">
            Copyright &copy;  2023 Thomas Neter
         </div>
      </footer>
   );
}

export default Footer;

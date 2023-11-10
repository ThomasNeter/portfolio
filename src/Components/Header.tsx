import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BiggestBird from './BiggestBird.tsx'

interface HeaderProps {
   sections: string[];
}

const onBtnClick = (elID: string): void => {
   const el = document.getElementById(elID);
   el?.scrollIntoView({ behavior: "smooth" });
};

const Header: React.FC<HeaderProps> = ({sections}) => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
   
   return (
      <div>
         <header className="fixed inset-x-0 top-0 z-50 lg:bg-white">
            <nav
               className="flex items-center justify-end lg:justify-center lg:px-8 "
               aria-label="Global"
            >
               <div className="flex lg:hidden">
                  <button
                     type="button"
                     className="m-3.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                     onClick={() => setMobileMenuOpen(true)}
                  >
                     <span className="sr-only">Open main menu</span>
                     <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
               </div>
               <div className="hidden lg:flex lg:gap-x-12 rounded-md bg-white p-4">
                  {sections.map((item, i) => (
                     <a
                        key={i}
                        onClick={() => onBtnClick(item)}
                        className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
                     >
                        {item}
                     </a>
                  ))}
               </div>
            </nav>
            <Dialog
               as="div"
               className="lg:hidden"
               open={mobileMenuOpen}
               onClose={() => setMobileMenuOpen(false)}
            >
               <div className="fixed inset-0 z-50" />
               <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-end">
                     <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                     >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                     </button>
                  </div>
                  <div className="mt-6 flow-root">
                     <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                           {sections.map((item, i) => (
                              <a
                                 key={i}
                                 onClick={() => {
                                    onBtnClick(item);
                                    setMobileMenuOpen(false);
                                 }}
                                 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                 {item}
                              </a>
                           ))}
                        </div>
                     </div>
                  </div>
               </Dialog.Panel>
            </Dialog>
         </header>

         <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
               <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                     I'm Thomas Neter
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                     I'm a Full Stack Developer and Systems Design Engineer
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                     <a
                        href="Thomas Neter Resume.pdf"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                     >
                        My Resume
                     </a>
                     <a
                        href="https://www.linkedin.com/in/tneter/"
                        className="text-sm font-semibold leading-6 text-gray-900"
                        target="_blank" 
                        rel="noopener noreferrer"
                     >
                        LinkedIn <FontAwesomeIcon icon={faLinkedin} />
                     </a>
                  </div>
               </div>
               <BiggestBird/>
            </div>
         </div>
      </div>
   );
}
export default Header;
interface AboutProps{
   about: {
      name: string;
      bio: string;
      address:{
         city: string;
         state: string;
      }
      phone: string;
      email: string;
   }
   section: string;
}

const About: React.FC<AboutProps> = ({ section, about: { bio }}) => {

    return (
      // <div className="py-2 lg:scroll-mt-4" id={section}>
      
      <div className="py-2 mx-auto max-w-2xl" id={section}>
            <div className="">
               {/* <img className="profile-pic"  src={`images/${image}`} alt="Thomas Neter Profile Pic" /> */}
            </div>
            <div className="flex-col items-start justify-start">
               {/* <h2>About Me</h2> */}
               <h1 className="py-6">{section}</h1>         

               <div className="flex-col items-start mx-auto px-4 py-4 max-w-2xl">
                  <div>{bio}</div>
                  {/* <div className="">
                     <h2>Contact Details</h2>
                     <p className="">
                        <span>{name}</span><br />
                        <span>{city}, {state}</span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div> */}
                  {/* <div className="">
                     <p>
                        <a target="_blank" rel="noopener noreferrer" href="images/resume.pdf" className="button"><i className="fa fa-download"></i>View Resume</a>
                     </p>
                  </div> */}
               </div>
            </div>
         </div>
      // </div>
    )
}

export default About;
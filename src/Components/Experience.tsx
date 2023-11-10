interface Experience {
  company: string;
  title: string;
  date: string;
  description: string[];
}

interface ExperienceListProps {
  section: string;
  experience: Experience[];
}

const Experience: React.FC<ExperienceListProps> = ({ section, experience }) => {

  return (
    <div className="py-2 lg:scroll-mt-4 mx-auto max-w-2xl" id={section}>
      <h1 className="py-6">{section}</h1>

      {experience.map((work, i)=>(
        <div key={i} className="flex-col items-start p-4">
          <div className="lg:flex lg:place-content-between lg:items-end font-semibold">
            <h2 className="text-xl">{work.title}</h2>
            <h3>{work.company}</h3>
          </div>
          <div>
            <div><em className="date">{work.date}</em></div>
            {/* <span>&bull;</span>  */}
          </div>
          <div className="flex-col items-start justify-start">
            {work.description.map((item, i)=> <div key={i} className="py-1">{item}</div> )}
            {/* (work.company === "Digital Extremes" && i === 0) && <div><a target="_blank" rel="noopener noreferrer" href="https://www.digitalextremes.com/">Check out the site here!</a></div> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience;
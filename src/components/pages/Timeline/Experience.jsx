import TimelineCard from "./ExperienceCard";
import "./experience.css";

const timelineData = [
  {
    title: "Technical Intern fullstack enginner",
    date: "October 2023 - June 2024",
    location: "Florianopólis , Brasil",
    university: "UFSC - Universidade Federal de Santa Catarina",
    description: "Oversaw technical operations for university events and initiatives as part of the Student Council.",
    achievements: [
      "Orchestrated technical operations for 30+ university events",
      "Increased event participation by 25% through technical solutions", "Orchestrated technical operations for 30+ university events",
      "Increased event participation by 25% through technical solutions",
    ],
  },
{
    title: "Technical Intern fullstack enginner",
    date: "October 2023 - June 2024",
    location: "Florianopólis , Brasil",
    university: "UFSC - Universidade Federal de Santa Catarina",
    description: "Oversaw technical operations for university events and initiatives as part of the Student Council.",
    achievements: [
      "Orchestrated technical operations for 30+ university events",
      "Increased event participation by 25% through technical solutions", "Orchestrated technical operations for 30+ university events",
      "Increased event participation by 25% through technical solutions",
    ],
  },{
    title: "Technical Intern fullstack enginner",
    date: "October 2023 - June 2024",
    location: "Florianopólis , Brasil",
    university: "UFSC - Universidade Federal de Santa Catarina",
    description: "Oversaw technical operations for university events and initiatives as part of the Student Council.",
    achievements: [
      "Orchestrated technical operations for 30+ university events",
      "Increased event participation by 25% through technical solutions", "Orchestrated technical operations for 30+ university events",
      "Increased event participation by 25% through technical solutions",
    ],
  },{
    title: "Technical Intern fullstack enginner",
    date: "October 2023 - June 2024",
    location: "Florianopólis , Brasil",
    university: "UFSC - Universidade Federal de Santa Catarina",
    description: "Oversaw technical operations for university events and initiatives as part of the Student Council.",
    achievements: [
      "Orchestrated technical operations for 30+ university events",
      "Increased event participation by 25% through technical solutions", "Orchestrated technical operations for 30+ university events",
      "Increased event participation by 25% through technical solutions",
    ],
  },{
    title: "Technical Intern fullstack enginner",
    date: "October 2023 - June 2024",
    location: "Florianopólis , Brasil",
    university: "UFSC - Universidade Federal de Santa Catarina",
    description: "Oversaw technical operations for university events and initiatives as part of the Student Council.",
    achievements: [
      "Orchestrated technical operations for 30+ university events",
      "Increased event participation by 25% through technical solutions", "Orchestrated technical operations for 30+ university events",
      "Increased event participation by 25% through technical solutions",
    ],
  },
  
];

export default function Timeline() {
  return (
    <div className = "timeline">
<h1 className='title'><span className='roxo'>&lt;</span> Experience<span className='roxo2'>/</span><span className='roxo'>&gt;</span></h1>    
  <p>My professional journey in development and research</p>
    <div className="timeline-container">
     
      <div className="timeline-line"></div>

      {timelineData.map((item, index) => (
        <TimelineCard
          key={index}
          side={index % 2 === 0 ? "left" : "right"}
          {...item}
        />
      ))}
    </div>
    </div>
  );
}

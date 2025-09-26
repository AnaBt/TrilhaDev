import { motion } from "framer-motion";
import "./experience.css";

export default function TimelineCard({ side, title, date, location, university, description, achievements }) {
  return (
    <motion.div
      className={`timeline-card ${side}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.006, y: -7, boxShadow: "0 12px 24px rgba(0,0,0,0.3)" }}
    >

      <div className="timeline-dot"></div>

      <div className = "upperCard">
        < div className = "upperCardLeft">
      <h3>{title}</h3>
     
      <p className="university">{university}</p>
      <p className="location">{location}</p>
      </div>
      < div className = "upperCardRight">  <p className="date">{date}</p></div>
      
      </div>

      <p className="description_timeline">{description}</p>
      <div className = "linha"></div>
      <p className="AchiementText">Key achievents:</p>
      <ul>
        {achievements.map((ach, i) => (
          <li key={i}> ➜ {ach}</li>
        ))}
      </ul>
    </motion.div>
  );
}

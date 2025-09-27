import { motion } from "framer-motion";
import "./scroll.css";
import medal from '../../../public/medal24.png'
import book from '../../../public/book24.png'
import trofeu from '../../../public/trofeu24.png'
export default function ScrollableContainer() {
  const items = [

    ["Won Google Hackthon", trofeu],
    ["Read 20 Books in 2025", book],
    ["Finished first Project", medal],
    ["Won 2nd Meta Hackthon", trofeu],
    ["Won Google Hackthon", trofeu],
    ["Read 20 Books in 2025", book],
    ["Finished first Project", medal],
    ["Won 2nd Meta Hackthon", trofeu],
   
  ];

  return (
    <div className="scroll-wrapper">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="card2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        > 
        <img src ={item[1]} />
          <p>{item[0]}</p>
         
        </motion.div>
      ))}
    </div>
  );
}

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="py-32 border-t border-slate-900 bg-slate-950/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
       
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs text-center font-mono text-indigo-400 tracking-widest uppercase block mb-2">
            // Academic & Training Blueprint
          </span>
          <h2 className="text-3xl text-center md:text-4xl font-bold text-white">
            Qualifications
          </h2>
        </motion.div>

       
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
             
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
              className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between group hover:border-indigo-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-slate-400 font-medium mb-4">
                  {edu.institution}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
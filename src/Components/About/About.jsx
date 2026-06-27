import { motion } from "framer-motion";
import cv from '../../assets/cv5.png'

export default function About() {
  return (
    <section
      id="about"
      className="py-27 border-t border-slate-900 bg-slate-950/20 relative"
    >
      <motion.div 
       
        initial={{ opacity: 0, y: 40 }}
        
        whileInView={{ opacity: 1, y: 0 }}
       
        transition={{ duration: 0.8, ease: "easeOut" }}
        
        viewport={{ once: true, margin: "-20%" }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center"
      >
       
        <div className="md:col-span-5 space-y-4">
          <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase block">
            // Identity
          </span>
          <div className="relative group w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/40 p-2">
                      <img 
                        src={cv} 
                        alt="Sahin Miah" 
                        className="w-full h-full object-contain rounded-xl  transition-transform duration-300 hover:scale-125"
                      />
                    </div>
          
        </div>
        
      
        <div className="md:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed font-light">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Engineered to scale, designed to connect.
          </h2>
          <p>
            Cookie-cutter websites don't cut it anymore. I specialize in
            developing fluid web apps where interface animations remain
            responsive, multi-page data routing stays unbroken, and complex
            global states don't bottleneck performance.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
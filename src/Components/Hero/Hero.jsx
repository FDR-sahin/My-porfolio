import { motion } from "framer-motion";
import pic from '../../assets/babu.png'

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-30 pb-32 min-h-[85vh] flex items-center justify-center">
     
      <div className="grid md:grid-cols-2 gap-12 items-center  w-full">
        
       
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono rounded-full tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Open for Engineering Contracts
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
            Crafting High-End <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Digital Experiences.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
            Hi, I'm <span className="text-white font-medium">Sahin Miah</span>. 
            A front-end architecture specialist. I translate demanding layout 
            engineering requirements into structured, blazing-fast React applications.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-600/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Explore Applications
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-sm font-semibold rounded-lg transition-all"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        
<motion.div 
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="flex justify-center items-center relative w-full mt-8 md:mt-0"
>
  
  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-emerald-500/10 rounded-full blur-3xl -z-10" />
  
  
  <div className="relative group  sm:w-[400px] md:w-[450px] aspect-[3/4] md:h-[550px] rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/40 p-2">
    <img 
      src={pic} 
      alt="Sahin Miah" 
      className="w-full h-full object-cover rounded-xl transition-all duration-500"
    />
  </div>
</motion.div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 border-t border-slate-900 bg-slate-950/20 relative"
    >
      <motion.div 
        // অ্যানিমেশনের শুরুর অবস্থা (নিচে থাকবে এবং হাইড থাকবে)
        initial={{ opacity: 0, y: 40 }}
        // স্ক্রিনে আসলে যে অবস্থা হবে
        whileInView={{ opacity: 1, y: 0 }}
        // অ্যানিমেশনটি কতটা স্মুথ হবে তার সেটিংস
        transition={{ duration: 0.8, ease: "easeOut" }}
        // একবারই অ্যানিমেশনটি হবে, এবং স্ক্রিনের ২০% এ আসলেই চালু হবে
        viewport={{ once: true, margin: "-20%" }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center"
      >
        {/* বাম পাশ: টাইটেল */}
        <div className="md:col-span-5 space-y-4">
          <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase block">
            // Identity
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Engineered to scale, designed to connect.
          </h2>
        </div>
        
        {/* ডান পাশ: ডেসক্রিপশন */}
        <div className="md:col-span-7 space-y-6 text-slate-400 text-base leading-relaxed font-light">
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
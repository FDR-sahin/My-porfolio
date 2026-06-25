// import React from "react"
// import UserContextProvider from "./context/UserContextProvider"
// import Cart from "./Components/Cart/Cart"
// import Navber from "./Components/Navber/Navber"

// function App() {

//   return (
//     <UserContextProvider>
//       <Navber/>
//       <Cart/>

//     </UserContextProvider>
//   )
// }

// export default App
// import React, { useState } from 'react';

// const portfolioData = {
//   name: "Sahin Miah",
//   title: "Front-End Engineer",
//   specialty: "React & State Architecture",
//   email: "sahinmiah1204@gmail.com",
//   phone: "01336472789",
//   education: [
//     {
//       degree: "B.Sc. in Computer Science & Engineering (CSE)",
//       institution: "Private University",
//       duration: "Running / Ongoing",
//       details: "Focusing on core algorithmic computational models, dynamic data structures, and advanced software engineering principles."
//     },
//     {
//       degree: "Professional Front-End Development Graduate",
//       institution: "Creative IT Institute",
//       duration: "Completed",
//       details: "Rigorous industry-standard training mastering modern user interface composition, complex JavaScript application states, and real-world deployment frameworks."
//     }
//   ],
//   skills: [
//     { cat: "Core Fundamentals", items: ["Semantic HTML5", "Modern CSS3", "Advanced ES6+ JavaScript"] },
//     { cat: "UI Frameworks", items: ["Tailwind CSS (Mastery)", "Bootstrap 5 Systems", "Fluid Responsive Systems"] },
//     { cat: "React Ecosystem", items: ["Single Page Apps", "React Router Dom", "Context API", "Redux Toolkit"] },
//     { cat: "Backend & Devops", items: ["Database Authentication", "Git Version Control", "GitHub Workflows"] }
//   ],
//   projects: [
//     {
//       title: "Grocity",
//       subtitle: "E-Commerce Production Build",
//       description: "A high-performance grocery e-commerce web platform optimized with fluid dynamic routing, asynchronous state flows, and modular component composition.",
//       tags: ["React", "React Router", "Tailwind CSS", "Context API"],
//       metric: "Fast View Transition"
//     },
//     {
//       title: "Production Base Store",
//       subtitle: "Enterprise Management Dashboard",
//       description: "An enterprise-grade dashboard utilizing strict multi-layer state synchronization, real-time data persistence mapping, and secure rule-based auth routes.",
//       tags: ["React JS", "Redux Toolkit", "Auth DB", "Bootstrap"],
//       metric: "Global Sync Control"
//     }
//   ]
// };

// export default function App() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Dispatched:", formData);
//     alert("Message pipeline initiated successfully!");
//   };

//   return (
//     <div className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden relative">

//       {/* Premium Tech Background Grid Effects */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

//       {/* Floating Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/70 border-b border-slate-900">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//           <div className="font-mono tracking-tighter text-lg font-bold group cursor-pointer">
//             <span className="text-indigo-400">&lt;</span>
//             <span className="text-white group-hover:text-indigo-400 transition-colors">Sahin</span>
//             <span className="text-slate-500">.dev</span>
//             <span className="text-indigo-400"> /&gt;</span>
//           </div>
//           <nav className="hidden md:flex items-center space-x-1 bg-slate-950/60 p-1.5 rounded-full border border-slate-800/80">
//             <a href="#about" className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-all">About</a>
//             <a href="#education" className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-all">Education</a>
//             <a href="#skills" className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-all">Expertise</a>
//             <a href="#projects" className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-all">Projects</a>
//             <a href="#contact" className="px-4 py-1.5 text-xs font-medium bg-slate-900 border border-slate-800 text-indigo-400 rounded-full hover:bg-slate-800 transition-all">Contact</a>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col items-start min-h-[85vh] justify-center">
//         <div className="max-w-4xl space-y-6">
//           <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono rounded-full tracking-wide">
//             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
//             Open for Engineering Contracts
//           </div>
//           <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none text-white">
//             Crafting High-End <br />
//             <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
//               Digital Experiences.
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
//             Hi, I'm <span className="text-white font-medium">Sahin Miah</span>. A front-end architecture specialist. I translate demanding layout engineering requirements into structured, blazing-fast React applications.
//           </p>
//           <div className="pt-4 flex flex-wrap gap-4">
//             <a href="#projects" className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-600/20 transition-all duration-300 transform hover:-translate-y-0.5">
//               Explore Applications
//             </a>
//             <a href="#contact" className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-sm font-semibold rounded-lg transition-all">
//               Let's Talk
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-32 border-t border-slate-900 bg-slate-950/20 relative">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
//           <div className="md:col-span-5 space-y-4">
//             <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase block">// Identity</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Engineered to scale, designed to connect.</h2>
//           </div>
//           <div className="md:col-span-7 space-y-6 text-slate-400 text-base leading-relaxed font-light">
//             <p>
//               Cookie-cutter websites don't cut it anymore. I specialize in developing fluid web apps where interface animations remain responsive, multi-page data routing stays unbroken, and complex global states don't bottleneck performance.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Education & Qualification Timeline */}
//       <section id="education" className="py-32 border-t border-slate-900 bg-slate-950/40 relative">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-16">
//             <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase block mb-2">// Academic & Training Blueprint</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">Qualifications</h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {portfolioData.education.map((edu, idx) => (
//               <div key={idx} className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between group hover:border-indigo-500/30 transition-all">
//                 <div>
//                   <div className="flex items-center justify-between gap-4 mb-4">
//                     <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full">
//                       {edu.duration}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-1">{edu.degree}</h3>
//                   <p className="text-sm text-slate-400 font-medium mb-4">{edu.institution}</p>
//                   <p className="text-sm text-slate-500 leading-relaxed font-light">{edu.details}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-32 bg-slate-950/40 border-t border-slate-900">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-16">
//             <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase block mb-2">// Capabilities</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Architecture Matrix</h2>
//           </div>

//           <div className="grid md:grid-cols-12 gap-8">
//             <div className="md:col-span-4 flex flex-col space-y-2">
//               {portfolioData.skills.map((skillBlock, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveTab(index)}
//                   className={`text-left p-4 rounded-xl text-sm font-medium transition-all duration-300 border ${
//                     activeTab === index
//                       ? 'bg-slate-900 border-indigo-500/30 text-white'
//                       : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
//                   }`}
//                 >
//                   {skillBlock.cat}
//                 </button>
//               ))}
//             </div>

//             <div className="md:col-span-8 bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl backdrop-blur-sm min-h-[250px] flex flex-col justify-between">
//               <div className="grid gap-4">
//                 {portfolioData.skills[activeTab].items.map((item, i) => (
//                   <div key={i} className="flex items-center justify-between p-4 bg-slate-950/40 border border-slate-900 rounded-xl">
//                     <div className="flex items-center space-x-3">
//                       <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
//                       <span className="text-slate-200 font-medium text-sm">{item}</span>
//                     </div>
//                     <span className="text-[10px] font-mono text-slate-600 uppercase">Verified</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-32 max-w-7xl mx-auto px-6 border-t border-slate-900">
//         <div className="mb-16">
//           <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase block mb-2">// Engineering Output</span>
//           <h2 className="text-3xl md:text-4xl font-bold text-white">Production Ecosystems</h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {portfolioData.projects.map((proj, idx) => (
//             <div key={idx} className="bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-900 rounded-2xl p-8 flex flex-col justify-between group relative">
//               <div>
//                 <span className="text-xs font-mono text-indigo-400 tracking-wider block mb-2">{proj.subtitle}</span>
//                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{proj.title}</h3>
//                 <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">{proj.description}</p>
//               </div>
//               <div className="flex flex-wrap gap-1.5 border-t border-slate-900 pt-6">
//                 {proj.tags.map((tag, i) => (
//                   <span key={i} className="text-[11px] font-mono bg-slate-950 border border-slate-800/80 px-2.5 py-1 rounded-md text-slate-400">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section - Re-architected as Requested */}
//       <section id="contact" className="py-32 border-t border-slate-900 relative bg-slate-950/30">
//         <div className="max-w-7xl mx-auto px-6">

//           {/* Top Main Dynamic Heading */}
//           <div className="mb-16 text-center md:text-left">
//             <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase block mb-2">// Interconnect Pipeline</span>
//             <h2 className="text-4xl font-black text-white tracking-tight">Let's Build Something Revolutionary</h2>
//           </div>

//           <div className="grid md:grid-cols-12 gap-12 items-start">
//             {/* Left Column: Information Gateways */}
//             <div className="md:col-span-5 space-y-6">
//               <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-1">
//                 <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Secure Email Gateway</span>
//                 <a href={`mailto:${portfolioData.email}`} className="text-white hover:text-indigo-400 text-base font-medium transition-colors">
//                   {portfolioData.email}
//                 </a>
//               </div>

//               <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-1">
//                 <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Direct Communications</span>
//                 <a href={`tel:${portfolioData.phone}`} className="text-white hover:text-indigo-400 text-base font-medium transition-colors">
//                   +{portfolioData.phone}
//                 </a>
//               </div>

//               <div className="p-6 bg-indigo-600/5 border border-indigo-500/10 rounded-2xl">
//                 <p className="text-xs text-slate-400 leading-relaxed font-light">
//                   Have an open role, an architectural problem to solve, or want to build complex React workflows? Send over a secure payload message.
//                 </p>
//               </div>
//             </div>

//             {/* Right Column: Premium Secured Input Panel */}
//             <div className="md:col-span-7 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm shadow-2xl">
//               <form onSubmit={handleFormSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Engineer / Organization Name</label>
//                   <input
//                     type="text"
//                     required
//                     placeholder="John Doe"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Contact Communication Line (Phone)</label>
//                   <input
//                     type="tel"
//                     required
//                     placeholder="+880 1XXX-XXXXXX"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                     className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Project Brief / Message Payload</label>
//                   <textarea
//                     rows="4"
//                     required
//                     placeholder="Describe your architecture requirements or deployment pipeline specifications..."
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold text-sm rounded-xl tracking-wide shadow-xl shadow-indigo-600/10 transition-all duration-300 transform hover:-translate-y-0.5"
//                 >
//                   Dispatch Secured Message
//                 </button>
//               </form>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-950 text-xs text-slate-600 font-mono">
//         <p>&copy; 2026 Sahin Miah. Engineered with strict optimization standards.</p>
//         <p className="text-slate-700">STABLE // BUILD_V3.0</p>
//       </footer>
//     </div>
//   );
// }

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";

// 1. Portfolio Information Core Data Block
const portfolioData = {
  name: "Sahin Miah",
  title: "Front-End Engineer",
  specialty: "React & State Architecture",
  email: "sahinmiah1204@gmail.com",
  phone: "01336472789",
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering (CSE)",
      institution: "Private University",
      duration: "Running / Ongoing",
      details:
        "Focusing on core algorithmic computational models, dynamic data structures, and advanced software engineering principles.",
    },
    {
      degree: "Professional Front-End Development Graduate",
      institution: "Creative IT Institute",
      duration: "Completed",
      details:
        "Rigorous industry-standard training mastering modern user interface composition, complex JavaScript application states, and real-world deployment frameworks.",
    },
  ],
  skills: [
    {
      cat: "Core Fundamentals",
      items: ["Semantic HTML5", "Modern CSS3", "Advanced ES6+ JavaScript"],
    },
    {
      cat: "UI Frameworks",
      items: [
        "Tailwind CSS (Mastery)",
        "Bootstrap 5 Systems",
        "Fluid Responsive Systems",
      ],
    },
    {
      cat: "React Ecosystem",
      items: [
        "Single Page Apps",
        "React Router Dom",
        "Context API",
        "Redux Toolkit",
      ],
    },
    {
      cat: "Backend & Devops",
      items: [
        "Database Authentication",
        "Git Version Control",
        "GitHub Workflows",
      ],
    },
  ],
  projects: [
    {
      title: "Grocity",
      subtitle: "E-Commerce Production Build",
      description:
        "A high-performance grocery e-commerce web platform optimized with fluid dynamic routing, asynchronous state flows, and modular component composition.",
      tags: ["React", "React Router", "Tailwind CSS", "Context API"],
      metric: "Fast View Transition",
    },
    {
      title: "Production Base Store",
      subtitle: "Enterprise Management Dashboard",
      description:
        "An enterprise-grade dashboard utilizing strict multi-layer state synchronization, real-time data persistence mapping, and secure rule-based auth routes.",
      tags: ["React JS", "Redux Toolkit", "Auth DB", "Bootstrap"],
      metric: "Global Sync Control",
    },
  ],
};

// Reusable Global Animation Configuration
const fustFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pipeline Active:", formData);
    alert("Message pipeline initiated successfully!");
    setFormData({ name: "", phone: "", message: "" });
  };

  // Closes the menu smoothly when a link is tapped on mobile viewport
  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden relative">
      {/* Premium Tech Background Grid Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#030712]/70 border-b border-slate-900 w-full">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-mono tracking-tighter text-lg font-bold group cursor-pointer">
            <span className="text-indigo-400">&lt;</span>
            <span className="text-white group-hover:text-indigo-400 transition-colors">
              Sahin
            </span>
            <span className="text-slate-500">.dev</span>
            <span className="text-indigo-400"> /&gt;</span>
          </a>
          <nav className="hidden md:flex items-center space-x-1 bg-slate-950/60 p-1.5 rounded-full border border-slate-800/80">
            <a
              href="#about"
              className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-all"
            >
              About
            </a>
            <a
              href="#education"
              className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-all"
            >
              Education
            </a>
            <a
              href="#skills"
              className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-all"
            >
              Expertise
            </a>
            <a
              href="#projects"
              className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white rounded-full transition-all"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-1.5 text-xs font-medium bg-slate-900 border border-slate-800 text-indigo-400 rounded-full hover:bg-slate-800 transition-all"
            >
              Contact
            </a>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-950 border-t border-slate-800"
          >
            <div className="flex flex-col p-4 space-y-4">
              <a href="#about" onClick={handleMobileNavClick}>
                About
              </a>
              <a href="#education" onClick={handleMobileNavClick}>
                Education
              </a>
              <a href="#skills" onClick={handleMobileNavClick}>
                Skills
              </a>
              <a href="#projects" onClick={handleMobileNavClick}>
                Projects
              </a>
              <a href="#contact" onClick={handleMobileNavClick}>
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      
      <About/>

      {/* Education & Qualification Timeline */}

      <section
      id="education"
      className="py-32 border-t border-slate-900 bg-slate-950/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* হেডার পার্ট: ওপর থেকে নিচে আসবে */}
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



        {/* কার্ড লিস্ট */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              // প্রথম কার্ডটি (idx 0) বাম থেকে আসবে, দ্বিতীয়টি (idx 1) ডান থেকে আসবে
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

      {/* Skills Section */}

      <section
      id="skills"
      className="py-32 bg-slate-950/40 border-t border-slate-900"
    >
      {/* পুরো সেকশনটি স্ক্রল করার সময় নিচ থেকে ওপরে আসবে */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="mb-16">
          <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase block mb-2">
            // Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical Architecture Matrix
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* বাম পাশ: ট্যাব বাটন সমূহ */}
          <div className="md:col-span-4 flex flex-col space-y-2">
            {portfolioData.skills.map((skillBlock, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left p-4 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  activeTab === index
                    ? "bg-slate-900 border-indigo-500/30 text-white"
                    : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                }`}
              >
                {skillBlock.cat}
              </button>
            ))}
          </div>

          {/* ডান পাশ: সিলেক্টেড ট্যাবের স্কিল আইটেম সমূহ */}
          <div className="md:col-span-8 bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl backdrop-blur-sm min-h-[250px] flex flex-col justify-between overflow-hidden">
            <div className="grid gap-4">
              {/* AnimatePresence এর কারণে ট্যাব পরিবর্তনের সময় স্মুথ ট্রানজিশন হবে */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab} // কী পরিবর্তনের সাথে অ্যানিমেশন ট্রিগার হবে
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-4"
                >
                  {portfolioData.skills[activeTab].items.map((item, i) => (
                    <motion.div
                      key={i}
                      // প্রতিটি স্কিল আইটেম একটার পর একটা স্ট্যাগার্ড (Staggered) হয়ে আসবে
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center justify-between p-4 bg-slate-950/40 border border-slate-900 rounded-xl hover:border-slate-800 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                        <span className="text-slate-200 font-medium text-sm">
                          {item}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-600 uppercase">
                        Verified
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>

      {/* Projects Section */}

   <section
      id="projects"
      className="py-32 max-w-7xl mx-auto px-6 border-t border-slate-900"
    >
      {/* হেডার পার্ট অ্যানিমেশন */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase block mb-2">
          // Engineering Output
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Production Ecosystems
        </h2>
      </motion.div>

      {/* প্রজেক্টস গ্রিড কন্টেইনার */}
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map((proj, idx) => (
          <motion.div
            key={idx}
            // কার্ডগুলো নিচ থেকে উপরে উঠবে
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            // delay: idx * 0.15 ব্যবহারের ফলে কার্ডগুলো একের পর এক (Staggered) স্মুথলি আসবে
            transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.15 }}
            viewport={{ once: true, margin: "-10%" }}
            className="bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-900 rounded-2xl p-8 flex flex-col justify-between group relative hover:border-slate-800 transition-all"
          >
            <div>
              <span className="text-xs font-mono text-indigo-400 tracking-wider block mb-2">
                {proj.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {proj.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">
                {proj.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-1.5 border-t border-slate-900 pt-6">
              {proj.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-mono bg-slate-950 border border-slate-800/80 px-2.5 py-1 rounded-md text-slate-400 group-hover:border-slate-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Contact Section - Re-architected as Requested */}

 <section
      id="contact"
      className="py-32 border-t border-slate-900 relative bg-slate-950/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* টপ হেডার অ্যানিমেশন */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase block mb-2">
            // Interconnect Pipeline
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Let's Build Something Revolutionary
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* বাম কলাম: ইনফরমেশন কার্ডসমূহ (Staggered Animation) */}
          <div className="md:col-span-5 space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-1 hover:border-slate-700/80 transition-colors"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                Secure Email Gateway
              </span>
              <a
                href={`mailto:${portfolioData.email}`}
                className="text-white hover:text-indigo-400 text-base font-medium transition-colors"
              >
                {portfolioData.email}
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-1 hover:border-slate-700/80 transition-colors"
            >
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                Direct Communications
              </span>
              <a
                href={`tel:${portfolioData.phone}`}
                className="text-white hover:text-indigo-400 text-base font-medium transition-colors"
              >
                +{portfolioData.phone}
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-indigo-600/5 border border-indigo-500/10 rounded-2xl"
            >
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Have an open role, an architectural problem to solve, or want
                to build complex React workflows? Send over a secure payload
                message.
              </p>
            </motion.div>
          </div>

          {/* ডান কলাম: প্রিমিয়াম ইনপুট ফর্ম প্যানেল */}
          <motion.div 
            initial={{ opacity: 0, y: 30, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm shadow-2xl"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Engineer / Organization Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Contact Communication Line (Phone)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+880 1XXX-XXXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Project Brief / Message Payload
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Describe your architecture requirements or deployment pipeline specifications..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold text-sm rounded-xl tracking-wide shadow-xl shadow-indigo-600/10 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Dispatch Secured Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
      

      {/* Footer */}
      <footer className="py-12 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-950 text-xs text-slate-600 font-mono">
        <p>
          &copy; 2026 Sahin Miah. Engineered with strict optimization standards.
        </p>
        <p className="text-slate-700">STABLE // BUILD_V3.0</p>
      </footer>
    </div>
  );
}

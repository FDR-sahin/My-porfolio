import React from "react";
import { Link } from "react-router-dom";

const Pcart = ({ image, title, dec, link }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-80 h-96 rounded-xl p-px bg-gray-900 backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
    >
      <div
        className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ top: position.y - 120, left: position.x - 120 }}
      />

      {/* <div className="relative z-10 bg-gray-900/75 p-6  h-full w-full rounded-[11px] flex flex-col items-center justify-center text-center">
                <img src={image} alt="Profile Avatar" className="w-60 h-40 object-contain rounded-2xl shadow-md my-4" />
                <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
                <p className="text-sm text-indigo-500 font-medium mb-4">React Developer</p>
                <p className="text-sm text-slate-400 mb-4 px-4">
                    Passionate about clean code, scalable systems, and solving real-world problems with elegant software.
                </p>

                
                <div className="flex space-x-4 mb-4 text-xl text-slate-400">
                    <a href={link} target="_blank" className='hover:-translate-y-0.5 transition border px-2 py-1 rounded-2xl'>
                        visit website
                    </a>
                   
                </div>
            </div> */}
      <div className="relative z-10 bg-gray-900/75 p-6 h-full w-full rounded-[11px] flex flex-col items-center text-center">
        {/* Image Container */}
        <div className="w-full h-62 flex items-center justify-center mb-5 overflow-hidden rounded-2xl bg-slate-800">
          <img
            src={image}
            alt="Project"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>

        <p className="text-sm text-indigo-500 font-medium mb-4">{dec}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-indigo-500 text-indigo-400 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default Pcart;

import React from 'react';

export default function Home() {
  return (
    <div className="bg-rice-cream min-h-[200vh]">
      {/* Hero / Welcome Section */}
      <section className="relative min-h-[110vh] w-full flex flex-col items-center justify-start pt-[120px] pb-32">
        {/* Background Image - Mountain landscape */}
        <div className="absolute inset-x-0 top-0 h-full w-full opacity-60">
           <img 
              src="/images/D61A0040.jpg.jpeg" 
              alt="Rice Pictures Set" 
              className="object-cover w-full h-full"
           />
        </div>
        
        {/* Top Floating Text */}
        <div className="z-10 relative mb-12 text-center w-full px-4">
          <h1 className="text-[50px] md:text-[90px] font-extrabold text-white tracking-tighter drop-shadow-lg">
            Welcome to Rice Pictures
          </h1>
        </div>

        {/* Video Player Embed Display */}
        <div className="z-20 relative w-[90%] max-w-5xl aspect-video bg-black shadow-2xl group cursor-pointer border border-white/20">
           <img 
              src="/images/1757426369883.jpg_4.webp" 
              alt="Video Thumbnail" 
              className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
           />
           {/* Play Button Overlay */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 bg-black/60 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
               <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
                 <path d="M8 5v14l11-7z"/>
               </svg>
             </div>
           </div>
           {/* Fake Player controls */}
           <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-xs font-semibold">
              <span>00:11 / 00:25</span>
              <div className="flex gap-4">
                <span>{/* Settings/Volume Icons */}V</span>
                <span>[ ]</span>
              </div>
           </div>
        </div>
      </section>

      {/* Yellow Strip Section */}
      <section className="bg-rice-yellow py-32 mt-[15vh]">
        <div className="scrolling-marquee text-white text-5xl md:text-8xl font-bold uppercase overflow-hidden whitespace-nowrap">
          <span className="mx-12 hover:text-[#2b5797] transition-colors cursor-pointer"> 'VOLADOR' </span>
          <span className="mx-12 hover:text-[#2b5797] transition-colors cursor-pointer"> 'FINDING XIAO' </span>
          <span className="mx-12 hover:text-[#2b5797] transition-colors cursor-pointer"> 'HIGHER WAY' </span>
          <span className="mx-12 hover:text-[#2b5797] transition-colors cursor-pointer"> 'VOLADOR' </span>
          <span className="mx-12 hover:text-[#2b5797] transition-colors cursor-pointer"> 'FINDING XIAO' </span>
          <span className="mx-12 hover:text-[#2b5797] transition-colors cursor-pointer"> 'HIGHER WAY' </span>
        </div>
      </section>

      {/* Posters Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="text-center group cursor-pointer">
           <div className="w-full aspect-[2/3] overflow-hidden bg-gray-200 shadow-xl mb-6">
             <img src="/images/MATEO.png" alt="Volador Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
           </div>
           <h3 className="text-3xl font-bold text-black">Volador</h3>
        </div>
        <div className="text-center group cursor-pointer mt-12 md:mt-24">
           <div className="w-full aspect-[2/3] overflow-hidden bg-gray-200 shadow-xl mb-6">
             <img src="/images/Screenshot+2024-06-06+at+22.09.47.png.webp" alt="Higher Way Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
           </div>
           <h3 className="text-3xl font-bold text-black">'Higher Way'</h3>
        </div>
      </section>

    </div>
  );
}

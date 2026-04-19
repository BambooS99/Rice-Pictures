import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  const team = [
    { name: "Tessa E. Osborne", role: "CO-FOUNDER", img: "Tessa.webp" },
    { name: "Miguel A. Hernandez", role: "CO-FOUNDER", img: "Miguel.webp" }
  ];

  const crew = [
    { name: "Kenny Acker", role: "DIRECTOR OF PHOTOGRAPHY 'VOLADOR'", img: "kenny.webp" },
    { name: "Najd Ayari", role: "DIRECTOR OF PHOTOGRAPHY, 'VOLADOR' & 'HIGHER WAY'", img: "Najd.webp" },
    { name: "Aubrey Meiling", role: "ASSISTANT DIRECTOR 'FINDING XIAO'", img: "Aubrey.webp" },
    { name: "David C. Jones", role: "DIRECTOR OF PHOTOGRAPHY 'FINDING XIAO' & PRODUCER 'VOLADOR'", img: "David.webp" },
    { name: "Thanh Lieu", role: "GRANT WRITER 'FINDING XIAO'", img: "Thanh.webp" }
  ];

  return (
    <div className="min-h-screen font-sans">

      {/* Top Blue Section */}
      <section className="bg-rice-blue text-white pt-48 pb-0 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <div className="z-10 relative">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12">
              What we're<br />about
            </h1>
            <p className="text-3xl md:text-4xl font-semibold leading-snug mb-12 max-w-xl">
              Rice Pictures is focused on uplifting marginalized voices through the power of media.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-rice-yellow text-rice-blue font-bold tracking-widest uppercase px-10 py-3 rounded-[50px] hover:bg-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* The yellow Hello flower approximation */}
            <div className="absolute top-4 -left-12 z-20 hidden md:flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-48 h-48 text-rice-yellow fill-current">
                <path d="M50 0 C60 0 65 15 75 15 C85 15 90 25 90 35 C90 45 100 55 90 65 C85 70 85 85 75 85 C65 85 60 100 50 100 C40 100 35 85 25 85 C15 85 15 70 10 65 C0 55 10 45 10 35 C15 25 15 15 25 15 C35 15 40 0 50 0 Z" />
                <text x="50" y="55" fontSize="20" fill="#3a7cb3" fontWeight="bold" textAnchor="middle">Hello!</text>
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl"
            >
              {/* Miami DDA / Group Picture */}
              <img
                src="/images/IMG_3395.JPG"
                alt="Rice Pictures Team Founders"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Row 1 gallery */}
        <div className="max-w-[1400px] mx-auto mt-24 relative h-[1000px] hidden md:block">
          {/* Left image — smaller, positioned lower */}
          <div className="absolute left-0 top-[500px] w-72 aspect-[3/4] overflow-hidden rounded-[20px] shadow-xl z-10">
            <img src="/images/DSC06519.jpeg" alt="Gallery 1" className="object-cover w-full h-full" />
          </div>
          {/* Right image — large, offset from top */}
          <div className="absolute top-[144px] w-[1200px] aspect-[3/2] overflow-hidden rounded-[20px] shadow-2xl" style={{ right: '-200px' }}>
            <img src="/images/DSC06396.jpeg" alt="Gallery 2" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Row 2 gallery */}
        <div className="max-w-[1400px] mx-auto mt-16 pb-24 hidden md:flex items-start justify-between gap-12">
          {/* Left — wider landscape image */}
          <div className="w-[55%] aspect-[4/3] overflow-hidden rounded-[20px] shadow-xl">
            <img src="/images/DSC08727.jpeg" alt="Gallery 3" className="object-cover w-full h-full" />
          </div>
          {/* Right — portrait image */}
          <div className="w-[38%] aspect-[4/3] overflow-hidden rounded-[20px] shadow-xl">
            <img src="/images/DSC05866.jpg" alt="Gallery 4" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Cream Team Section */}
      <section className="bg-rice-cream text-black py-32 px-4 sm:px-8 lg:px-16">
        <h2 className="text-4xl md:text-[54px] font-bold text-center mb-20 tracking-tight">Meet the Team</h2>

        <div className="max-w-[1900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16">
            {[...team, ...crew].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="flex flex-col text-center items-center px-3"
              >
                <div className="aspect-square bg-white w-full rounded-full mb-8 overflow-hidden shadow-sm">
                  <img
                    src={`/images/${member.img}`}
                    alt={member.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 rounded-full"
                  />
                </div>
                <h4 className="text-xl md:text-[22px] font-bold mb-3">{member.name}</h4>
                <p className="text-xs font-bold tracking-wider text-black mt-2 uppercase">{member.role}</p>
              </motion.div>
            ))}
        </div>
      </section>

    </div>
  );
}

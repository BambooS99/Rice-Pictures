import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const filmsData = {
  'bad-guy-official-music-video': {
    title: "'Bad Guy'",
    subtitle: "Official Music Video",
    videoEmbed: "https://www.youtube.com/embed/placeholder", // Needs actual link
    description: "A dark, atmospheric music video exploring themes of identity and perception."
  },
  'volador-short-film': {
    title: "Volador",
    subtitle: "Short Film",
    videoEmbed: "https://www.youtube.com/embed/placeholder", // Needs actual link
    description: "A visually stunning short film about taking flight, both literally and metaphorically."
  },
  'finding-xiao-documentary': {
    title: "Finding Xiao",
    subtitle: "Documentary",
    videoEmbed: "https://www.youtube.com/embed/placeholder", // Needs actual link
    description: "An intimate documentary following the journey of Xiao as they reconnect with their roots."
  },
  'higher-way-official-music-video': {
    title: "'Higher Way'",
    subtitle: "Official Music Video",
    videoEmbed: "https://www.youtube.com/embed/placeholder", // Needs actual link
    description: "An uplifting and dynamic visual experience for the hit song 'Higher Way'."
  }
};

export default function Film() {
  const { filmSlug } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    if (filmsData[filmSlug]) {
      setFilm(filmsData[filmSlug]);
    } else {
      setFilm(null); // Could redirect to 404 here
    }
  }, [filmSlug]);

  if (!film) return <div className="h-screen bg-rice-dark flex items-center justify-center text-white">Film not found</div>;

  return (
    <div className="bg-rice-dark min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest uppercase mb-4">{film.title}</h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-wide uppercase">{film.subtitle}</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="aspect-video w-full bg-black mb-12 shadow-2xl"
        >
          {/* Iframe for actual video */}
          <iframe 
            src={film.videoEmbed} 
            title={film.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            {film.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

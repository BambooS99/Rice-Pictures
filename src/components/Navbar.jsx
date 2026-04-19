import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  // Determine if we are on a page that requires a Light Theme (like the About page)
  const isLightTheme = location.pathname === '/about';

  const linkColor = isLightTheme ? 'text-white' : 'text-rice-orange';
  const buttonBorder = isLightTheme ? 'border-rice-yellow' : 'border-rice-orange';
  const buttonText = isLightTheme ? 'text-rice-yellow' : 'text-rice-orange';
  const buttonHoverBg = isLightTheme ? 'hover:bg-rice-yellow hover:text-black' : 'hover:bg-rice-orange hover:text-white';
  
  // Notice: The Logo remains black (#1a1a1a) in both, which matches the dark contrasts.

  return (
    <nav 
      className="absolute top-0 left-0 w-full z-50" 
      style={{ 
        padding: '32px 48px 64px 48px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)'
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1600px] mx-auto gap-4 md:gap-0">
        
        {/* Logo - actual image */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/images/rice-logo.webp" 
            alt="Rice Pictures" 
            style={{ width: '160px', height: 'auto' }}
          />
        </Link>
        
        {/* Nav Links - two rows, centered */}
        <div className="flex-grow flex flex-col items-center" style={{ gap: '8px' }}>
          <div className={`flex flex-wrap items-center justify-center gap-x-10 ${linkColor}`} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '24px', fontWeight: 600 }}>
            <span className="cursor-default">Films</span>
            <Link to="/films/bad-guy" className="hover:opacity-70 transition-opacity">'Bad Guy' (Official Music Video)</Link>
            <Link to="/films/volador" className="hover:opacity-70 transition-opacity">Volador (Short Film)</Link>
            <Link to="/films/finding-xiao" className="hover:opacity-70 transition-opacity">Finding Xiao (Documentary)</Link>
          </div>
          <div className={`flex flex-wrap items-center justify-center gap-x-10 ${linkColor}`} style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '24px', fontWeight: 600 }}>
            <Link to="/films/higher-way" className="hover:opacity-70 transition-opacity">'Higher Way' (Official Music Video)</Link>
            <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
            <Link to="/press" className="hover:opacity-70 transition-opacity">Press & Festivals</Link>
          </div>
        </div>

        {/* Contact Us Button */}
        <Link 
          to="/contact" 
          className={`flex-shrink-0 transition-colors border-[2px] rounded-[50px] px-[36px] py-[14px] ${buttonBorder} ${buttonText} ${buttonHoverBg}`}
          style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '24px', fontWeight: 600 }}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

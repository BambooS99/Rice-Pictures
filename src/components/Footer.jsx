import React from 'react';
import AboutButton from './AboutButton/AboutButton';

export default function Footer() {
  return (
    <footer className="bg-rice-cream">
      {/* Marquee */}
      <div className="overflow-hidden border-t border-b border-rice-orange/20 py-3">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 6s linear infinite' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="text-rice-orange font-bold text-lg tracking-widest uppercase mx-6 flex-shrink-0" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              'VOLADOR'&nbsp;&nbsp;'FINDING XIAO'&nbsp;&nbsp;'HIGHER WAY'&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <span className="text-rice-orange text-3xl font-bold tracking-wide">Rice Pictures</span>

        <AboutButton to="/contact">Connect</AboutButton>

        <div className="flex space-x-8 text-2xl font-bold tracking-wide">
          <a
            href="https://www.facebook.com/people/Rice-Pictures/pfbid02JyyFFBWspa5qHVYTg9QT5LM7PafwM5qDvN1WNxSwLgtpjtzu1UBMtZax4sQA6PbDl/?ref=xav_ig_profile_web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rice-orange underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/pictures_rice/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rice-orange underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}

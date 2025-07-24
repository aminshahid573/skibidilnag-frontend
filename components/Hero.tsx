
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <header className="text-center py-24 sm:py-32 lg:py-40">
      <h1 className="font-rubik font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
        <span className="text-skibidi-gray">💀</span> SkibidiLang{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-skibidi-pink to-skibidi-aqua">
          Code Like a Sigma
        </span>{' '}
        <span className="text-skibidi-gray">💀</span>
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-skibidi-gray max-w-2xl mx-auto">
        The world's most baffling, sigma-approved, toilet-tested programming language.
      </p>
      <div className="mt-8">
        <button
          onClick={onCtaClick}
          className="font-bold text-lg bg-gradient-to-r from-skibidi-pink to-skibidi-aqua text-white py-3 px-8 rounded-full shadow-lg shadow-skibidi-pink/20 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Try it Now 🚽
        </button>
      </div>
    </header>
  );
};

export default Hero;

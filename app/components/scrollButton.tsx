"use client";

import React from 'react';

interface ScrollButtonProps {
  buttonText: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ buttonText }) => {
  const scrollToSection = (): void => {
    const targetElement = document.getElementById('target-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } else {
      console.error('Elemento com ID "target-section" não encontrado.');
    }
  };

  return (
    <button
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 dark:bg-zinc-100 px-8 py-3 text-fuchsia-700 hover:bg-dark:hover:bg-transparent hover:font-bold hover:text-fuchsia-800 transition ease-in-out delay-15 hover:-tranzinc-y-1 hover:scale-110 duration-700 focus:outline-none focus:ring active:bg-white/90"
      onClick={scrollToSection}
    >
      <span className="text-sm font-medium">{buttonText}</span>
    </button>
  );
};

export default ScrollButton;
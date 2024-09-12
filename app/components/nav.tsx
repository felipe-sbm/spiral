"use client";
import { useState } from "react";
import { Pixelify_Sans } from "next/font/google";

const inter = Pixelify_Sans({
  weight: "400",
  subsets: ["latin"],
});

export function Navbar() {
  return (
    <header className="bg-black">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Spiral SBM</span>
            <img
              className="h-14 w-auto hover:opacity-75"
              src="/assets/logo-spiral.png"
              alt="Logo da Spiral SBM"
            />
          </a>
        </div>
        <div className="flex justify-right">
          <a
            href="/"
            className="arco-iris"
            title="Botão para entrar ir para parte de baixo do site, para ter acesso a área de contato"
          >
            <span className={inter.className}>
              <p className="bg-black py-1 px-2 text-xl rounded-lg">Entrar em contato</p>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

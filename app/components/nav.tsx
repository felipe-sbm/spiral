"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Shell,
  FlaskConical,
  BookImage,
  MessageCircleHeart,
  PhoneCall,
  Menu,
  X,
} from "lucide-react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Início</span>
              <Image
                src="/spiral.png"
                alt="Spiral Logo"
                width={132}
                height={132}
                className="invert dark:invert-0"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-purple-950/75"
                    href="/"
                  >
                    INÍCIO
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-purple-950/75"
                    href="/pages/about"
                  >
                    A SPIRAL
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-purple-950/75"
                    href="/pages/projects"
                  >
                    NOSSOS PROJETOS
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-purple-950/75"
                    href="/pages/galery"
                  >
                    GALERIA
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-purple-950/75"
                    href="/pages/supportus"
                  >
                    DOAÇÕES
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-purple-700 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/pages/contact"
              >
                CONTATO
              </a>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-purple-950/75"
                button-type="menu"
                title="Menu"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

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
    <header className="bg-white dark:bg-gray-900 w-screen">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Spiral</span>
            <Image
              className="h-20 w-auto invert hover:opacity-75 dark:invert-0"
              src="/spiral.png"
              alt="Logo da Spiral"
              width={420}
              height={420}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Menu />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            INÍCIO
          </Link>
          <Link
            href="/pages/about"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            A SPIRAL
          </Link>
          <Link
            href="/pages/projects"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            NOSSOS PROJETOS
          </Link>
          <Link
            href="/pages/galery"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            GALERIA
          </Link>
          <Link
            href="/pages/supportus"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            DOAÇÕES
          </Link>
          <Link
            href="/pages/contact"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            CONTATO
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Spiral</span>
              <img
                className="h-8 w-auto"
                src="https://raw.githubusercontent.com/felipe-sbm/spiral/main/public/logo.png"
                alt="logo da Spiral"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <X />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <Home /> Início
                </Link>
                <Link
                  href="/pages/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <Shell /> A Spiral
                </Link>
                <Link
                  href="/pages/projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <FlaskConical /> Nossos projetos
                </Link>
                <Link
                  href="/pages/galery"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <BookImage /> Galeria
                </Link>
                <Link
                  href="/pages/supportus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <MessageCircleHeart /> Doações
                </Link>
                <Link
                  href="/pages/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
                >
                  <PhoneCall /> Contato
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

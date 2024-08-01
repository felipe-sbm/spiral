"use client";
import { useState } from "react";
import {
  DoorOpen,
  Shell,
  Newspaper,
  BookImage,
  MessageCircleHeart,
  MailPlus,
  Menu,
  X,
} from "lucide-react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-zinc-950">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Spiral SBM</span>
            <img
              className="h-14 w-auto invert hover:opacity-75 dark:invert-0"
              src="/spiral.png"
              alt="Logo da Spiral SBM"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Menu />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="/"
            className="py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200"
          >
            INÍCIO
          </a>
          <a
            href="/pages/about"
            className="py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200"
          >
            A SPIRAL
          </a>
          <a
            href="/pages/projects"
            className="py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200"
          >
            NOSSOS PROJETOS
          </a>
          <a
            href="/pages/gallery"
            className="py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200"
          >
            GALERIA
          </a>
          <a
            href="/pages/supportus"
            className="py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200"
          >
            DOAÇÕES
          </a>
          <a
            href="/pages/contact"
            className="py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200"
          >
            CONTATO
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        className="lg:hidden shadow"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-950/10 dark:bg-zinc-950">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Spiral</span>
              <img
                className="h-12 w-auto round invert hover:opacity-75 dark:invert-0"
                src="/logo.png"
                alt="Logo da Spiral SBM"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md ml-3.5 text-zinc-700 dark:text-zinc-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <X />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="my-6 divide-y divide-zinc-500/10">
              <div className="space-y-5 py-6">
                <a
                  href="/"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <DoorOpen /> Início
                </a>
                <a
                  href="/pages/about"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <Shell />A Spiral
                </a>
                <a
                  href="/pages/projects"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <Newspaper />
                  Nosso Projetos
                </a>
                <a
                  href="/pages/gallery"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <BookImage />
                  Galeria
                </a>
                <a
                  href="/pages/supportus"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <MessageCircleHeart />
                  Doações
                </a>
                <a
                  href="/pages/contact"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-fuchsia-950/75 dark:hover:text-fuchsia-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <MailPlus /> Contato
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

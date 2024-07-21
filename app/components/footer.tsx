import { Github, Mail, BookUser, Linkedin, MoveRight, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-gradient-to-r from-purple-950 to-purple-500 dark:bg-gradient-to-r dark:from-purple-500 dark:to-purple-950 p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl">
            {" "}
            Impulse seus negócios com a Spiral!{" "}
          </strong>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-purple-700 hover:bg-transparent hover:font-bold hover:text-white transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 focus:outline-none focus:ring active:bg-white/90"
            href="#"
          >
            <span className="text-sm font-medium"> Vamos começar </span>
            <MoveRight />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900 dark:text-zinc-50">
              Sobre Nós
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Nossa história 🌀
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Conheça o nosso time!
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Especialidades da empresa
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 dark:text-zinc-700 transition hover:text-purple-950/75 dark:hover:text-purple-950/95 cursor-not-allowed"
                  href="#"
                >
                  Trabalhe conosco (em breve!)
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900 dark:text-zinc-50">
              Nossos Serviços
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Desenvolvimento WEB
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Webdesign
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 dark:text-zinc-700 transition hover:text-purple-950/75 dark:hover:text-purple-950/95 cursor-not-allowed"
                  href="#"
                >
                  Cibersegurança (em breve!)
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 dark:text-zinc-700 transition hover:text-purple-950/75 dark:hover:text-purple-950/95 cursor-not-allowed"
                  href="#"
                >
                  Servidores (em breve!)
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900 dark:text-zinc-50">
              Recursos Disponíveis
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Endereço
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Tutoriais
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Surgestões
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Eventos da comunidade
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900 dark:text-zinc-50">
              Links Úteis
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Central de dúvidas
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="#"
                >
                  Política de privacidade
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 dark:text-zinc-200 transition hover:text-purple-950/75 dark:hover:text-purple-300/95"
                  href="/pages/contact"
                >
                  Entre em contato conosco
                    <span className="absolute inline-flex h-2 w-2 ml-0.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-purple-500"></span>
                    </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <ul className="flex justify-center gap-6 sm:justify-end">
            <li>
              <a
                href="https://github.com/spiral-sbm"
                rel="Página do GitHub"
                className="text-purple-700 dark:text-purple-500 transition hover:text-purple-950/75 dark:hover:text-purple-700/95"
              >
                <span className="sr-only">GitHub</span>
                <Github />
              </a>
            </li>
            <li>
              <a
                href="mailto:spiral-sbm@outlook.com"
                rel="noreferrer"
                target=""
                className="text-purple-700 dark:text-purple-500 transition hover:text-purple-950/75 dark:hover:text-purple-700/95"
              >
                <span className="sr-only">E-mail</span>
                <Mail />
              </a>
            </li>
            <li>
              <a
                href="/pages/bookuser"
                rel="noreferrer"
                className="text-purple-700 dark:text-purple-500 transition hover:text-purple-950/75 dark:hover:text-purple-700/95"
              >
                <span className="sr-only">Lista de visitantes</span>
                <BookUser />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/spiralsbm/"
                rel="Página do Instagram"
                className="text-purple-700 dark:text-purple-500 transition hover:text-purple-950/75 dark:hover:text-purple-700/95"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
            </li>
          </ul>

          <div className="mt-6 sm:flex sm:items-center sm:justify-between">
            <div className="invert-0 dark:invert">
              <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="Logo da Spiral"
                className="rounded-full"
              />
            </div>
            <p className="mt-1 text-center text-sm text-gray-500 dark:text-zinc-200 sm:mt-0 sm:text-right">
              Copyright &copy;Spiral 2024. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { Github, Mail, BookUser, MoveRight, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-transparent from-15% via-black via-50% to-transparent to-85%">
      <div className="mx-auto max-w-6xl pb-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-gradient-to-r from-violet-950 via-purple-700 to-fuchsia-600 p-6 shadow-lg sm:flex-row sm:justify-between">
          <span className="jacquard12">
            <p className="lg:text-3xl text-xl">
              Impulse seus negócios com a Spiral!{" "}
            </p>
          </span>
          <a
            className="inline-flex items-center gap-2 rounded-lg border border-white border-2 lg:text-white px-8 py-3 lg:bg-transparent bg-white text-fuchsia-500 hover:bg-transparent hover:text-white lg:hover:bg-white hover:font-bold lg:hover:text-fuchsia-500 transition ease-in-out delay-15 hover:-tranzinc-y-1 hover:scale-110 duration-300 focus:outline-none focus:ring active:bg-white/90"
            href="/pages/contact"
          >
            <span className="text-sm lg:text-lg font-medium">
              {" "}
              Vamos começar{" "}
            </span>
            <MoveRight />
          </a>
        </div>

        <div className="mt-16 md:mx-6 sm:mx-3 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            {" "}
            <p className="text-xl font-medium">Sobre Nós</p>
            <ul className="mt-4 space-y-2 text-sm list-disc">
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Nossa história 🌀
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Conheça o nosso time!
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Especialidades da empresa
                </a>
              </li>
              <li>
                <a className="text-zinc-500 transition hover:text-fuchsia-300/75 cursor-not-allowed">
                  Trabalhe conosco (em breve!)
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            {" "}
            <p className="text-xl font-medium text-white">Nossos Serviços</p>
            <ul className="mt-4 space-y-2 text-sm list-disc">
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Desenvolvimento WEB
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Webdesign
                </a>
              </li>
              <li>
                <a className="text-zinc-500 transition hover:text-fuchsia-300/75 cursor-not-allowed">
                  Cibersegurança (em breve!)
                </a>
              </li>
              <li>
                <a className="text-zinc-500 transition hover:text-fuchsia-300/75 cursor-not-allowed">
                  Servidores (em breve!)
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            {" "}
            <p className="text-xl font-medium text-white">
              Recursos Disponíveis
            </p>
            <ul className="mt-4 space-y-2 text-sm list-disc">
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Endereço
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Tutoriais
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Surgestões
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Eventos da comunidade
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            {" "}
            <p className="text-xl font-medium text-white">Links Úteis</p>
            <ul className="mt-4 space-y-2 text-sm list-disc">
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Central de dúvidas
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="#"
                >
                  Política de privacidade
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-fuchsia-300/75 underline underline-offset-4"
                  href="/pages/contact"
                >
                  Entre em contato conosco
                  <span className="absolute inline-flex h-2 w-2 ml-0.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-fuchsia-500"></span>
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
                className="text-fuchsia-600 transition hover:text-fuchsia-700/95"
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
                className="text-fuchsia-600 transition hover:text-fuchsia-700/95"
              >
                <span className="sr-only">E-mail</span>
                <Mail />
              </a>
            </li>
            <li>
              <a
                href="/pages/bookuser"
                rel="noreferrer"
                className="text-fuchsia-600 transition hover:text-fuchsia-700/95"
              >
                <span className="sr-only">Lista de visitantes</span>
                <BookUser />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/spiralsbm/"
                rel="Página do Instagram"
                className="text-fuchsia-600 transition hover:text-fuchsia-700/95"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
            </li>
          </ul>

          <div className="mt-6 justify-right">
            {" "}
            <span className="jacquard12">
              <p className="mt-1 text-right text-sm lg:text-xl text-zinc-500 sm:mt-0">
                Copyright &copy;Spiral 2024. Todos os direitos reservados.
              </p>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

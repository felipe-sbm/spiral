import { Github, Mail, BookUser, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 w-screen max-md:shadow-2xl shadow-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600 dark:text-teal-300">
            <Image
              className="w-16 lg:w-40 mt-1 invert dark:invert-0 rounded-full  "
              src="/logo.png"
              alt="Logo da Spiral"
              width={100}
              height={100}
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 lg:gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white max-md:text-justify">
                  Cadastre o seu e-mail de preferência e receba ofertas
                  imperdíveis.
                </h2>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 col-span-4 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 dark:border-gray-800 shadow">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="seu@email.com"
                    className="w-full lg:ml-4 border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-gray-900 dark:text-white max-md:m-4 "
                  />

                  <button className="mt-1 w-full bg-fuchsia-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-fuchsia-800 sm:mt-0 sm:w-auto sm:shrink-0 shadow dark:text-black">
                    Enviar
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-4 sm:col-span-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-lg max-md:mt-6">
                Sobre a Spiral
              </h4>

              <ul className="mt-3 space-y-4 text-sm">
                <li>
                  <p className="mb-6 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo ipsum modi molestias a tempora fugit, perferendis, at
                    quo ea accusamus id quae necessitatibus voluptates? Velit
                    aspernatur inventore ducimus et reprehenderit!
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-span-4 sm:col-span-1">
              <h4 className="font-medium text-gray-900 dark:text-white">
                Nosso site é seguro
              </h4>

              <ul className="mt-3 space-y-4 text-sm">
                <li className="sm:hidden text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Verifique nosso certificado para comprovar Link sua
                    segurança. Você está seguro, nenhum dado ou cookie é
                    coletado do seu dispositivo. 😉
                  </p>
                </li>
                <li>
                  <Link
                    href="https://www.ssl.com/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <img
                      src="https://ee2cc1f8.rocketcdn.me/wp-content/uploads/2023/10/bage-trusted-secure-min.png"
                      alt="Certificado ssl secured"
                      className="w-32"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-4 sm:col-span-1 mt-8 lg:sm:mt-0">
              <h4 className="font-medium text-gray-900 dark:text-white">
                Literalmente eu
              </h4>

              <ul className="mt-3 space-y-4 text-sm">
                <li className="sm:hidden text-sm text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  vero perferendis id, doloremque commodi eum veniam! Porro
                  exercitationem distinctio ut quae magnam ipsum blanditiis!
                  Perspiciatis error possimus dolores reiciendis voluptates.
                </li>
                <li>
                  <Link
                    href="https://github.com/spiral-sbm"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <img
                      src="https://th.bing.com/th/id/OIP.gwqnk6fR-8fZPe7B-HZqPQHaFj?rs=1&pid=ImgDetMain"
                      alt="Lorem"
                      className="w-24 rounded-lg"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end max-md:mt-7">
              <li className="sm:hidden text-sm text-gray-500 dark:text-gray-400">
                Siga-nos nas redes sociais:{" "}
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Facebook</span>
                  <Github />
                </Link>
              </li>

              <li>
                <Link
                  href="mailto:spiral-sbm@outlook.com"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">E-mail</span>

                  <Mail />
                </Link>
              </li>

              <li>
                <Link
                  href="/pages/bookuser"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Lista de visitantes</span>

                  <BookUser />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/in/felipe-sbm/"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Linkedin</span>

                  <Linkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy;Todos os direitos reservados a Spiral 2024. Website criado
              por:{" "}
              <Link href="https://fsbm.vercel.app" className="hover:opacity-75">
                Felipe SBM
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

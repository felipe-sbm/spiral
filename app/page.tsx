import Image from "next/image";
import { Flame, Check, X } from "lucide-react";

export default function Page() {
  return (
    <div className="relative antialasing mb-0 lg:mb-96 md:mb-5 sm:mb-12">
      <div className="flex justify-center items-center min-h-screen">
        <div className="justify-center max-w-5xl lg:grid grid-cols-2 gap-24 sm:mt-8 md:mt-12 lg:mt-24 lg:mb-4">
          <div className="leading-relaxed text-center lg:text-right dark:text-zinc-200 lg:pt-56 sm:pt-0 mb-10 mx-18">
            <h1 className="font-medium text-6xl" id="type">
              Simplesmente <br /> comece a{" "}
              <span className="text-fade">planejar</span>
            </h1>
            <p className="font-light leading-loose text-pretty lg:text-2xl text-md pt-2">
              A Spiral irá te ajudar em desenvolver seus planos e impulsionar
              sua carreira ou empresa. Com desenvolvimeto de Websites, sistemas,
              API's, aplicativos. Nossa startup é focada em compromisso com o
              cliente, entregando no prazo e com qualidade.
            </p>
          </div>
          <div className="relative mb-8">
            <div className="flex absolute top-20 right-12 bg-zinc-900/95 px-3 py-3 rounded-xl">
              <div className="block bg-black px-3 py-3 rounded-xl">
                <Image
                  src="/fatSpiral.svg"
                  alt="Logo da Spiral em uma notificação de celular"
                  width={50}
                  height={50}
                  blurDataURL="/assets/purpleSpiral.png"
                  className="select-none no-drag"
                />
              </div>
              <p className="ml-6 font-light text-zinc-300 text-md mr-10" id="notification">
                <strong className="font-semibold text-white text-lg">
                  Spiral te enviou um convite
                </strong>{" "}
                <br />
                Venha fazer parte dessa <br /> jornada conosco!
              </p>
            </div>
            <div className="absolute bottom-1/4 right-10 blur-xl">
              <Image
                src="/assets/purpleSpiral.png"
                alt="Logo da Spiral em uma notificação de celular"
                width={370}
                height={370}
                blurDataURL="/assets/purpleSpiral.png"
                className="select-none no-drag"
              />
            </div>
            <Image
              src="/assets/iphone_xs.png"
              alt="Imagem de um iPhone XS Maxx para fixar outras imagens em cima"
              width={1920}
              height={717}
              blurDataURL="/assets/purpleSpiral.png"
              className="select-none no-drag"
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <hr />
        <h1 className="slogan">
          Sua satisfação é a <br /> nossa <span className="text-fade">prioridade</span>.
        </h1>
        <hr />
      </div>
      <div className="justify-center relative">
        <Image
          src="/imagePlacer.png"
          alt="Imagem para fixar outras imagens em cima"
          width={1920}
          height={717}
          blurDataURL="/assets/purpleSpiral.png"
          className="select-none no-drag"
        />
      </div>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="leading-tight text-4xl font-bold text-fuchsia-950 dark:text-fuchsia-400">
            Deseja ter um Website?
          </h1>

          <p className="my-4 mb-8 leading-relaxed text-zinc-700 dark:text-zinc-200">
            Temos algumas opções para você, confira os nossos serviços:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:items-stretch md:grid-cols-2 lg:grid-cols-3 md:gap-8 justify-between">
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm" id="prices-border">
            <div className="p-6 sm:px-8">
              <span className="inline-flex rounded-full bg-red-700 px-2.5 py-0.5 text-red-100">
                <Flame className="size-4" />
                <p className="whitespace-nowrap text-sm">Mais popular</p>
              </span>
              <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
                Website Estático
                <span className="sr-only">Pagamento único</span>
              </h2>
              <p className="mt-2 font-light text-zinc-700 dark:text-zinc-200">
                Um website básico, do seu jeito que você decidir. Excelente para
                pequenos negócios, ou para projetos pessoais.
              </p>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-zinc-700 dark:text-zinc-200 sm:text-4xl">
                  450$
                </strong>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  /pagamento único
                </span>
              </p>
              <a
                className="mt-4 block rounded border border-fuchsia-600 bg-fuchsia-600 px-12 py-3 text-center text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-transparent hover:text-fuchsia-600 focus:outline-none focus:ring active:text-fuchsia-500 sm:mt-6"
                href="/pages/contact"
              >
                Tenho interesse!
              </a>
            </div>
            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-zinc-700 dark:text-zinc-200 sm:text-xl">
                O que está incluso:
              </p>
              <ul className="mt-2 font-light space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Website responsivo{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    Atualizações com desconto
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Equipe de suporte{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <X className="text-red-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Hospedagem{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <X className="text-red-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Banco de dados{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <X className="text-red-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    API{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
                Website Empresarial
                <span className="sr-only">Plano</span>
              </h2>
              <p className="mt-2 font-light text-zinc-700 dark:text-zinc-200">
                Um website perfeito para empresas maiores, contanto com um maior
                volume de clientes. Com páginas de autenticação seguras, banco
                de dados de grande capacidade e até newsletter.
              </p>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-zinc-700 dark:text-zinc-200 sm:text-4xl">
                  2500$
                </strong>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  /mês
                </span>
              </p>
              <a
                className="mt-4 block rounded border border-fuchsia-600 bg-fuchsia-600 px-12 py-3 text-center text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-transparent hover:text-fuchsia-600 focus:outline-none focus:ring active:text-fuchsia-500 sm:mt-6"
                href="/pages/contact"
              >
                Vamos conversar
              </a>
            </div>
            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-zinc-700 dark:text-zinc-200 sm:text-xl">
                O que está incluso:
              </p>
              <ul className="mt-2 font-light space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Website responsivo{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Atualizações diárias{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Equipe de suporte 24H{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    Hospedagem e endereço web
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Banco de dados de 32gb
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    E-commerce{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    API exclusiva{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-zinc-700 dark:text-zinc-200">
                Seriviço Personalizado
                <span className="sr-only">Plano ou pagamento único</span>
              </h2>
              <p className="mt-2 text-zinc-700 dark:text-zinc-200">
                Um website que você decide absolutamente tudo, o céu é o limite.
              </p>
              <a
                className="mt-4 block rounded border border-fuchsia-600 bg-fuchsia-600 px-12 py-3 text-center text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-transparent hover:text-fuchsia-600 focus:outline-none focus:ring active:text-fuchsia-500 sm:mt-6"
                href="/pages/contact"
              >
                Entrar em contato
              </a>
            </div>
            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-zinc-700 dark:text-zinc-200 sm:text-xl">
                O que pode estar incluso:
              </p>
              <ul className="mt-2 font-light space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Website & Aplicativo
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Atualizações diárias{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Equipe de suporte 24H{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    Hospedagem e endereço web
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    Banco de dados de até 256gb
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    API exclusiva{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    Segurança contra crackers
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    Recursos de acessibilidade
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    Recurso de vendas online
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <Check className="text-lime-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    Backup e recuperação de dados
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <X className="text-red-600" />
                  <span className="text-zinc-700 dark:text-zinc-200">
                    {" "}
                    Lavar a louça{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="letreiro">
          <span className="text-7xl">
            ENTRAR EM CONTATO ENTRAR EM CONTATO ENTRAR EM CONTATO ENTRAR EM
            CONTATO
          </span>
        </div>
      </div>
      <div className="absolute opacity-55 lg:-bottom-96 md:-bottom-52 sm:-bottom-48">
        <Image
          src="/assets/spirals-footer.svg"
          alt="Várias espirais de fundo"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
}

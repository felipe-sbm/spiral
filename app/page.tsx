import Image from "next/image";
import { Flame, Check, X } from "lucide-react";

export default function Page() {
  return (
    <div className="antialasing">
      <div className="lg:grid grid-cols-2 gap-24 sm:mt-8 md:mt-12 lg:mt-24 lg:mb-4">
        <div className="mb-8">
          <Image
            src="/unDrawn-home.svg"
            alt="Desenho estilo unDrawn com um homem olhando um mapa"
            width={500}
            height={500}
          />
        </div>
        <div>
          <div className="leading-relaxed text-zinc-700 dark:text-zinc-200">
            <h1 className="font-medium text-3xl text-fuchsia-950 dark:text-fuchsia-300">
              Simplesmente comece a planejar
            </h1>
            <p className="font-light pt-2">
              A Spiral irá te ajudar em desenvolver seus planos e impulsionar
              sua carreira ou empresa. Com desenvolvimeto de Websites, sistemas,
              API's, aplicativos. Nossa startup é focada em compromisso com o
              cliente, entregando no prazo e com qualidade.
            </p>
            <strong className="font-semibold">
              Venha fazer parte dessa jornada conosco!
            </strong>
          </div>
        </div>
      </div>
      <div>
        <div className="justify-center relative">
          <Image
            src="/imagePlacer.png"
            alt="Imagem para fixar outras imagens em cima"
            width={1920}
            height={717}
          />
        </div>
      </div>
      <div className="lg:grid grid-cols-2 gap-8 lg:mb-16">
        <div>
          <h2 className="mt-3 text-right font-semibold text-2xl text-fuchsia-950 dark:text-fuchsia-400">
            Mikas rubas
          </h2>
          <div className="text-right text-zinc-700 dark:text-zinc-200">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              perspiciatis sed blanditiis dolores voluptatum quam ad nam,
              voluptatibus nulla quod, laudantium maiores sapiente laborum sequi
              veniam. Dolorum eos alias voluptate. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Facilis distinctio expedita illo
              doloribus, eligendi quibusdam quo quod sequi perferendis culpa
              aspernatur praesentium sit nisi officiis earum laborum veritatis
              unde libero!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              ad quae error! Nam numquam cumque commodi corporis eveniet, quia
              tempore ad officia sequi recusandae molestiae. Obcaecati impedit
              laboriosam odio suscipit. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Facilis iure repudiandae qui debitis
              voluptatibus nam totam voluptate? Corporis, vel. Maiores sit illum
              iure minus laborum quam quo neque dolorum consequatur!
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mt-3 text-left font-semibold text-2xl text-fuchsia-950 dark:text-fuchsia-400">
            Lorem?
          </h2>
          <div className="text-left text-zinc-700 dark:text-zinc-200">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              perspiciatis sed blanditiis dolores voluptatum quam ad nam,
              voluptatibus nulla quod, laudantium maiores sapiente laborum sequi
              veniam. Dolorum eos alias voluptate. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Facilis distinctio expedita illo
              doloribus, eligendi quibusdam quo quod sequi perferendis culpa
              aspernatur praesentium sit nisi officiis earum laborum veritatis
              unde libero!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              ad quae error! Nam numquam cumque commodi corporis eveniet, quia
              tempore ad officia sequi recusandae molestiae. Obcaecati impedit
              laboriosam odio suscipit. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Facilis iure repudiandae qui debitis
              voluptatibus nam totam voluptate? Corporis, vel. Maiores sit illum
              iure minus laborum quam quo neque dolorum consequatur!
            </p>
          </div>
        </div>
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <span className="inline-flex rounded-full bg-red-100 dark:bg-red-700 px-2.5 py-0.5 text-red-700 dark:text-red-100">
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
                  15$
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
                  100$
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
                Iniciar hoje
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
    </div>
  );
}

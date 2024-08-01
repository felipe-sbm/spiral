import Image from "next/image";
import {
  Shell,
  HeartHandshake,
  Sparkles,
  Cog,
  WandSparkles,
  ShoppingBasket,
  DraftingCompass,
} from "lucide-react";
import ScrollButton from "../../components/scrollButton";

export default function Page() {
  const scrollToSection = (): void => {
    const targetElement = document.getElementById("target-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Elemento com ID "target-section" não encontrado.');
    }
  };
  return (
    <div className="antialiased">
      <section className="leading-tight text-4xl font-bold text-zinc-700 dark:text-zinc-200">
        <div className="px-4 py-3 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-pink-300 via-fuchsia-600 to-purple-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Sua satisfação é a
              <span className="sm:block">nossa prioridade.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Nada mais justo como uma empresa que se preocupa com cada
              detalhes. Por isso juntamos perfecionistas para desenvolver o{" "}
              <strong>melhor</strong> para você.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ScrollButton buttonText="Conheça a Spiral" />
            </div>
          </div>
        </div>
      </section>
      <section id="target-section" className="mt-14 lg:py-12 py-32">
        <div className="lg:grid grid-cols-2 gap-8 sm:mt-8 md:mt-12 lg:mt-24">
          <div className="mb-8">
            <Image
              src="/unDrawn-dev.svg"
              alt="Desenho estilo unDrawn com programadores."
              width={550}
              height={550}
            />
          </div>
          <div>
            <h1 className="leading-tight text-4xl font-bold text-fuchsia-950 dark:text-fuchsia-400">
              Desenvolvimento Web de Excelência
            </h1>
            <p className="leading-relaxed font-light text-left lg:text-justify">
              Bem-vindo a Spiral, uma empresa dedicada a transformar ideias em
              soluções digitais robustas e escaláveis. Nosso foco é fornecer
              serviços de desenvolvimento web de alta qualidade, atendendo às
              necessidades específicas de cada cliente com criatividade e
              eficiência.
            </p>
            <hr className="mt-6 mb-6 mx-6 lg:mx-0" />
            <h2 className="mt-3 flex font-semibold text-2xl text-fuchsia-950 dark:text-fuchsia-400">
              <Shell className="mr-2 mb-2 h-7 w-7" /> Sobre a Spiral
            </h2>
            <p className="leading-relaxed font-light text-left lg:text-justify">
              Na Spiral, acreditamos que a web é a espiral de inovação que
              conecta pessoas e ideias. Nossa missão é utilizar a tecnologia
              para construir um futuro melhor, oferecendo soluções que ajudam
              empresas a crescer e se destacar no ambiente digital.
            </p>
          </div>
        </div>
      </section>
      <div className="lg:grid grid-cols-2 gap-8 lg:mb-32">
        <div>
          <h2 className="mt-3 text-right font-semibold text-2xl text-fuchsia-950 dark:text-fuchsia-400">
            Nossos Valores
          </h2>
          <ul className="text-right text-zinc-700 dark:text-zinc-200">
            <li>
              <h2 className="mt-3 text-right font-semibold text-md text-fuchsia-950 dark:text-fuchsia-400">
                Inovação
              </h2>
              Buscamos constantemente novas tecnologias e metodologias para
              entregar soluções modernas e eficientes.
            </li>
            <li>
              <h2 className="mt-3 text-right font-semibold text-md text-fuchsia-950 dark:text-fuchsia-400">
                Qualidade
              </h2>
              Garantimos excelência em cada projeto, desde a concepção até a
              entrega final.
            </li>
            <li>
              <h2 className="mt-3 text-right font-semibold text-md text-fuchsia-950 dark:text-fuchsia-400">
                Transparência
              </h2>
              Mantemos uma comunicação aberta e honesta com nossos clientes.
            </li>
            <li>
              <h2 className="mt-3 text-right font-semibold text-md text-fuchsia-950 dark:text-fuchsia-400">
                Colaboração
              </h2>
              Valorizamos o trabalho em equipe e o compartilhamento de
              conhecimentos.
            </li>
            <li>
              <h2 className="mt-3 text-right font-semibold text-md text-fuchsia-950 dark:text-fuchsia-400">
                Sustentabilidade
              </h2>
              Promovemos práticas que contribuem para um futuro mais
              sustentável.
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="mt-3 text-left font-semibold text-2xl text-fuchsia-950 dark:text-fuchsia-400">
            Tecnologias
          </h2>
          <ul className="text-left text-zinc-700 dark:text-zinc-200">
            <li>
              <h2 className="mt-3 font-semibold text-md text-fuchsia-950 dark:text-fuchsia-400">
                Frontend
              </h2>
              <div className="space-x-1 space-y-1">
                <span className="inline-flex items-center justify-center rounded-full border border-zinc-500 px-2.5 py-0.5 text-zinc-700">
                  <p className="whitespace-nowrap text-sm">Next.js</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-emerald-500 px-2.5 py-0.5 text-emerald-700">
                  <p className="whitespace-nowrap text-sm">Vue.js</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-orange-500 px-2.5 py-0.5 text-orange-700">
                  <p className="whitespace-nowrap text-sm">HTML</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-sky-500 px-2.5 py-0.5 text-sky-700">
                  <p className="whitespace-nowrap text-sm">React</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-cyan-500 px-2.5 py-0.5 text-cyan-700">
                  <p className="whitespace-nowrap text-sm">CSS</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-blue-500 px-2.5 py-0.5 text-blue-700">
                  <p className="whitespace-nowrap text-sm">TailwindCSS</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-purple-500 px-2.5 py-0.5 text-purple-700">
                  <p className="whitespace-nowrap text-sm">Boostrap</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-indigo-500 px-2.5 py-0.5 text-indigo-700">
                  <p className="whitespace-nowrap text-sm">Typescript</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-yellow-500 px-2.5 py-0.5 text-yellow-700">
                  <p className="whitespace-nowrap text-sm">Javascript</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-violet-500 px-2.5 py-0.5 text-violet-700">
                  <p className="whitespace-nowrap text-sm">Vite</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-teal-500 px-2.5 py-0.5 text-teal-700">
                  <p className="whitespace-nowrap text-sm">React Native</p>
                </span>
              </div>
            </li>
            <li>
              <h2 className="mt-3 font-semibold text-md text-fuchsia-950 dark:text-fuchsia-400">
                Backend
              </h2>
              <div className="space-x-1 space-y-1">
                <span className="inline-flex items-center justify-center rounded-full border border-lime-500 px-2.5 py-0.5 text-lime-700">
                  <p className="whitespace-nowrap text-sm">Node.js</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-yellow-500 px-2.5 py-0.5 text-yellow-700">
                  <p className="whitespace-nowrap text-sm">Python</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-red-500 px-2.5 py-0.5 text-red-700">
                  <p className="whitespace-nowrap text-sm">Ruby on Rails</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-indigo-500 px-2.5 py-0.5 text-indigo-700">
                  <p className="whitespace-nowrap text-sm">PHP</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-green-500 px-2.5 py-0.5 text-green-700">
                  <p className="whitespace-nowrap text-sm">Django</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-purple-500 px-2.5 py-0.5 text-purple-700">
                  <p className="whitespace-nowrap text-sm">Julia</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-zinc-500 px-2.5 py-0.5 text-zinc-700">
                  <p className="whitespace-nowrap text-sm">Flask</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-yellow-500 px-2.5 py-0.5 text-yellow-700">
                  <p className="whitespace-nowrap text-sm">Java</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-lime-500 px-2.5 py-0.5 text-lime-700">
                  <p className="whitespace-nowrap text-sm">C#</p>
                </span>
              </div>
            </li>
            <li>
              <h2 className="mt-3 font-semibold text-md text-fuchsia-950 dark:text-fuchsia-400">
                Banco de dados
              </h2>
              <div className="space-x-1 space-y-1">
                <span className="inline-flex items-center justify-center rounded-full border border-indigo-500 px-2.5 py-0.5 text-indigo-700">
                  <p className="whitespace-nowrap text-sm">MySQL</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-sky-500 px-2.5 py-0.5 text-sky-700">
                  <p className="whitespace-nowrap text-sm">PostgreSQL</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-emerald-500 px-2.5 py-0.5 text-emerald-700">
                  <p className="whitespace-nowrap text-sm">MongoDB</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-red-500 px-2.5 py-0.5 text-red-700">
                  <p className="whitespace-nowrap text-sm">Oracle</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-yellow-500 px-2.5 py-0.5 text-yellow-700">
                  <p className="whitespace-nowrap text-sm">Contentful</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-red-500 px-2.5 py-0.5 text-red-700">
                  <p className="whitespace-nowrap text-sm">SQLserver</p>
                </span>
              </div>
            </li>
            <li>
              <h2 className="mt-3 font-semibold text-md text-fuchsia-950 dark:text-fuchsia-400">
                DevOps
              </h2>
              <div className="space-x-1 space-y-1">
                <span className="inline-flex items-center justify-center rounded-full border border-blue-500 px-2.5 py-0.5 text-blue-700">
                  <p className="whitespace-nowrap text-sm">Docker</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-sky-500 px-2.5 py-0.5 text-sky-700">
                  <p className="whitespace-nowrap text-sm">Kubernetes</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-orange-500 px-2.5 py-0.5 text-orange-700">
                  <p className="whitespace-nowrap text-sm">AWS</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-indigo-500 px-2.5 py-0.5 text-indigo-700">
                  <p className="whitespace-nowrap text-sm">Azure</p>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-zinc-500 px-2.5 py-0.5 text-zinc-700">
                  <p className="whitespace-nowrap text-sm">Google Cloud</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8 lg:py-4">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="leading-tight text-4xl font-bold text-fuchsia-950 dark:text-fuchsia-400">
            Conheça os nossos serviços
          </h1>

          <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-200">
            A Spiral oferece uma ampla gama de serviços de desenvolvimento web
            para ajudar sua empresa a alcançar seus objetivos. Nossas soluções
            são personalizadas para atender às necessidades específicas de cada
            cliente, garantindo que você tenha o suporte necessário para
            impulsionar o seu negócio. Confira abaixo alguns dos serviços que
            oferecemos:{" "}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="block rounded-xl border border-fuchsia-500 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-fuchsia-800/75 dark:hover:shadow-fuchsia-700/75">
            <Cog className="text-fuchsia-900 dark:text-fuchsia-500" />
            <h2 className="mt-4 text-xl font-bold text-fuchsia-950 dark:text-fuchsia-100">
              Desenvolvimento Web
            </h2>

            <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              Criamos websites e aplicações web que são rápidos, seguros e
              escaláveis. Utilizamos tecnologias de ponta para garantir que
              nossos projetos estejam sempre à frente das tendências.
            </p>
          </div>

          <div className="block rounded-xl border border-fuchsia-500 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-fuchsia-800/75 dark:hover:shadow-fuchsia-700/75">
            <Sparkles className="text-fuchsia-900 dark:text-fuchsia-500" />
            <h2 className="mt-4 text-xl font-bold text-fuchsia-950 dark:text-fuchsia-100">
              Design Responsivo
            </h2>

            <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              Nossos designs são pensados para oferecer a melhor experiência de
              usuário em qualquer dispositivo, seja desktop, tablet ou
              smartphone.
            </p>
          </div>

          <div className="block rounded-xl border border-fuchsia-500 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-fuchsia-800/75 dark:hover:shadow-fuchsia-700/75">
            <ShoppingBasket className="text-fuchsia-900 dark:text-fuchsia-500" />
            <h2 className="mt-4 text-xl font-bold text-fuchsia-950 dark:text-fuchsia-100">
              E-commerce
            </h2>

            <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              Desenvolvemos soluções de e-commerce personalizadas para atender
              às necessidades do seu negócio, integrando funcionalidades que
              facilitam a gestão e aumentam as vendas.
            </p>
          </div>

          <div className="block rounded-xl border border-fuchsia-500 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-fuchsia-800/75 dark:hover:shadow-fuchsia-700/75">
            <DraftingCompass className="text-fuchsia-900 dark:text-fuchsia-500" />
            <h2 className="mt-4 text-xl font-bold text-fuchsia-950 dark:text-fuchsia-100">
              Desenvolvimento de Aplicativos
            </h2>

            <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              Desenvolvemos aplicativos web progressivos (PWAs) e outras
              soluções interativas que ampliam a presença digital da sua
              empresa.
            </p>
          </div>

          <div className="block rounded-xl border border-fuchsia-500 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-fuchsia-800/75 dark:hover:shadow-fuchsia-700/75">
            <HeartHandshake className="text-fuchsia-900 dark:text-fuchsia-500" />
            <h2 className="mt-4 text-xl font-bold text-fuchsia-950 dark:text-fuchsia-100">
              SEO e Marketing Digital
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              Oferecemos serviços de otimização para motores de busca (SEO) e
              estratégias de marketing digital para aumentar a visibilidade e
              atrair mais clientes.
            </p>
          </div>

          <div className="block rounded-xl border border-fuchsia-500 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-fuchsia-800/75 dark:hover:shadow-fuchsia-700/75">
            <WandSparkles className="text-fuchsia-900 dark:text-fuchsia-500" />
            <h2 className="mt-4 text-xl font-bold text-fuchsia-950 dark:text-fuchsia-100">
              Design gráfico e Web design
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
              Criamos identidades visuais e designs únicos que refletem a
              personalidade da sua marca e se destacam no mercado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

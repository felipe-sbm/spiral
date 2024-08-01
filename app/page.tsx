import Image from "next/image";
import { Triangle, Zap, Gem } from "lucide-react";

export default function Page() {
  return (
    <div className="lg:grid grid-cols-2 gap-24 sm:mt-8 md:mt-12 lg:mt-24 lg:mb-32">
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
            A Spiral irá te ajudar em desenvolver seus planos e impulsionar sua
            carreira ou empresa. Com desenvolvimeto de Websites, sistemas,
            API's, aplicativos. Nossa startup é focada em compromisso com o
            cliente, entregando no prazo e com qualidade.
          </p>
          <strong className="font-semibold">
            Venha fazer parte dessa jornada conosco!
          </strong>
        </div>

        {/* Medalhas */}
        <div className="mt-2 space-x-2">
        <span className="inline-flex items-center justify-center rounded-full border dark:border-zinc-50 px-2.5 py-0.5 zinc-50">
          <Triangle className="-ms-1 me-1.5 h-3 w-3 fill-zinc-950 dark:fill-zinc-50"/>
          <p className="whitespace-nowrap text-sm">Vercel</p>
        </span>
        <span className="inline-flex items-center justify-center rounded-full border border-amber-500 px-2.5 py-0.5 text-amber-700">
        <Zap className="-ms-1 me-1.5 h-4 w-4" />
        <p className="whitespace-nowrap text-sm">Vite</p>
        </span>
        <span className="inline-flex items-center justify-center rounded-full border border-red-500 px-2.5 py-0.5 text-red-700">
          <Gem className="-ms-1 me-1.5 h-4 w-4" />
          <p className="whitespace-nowrap text-sm">Rails</p>
        </span>
        </div>
      </div>
    </div>
  );
}

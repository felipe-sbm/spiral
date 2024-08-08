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
      </div>
    </div>
  );
}

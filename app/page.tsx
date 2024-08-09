import Image from "next/image";
import { Triangle, Zap, Gem } from "lucide-react";

export default function Page() {
  return (
    <div className="antialasing">
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
        <div className="justify-right static">
          <Image
            className="justify-right shadow-xl rounded-lg"
            src="/production.png"
            alt="Imagem para fixar outras imagens em cima"
            width={450}
            height={300}
          />
        </div>
      </div>
      <div className="lg:grid grid-cols-2 gap-8 lg:mb-32">
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
    </div>
  );
}

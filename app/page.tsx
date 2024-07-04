import Image from "next/image";
import { Shell } from "lucide-react";

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
        <div>
          <h1 className="leading-relaxed font-medium text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 👋🏼
          </h1>
          <p className="leading-relaxed font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            natus, et illum facere quas, molestias accusantium itaque
            reprehenderit nobis eum repellat maiores obcaecati pariatur. Sit ex
            eveniet laudantium praesentium reiciendis.
            <a
              href="/jp-curriculo.pdf"
              className="mt-2 flex hover:opacity-75"
              download
            >
              <Shell className="mr-2 mb-9" /> This is spiral.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

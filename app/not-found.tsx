import Image from "next/image";

export default function NotFound() {
  return (
    <div className="grid place-content-center px-4">
      <div className="text-center">
        <Image
          src="/unDrawn-404.svg"
          alt="Desenho estilo unDrawn com erro 404"
          width={500}
          height={500}
        />

        <div className="leading-relaxed text-zinc-700 dark:text-zinc-200">
          <h1 className="mt-8 font-medium text-3xl text-fuchsia-950 dark:text-fuchsia-300">
            Opss... página não encontrada!
          </h1>
          <p className="mt-4 font-light">
            Não foi possível acessar esta página.
          </p>
        </div>
      </div>
    </div>
  );
}

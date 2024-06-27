import Image from "next/image";

export default function NotFound() {
  return (
    <section className="mx-64">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Página não enncontrada :c
      </h1>
      <Image
        src="/unDrawn-404.svg"
        alt="Desenho estilo unDrawn, com erro de número 404."
        width={640}
        height={640}
      />
      <p className="mb-4">A página que você está procurando não existe.</p>
    </section>
  );
}

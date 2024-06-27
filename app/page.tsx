import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <div className="my-8">
        <Image
          src="/unDrawn.svg"
          alt="Desenho estilo unDrawn, com pessoas segurando sacolas de compra."
          width={640}
          height={640}
        />
      </div>
    </section>
  );
}

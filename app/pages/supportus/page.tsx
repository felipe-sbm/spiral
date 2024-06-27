import Image from "next/image";

export default function SupportUs() {
  return (
    <section>
      <div className="my-8">
        <Image
          src="/unDrawn-home.svg"
          alt="Desenho estilo unDrawn, com mulher usando computador."
          width={420}
          height={420}
        />
        <h1 className="text-white text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint debitis
          itaque voluptate, eius dolorum odio facilis. Sit dignissimos officiis
          ad corrupti sapiente vitae natus facilis. Quia dolorem maxime repellat
          pariatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Similique pariatur dignissimos, fugiat molestias libero expedita hic,
          sequi eius ipsam laborum cum ducimus provident natus facere sit rem
          debitis magni animi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Placeat laborum voluptas aliquam labore ea excepturi
          recusandae, animi consequuntur quam similique, nemo tenetur aut
          deleniti vero repellat eum nesciunt repudiandae adipisci.
        </h1>
      </div>
    </section>
  );
}

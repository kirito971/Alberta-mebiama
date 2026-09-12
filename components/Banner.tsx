import Image from "next/image";

export default function Banner() {
  return (
    <div className="banner">
      <Image
        src="/images/composite.jpg"
        alt="Illustration réunissant tous les personnages incarnés par Alberta Mebiama : un jeune garçon, une fillette, une fée, un panda, une conductrice, une présentatrice radio et une hôtesse d'aéroport."
        width={1200}
        height={896}
        sizes="(max-width: 1080px) 100vw, 1080px"
        priority
      />
      <p className="cap">Une voix, plusieurs personnages</p>
    </div>
  );
}

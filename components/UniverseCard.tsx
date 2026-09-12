import Image from "next/image";
import Link from "next/link";

type UniverseData = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
  highlighted: boolean;
  fade: "top" | "bottom";
};

export default function UniverseCard({ data }: { data: UniverseData }) {
  return (
    <article
      className={[
        "universe-card",
        data.highlighted ? "is-highlighted" : "",
        `fade-${data.fade}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="universe-visual">
        <div className="universe-thumb" aria-hidden="true" />
        <div className="universe-figure">
          <Image src={data.image} alt={data.imageAlt} fill sizes="240px" />
        </div>
      </div>
      <div className="universe-body">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <Link
          href={`/repertoire?univers=${encodeURIComponent(data.tag)}`}
          className="universe-arrow"
          aria-label={`Voir le répertoire — ${data.title}`}
        >
          ↗
        </Link>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Banner from "@/components/Banner";
import { CoverflowCarousel } from "@/components/CoverflowCarousel";
import { demos } from "@/lib/repertoire";

export const metadata: Metadata = {
  title: "Répertoire",
  description:
    "Le répertoire complet d'Alberta Mebiama : six démos de doublage, animation, publicité et voix institutionnelle, en français.",
};

type Tag = (typeof demos)[number]["tag"];

export default async function RepertoirePage({
  searchParams,
}: {
  searchParams: Promise<{ univers?: string }>;
}) {
  const params = await searchParams;
  const requestedTag = params.univers as Tag | undefined;
  const initialIndex = Math.max(
    demos.findIndex((demo) => demo.tag === requestedTag),
    0
  );

  const slides = demos.map((demo) => ({
    src: demo.image,
    alt: demo.imageAlt,
    title: demo.title,
    subtitle: demo.category,
    description: demo.description,
    audio: demo.audio,
  }));

  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <h2>Répertoire</h2>
          <p>
            Les six démos complètes. Fais glisser, utilise les flèches ou les
            touches ← → pour naviguer — la bannière ci-dessous réunit tous les
            personnages incarnés, une seule voix, plusieurs univers.
          </p>
        </div>

        <Banner />

        <div style={{ marginTop: 44 }}>
          <CoverflowCarousel slides={slides} initialIndex={initialIndex} />
        </div>
      </div>
    </section>
  );
}

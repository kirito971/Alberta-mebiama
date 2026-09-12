import Image from "next/image";
import Link from "next/link";
import HeroTagline from "@/components/HeroTagline";
import Waveform from "@/components/Waveform";
import Ticker from "@/components/Ticker";
import UniverseCard from "@/components/UniverseCard";
import Testimonial from "@/components/Testimonial";
import PlasmaRing from "@/components/PlasmaRing";
import {
  heroLines,
  heroStats,
  skillTicker,
  universes,
  trustStats,
  testimonial,
} from "@/lib/repertoire";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-portrait-wrap">
            <div className="hero-portrait">
              <Image
                src="/images/portrait.png"
                alt="Portrait d'Alberta Mebiama"
                fill
                sizes="(max-width: 760px) 280px, 340px"
                priority
              />
            </div>
          </div>
          <div className="hero-copy">
            <div className="eyebrow-wave">
              <Waveform />
            </div>
            <h1>Alberta Mebiama</h1>
            <p className="hero-role">Comédienne de doublage &amp; voix off</p>
            <HeroTagline lines={heroLines} />
            <p className="lede">
              Comédienne de doublage et voix off, en français et en anglais.
              Trois extraits pour donner le ton : une voix d&rsquo;enfant
              espiègle, un conte animé à plusieurs personnages, une publicité
              pleine d&rsquo;énergie. Le répertoire complet — six univers,
              deux langues — se trouve juste à côté.
            </p>
            <div className="hero-ctas">
              <Link className="btn" href="/repertoire">
                Voir le répertoire →
              </Link>
              <Link className="btn btn-ghost" href="#contact">
                Me contacter
              </Link>
            </div>
            <div className="hero-stats">
              {heroStats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="value">{stat.value}</span>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <Ticker items={skillTicker} />
      </div>

      <section className="universes-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Ce que je double</h2>
            <p>Trois univers, une seule voix — adaptée à chaque registre.</p>
          </div>
          <div className="universes-grid">
            {universes.map((u) => (
              <UniverseCard key={u.id} data={u} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap trust-grid">
          <div>
            <h2>Pourquoi me choisir</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Un registre naturel, une direction artistique à l&rsquo;écoute,
              et une voix capable de passer d&rsquo;un enfant espiègle à une
              annonce institutionnelle sans perdre en justesse.
            </p>
          </div>
          <div className="trust-visual">
            <div className="plasma-orb">
              <PlasmaRing
                background="transparent"
                scale={22}
                density={110}
                speed={70}
                style={{ minWidth: 0, minHeight: 0 }}
              />
            </div>
            <div className="trust-stats">
              {trustStats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <span className="value">{stat.value}</span>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="wrap">
          <Testimonial data={testimonial} />
        </div>
      </section>
    </>
  );
}

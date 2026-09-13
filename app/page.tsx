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
  skillsDetail,
  trustStats,
  trustBenefits,
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
              Comédienne de doublage professionnel : 5 ans d&rsquo;expérience,
              une dizaine d&rsquo;univers vocaux (enfance, adultes, seniors,
              institutionnel, fiction, pub, docu, animaux) et plus de 20 voix
              différentes. Trois extraits pour donner le ton : une voix
              d&rsquo;enfant espiègle, un conte animé à plusieurs personnages,
              une publicité pleine d&rsquo;énergie. Le répertoire complet —
              sept à dix univers, deux langues — se trouve juste à côté.
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
          <ul className="skills-detail-grid">
            {skillsDetail.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap trust-grid">
          <div>
            <h2>Pourquoi me choisir</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Comédienne de doublage professionnel depuis 5 ans, je maîtrise
              une dizaine d&rsquo;univers vocaux : enfants et ados, jeunes
              adultes, adultes, seniors, voix institutionnelles, fiction
              (séries, animation, jeux), publicité, documentaire, ainsi que
              des voix d&rsquo;animaux et de créatures, et plusieurs accents
              africains et internationaux.
            </p>
            <p className="trust-lead-in">Concrètement, tu gagnes :</p>
            <ul className="trust-benefits">
              {trustBenefits.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> : {item.text}
                </li>
              ))}
            </ul>
            <p className="lede">
              Si ton projet a besoin de polyvalence, de fiabilité et
              d&rsquo;une vraie palette de jeux, je suis la voix qu&rsquo;il te
              faut.
            </p>
          </div>
          <div className="trust-visual">
            <div className="plasma-orb">
              <PlasmaRing
                background="transparent"
                glow={false}
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

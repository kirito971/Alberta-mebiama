"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/repertoire", label: "Répertoire" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Alberta Mebiama</span>
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="nav-links">
            {links.map((link) => {
              const isPage = link.href === pathname;
              const isHash = link.href.startsWith("#");
              return (
                <li key={link.href}>
                  {isHash ? (
                    // next/link doesn't reliably scroll to a same-page hash
                    // (its scroll handling is tuned for page navigation, not
                    // in-page anchors) — a plain <a> lets the browser do it.
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link
                      href={link.href}
                      aria-current={isPage ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

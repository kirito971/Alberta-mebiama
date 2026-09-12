import type { Metadata } from "next";
import { Bevan, Vollkorn, Schibsted_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import CinematicFooter from "@/components/CinematicFooter";
import AudioCoordinator from "@/components/AudioCoordinator";
import "./globals.css";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://albertamebiama.example"),
  title: {
    default: "Alberta Mebiama — Comédienne de doublage et voix off",
    template: "%s — Alberta Mebiama",
  },
  description:
    "Alberta Mebiama, comédienne de doublage et voix off en français et en anglais. Doublage jeunesse, animation, publicité et annonces institutionnelles.",
  openGraph: {
    title: "Alberta Mebiama — Comédienne de doublage et voix off",
    description:
      "Doublage, animation et voix off en français et en anglais — répertoire complet et démos à écouter.",
    images: ["/images/composite.jpg"],
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bevan.variable} ${vollkorn.variable} ${schibsted.variable}`}>
      <body>
        <AudioCoordinator />
        <Header />
        <main>{children}</main>
        <CinematicFooter />
      </body>
    </html>
  );
}

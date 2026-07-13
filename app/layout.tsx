import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/ui/Preloader";
import FloatingNav from "@/components/nav/FloatingNav";
import ScrollProgress from "@/components/nav/ScrollProgress";

const clash = localFont({
  src: "../public/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  weight: "200 700",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Disha Shaw — Founder & Creative Director, Bornfree Fashions",
  description:
    "The online home of Disha Shaw, founder and creative director of Bornfree Fashions — men's bottomwear made in Kolkata, built on the philosophy of Freedom of Body.",
  openGraph: {
    title: "Disha Shaw — Founder & Creative Director",
    description:
      "Twenty years of craft, one belief: Freedom of Body. The portfolio of the founder behind Bornfree Fashions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clash.variable} ${cormorant.variable}`}>
      <body className="grain">
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[400] focus:bg-ink focus:text-ivory focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <LenisProvider>
          <Preloader />
          <ScrollProgress />
          <FloatingNav />
          <Cursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

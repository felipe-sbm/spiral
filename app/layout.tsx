import "./global.css";
import Head from "next/head";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { Reem_Kufi_Fun } from "next/font/google";

const inter = Reem_Kufi_Fun({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Spiral SBM",
    template: "%s | Sendo espiral do jeito certo.",
  },
  description: "Site da Spiral.",
  openGraph: {
    title: "Spiral",
    description: "Site da Spiral.",
    url: baseUrl,
    siteName: "Spiral",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={cx(
        "antialiased text-white bg-black scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-zinc-900 scrollbar-track-zinc-100",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <Head>
        <link rel="shortcut icon" href="./public/favicon.ico" />
      </Head>
      <body className="flex antialiased">
        <main className="flex-auto min-w-0 flex-col px-2 md:px-0">
          <div className={inter.className}>
            <Navbar />
            <div className="mx-auto py-10">{children}</div>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </main>
      </body>
    </html>
  );
}

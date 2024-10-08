import type { Metadata } from "next";
import "./globals.css";

import Komet from "next/font/local";
import AbrilTitling from "next/font/local";

//const inter = Inter({ subsets: ["latin"] });

const abrilTitling = AbrilTitling({
  src: './fonts/abriltitling.ttf',
  display: 'swap',
  variable: '--font-abril-titling',
})

const komet = Komet({
  src: [
    {
      path: './fonts/komet/fonnts.com-Komet_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/komet/fonnts.com-Komet_Regular_Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/komet/fonnts.com-Komet_Bold.otf',
      weight: '600',
      style: 'bold',
    },
    {
      path: './fonts/komet/fonnts.com-Komet_Medium.otf',
      weight: '500',
      style: 'medium',
    }
  ],
  display: 'swap',
  variable: '--font-komet',
})

export const metadata: Metadata = {
  title: "Jonah Bard",
  description: "developer + designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${abrilTitling.variable} ${komet.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "JK Renhold — Profesjonelt renhold i hele Norge",
  description:
    "Finn din lokale renholdsleverandør. Vaskehjelp, flyttevask og kontorrenhold fra sertifiserte partnere. Gratis tilbud.",
  keywords: [
    "renhold",
    "vaskehjelp",
    "flyttevask",
    "kontorrenhold",
    "rengjøring",
    "Norge",
  ],
  openGraph: {
    title: "JK Renhold — Profesjonelt renhold i hele Norge",
    description:
      "Lokale, sertifiserte renholdere. Gratis og uforpliktende tilbud.",
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

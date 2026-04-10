import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JK Renhold | Profesjonelt renhold i hele Norge",
  description:
    "Finn din lokale renholdsleverandør. Vaskehjelp, flyttevask og kontorrenhold fra sertifiserte partnere med kvalitetsgaranti. Gratis og uforpliktende tilbud.",
  keywords: [
    "renhold",
    "vaskehjelp",
    "flyttevask",
    "kontorrenhold",
    "rengjøring",
    "Norge",
  ],
  openGraph: {
    title: "JK Renhold | Profesjonelt renhold i hele Norge",
    description:
      "Finn din lokale renholdsleverandør. Gratis og uforpliktende tilbud på vaskehjelp, flyttevask og kontorrenhold.",
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
      className={`${lexend.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

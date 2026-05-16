import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Siddhant Shukla | Cinematographer & Photographer",
  description: "Portfolio of Siddhant Shukla - Cinematographer, videographer, and photographer based in India. Specializing in wedding films, brand commercials, and narrative short films.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${dmMono.variable} antialiased bg-[#0a0a0a] text-[#e8e4dc]`}>
        {children}
      </body>
    </html>
  );
}

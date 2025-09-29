import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "OWN Lab — Shariah-Compliant RWA Tokenization",
  description:
    "End-to-end platform to issue, manage, and trade tokenized real-world assets with Shariah governance and institutional controls.",
  metadataBase: new URL("https://own-lab.example"),
  openGraph: {
    title: "OWN Lab — Shariah-Compliant RWA Tokenization",
    description:
      "Issue, manage, and trade tokenized assets with Shariah governance and institutional controls.",
    type: "website",
    url: "https://own-lab.example",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}> 
        {children}
      </body>
    </html>
  );
}

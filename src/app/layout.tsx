import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sndregenics.com"),
  title: {
    default:
      "SND Regenics - Revolutionary Biomedical Research & 3D Bioprinting Technology",
    template: "%s | SND Regenics",
  },
  description:
    "Leading biomedical R&D firm pioneering hybrid 3D bioprinting and electrospinning technology for regenerative medicine, neural tissue engineering, and personalized healthcare solutions.",
  keywords: [
    "biomedical research",
    "3D bioprinting",
    "electrospinning",
    "regenerative medicine",
    "neural tissue engineering",
    "tissue scaffolds",
    "drug testing",
    "organogenesis",
    "bioinformatics",
    "machine learning healthcare",
  ],
  authors: [{ name: "SND Regenics" }],
  creator: "SND Regenics",
  publisher: "SND Regenics",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "SND Regenics",
    title: "SND Regenics - Pioneering Regenerative Medicine Through Innovation",
    description:
      "Discover cutting-edge hybrid bioprinting technology that combines 3D bioprinting and electrospinning to revolutionize drug testing, organogenesis, and regenerative medicine.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SND Regenics - Biomedical Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SND Regenics - Pioneering Regenerative Medicine Through Innovation",
    description:
      "Discover cutting-edge hybrid bioprinting technology that combines 3D bioprinting and electrospinning to revolutionize drug testing, organogenesis, and regenerative medicine.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

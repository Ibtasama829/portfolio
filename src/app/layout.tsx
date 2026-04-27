import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibtasam Ali — Creative Developer & Designer",
  description:
    "Portfolio of Ibtasam Ali — a creative developer and designer specializing in frontend development, Linux, DevOps, and graphic design.",
  keywords: ["Ibtasam Ali", "developer", "designer", "portfolio", "frontend", "DevOps", "Linux", "graphic design"],
  authors: [{ name: "Ibtasam Ali" }],
  openGraph: {
    title: "Ibtasam Ali — Creative Developer & Designer",
    description: "Portfolio of Ibtasam Ali — creative developer and designer.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import SiteLoader from './components/SiteLoader';

export const metadata: Metadata = {
  title: "Onewave - Multi-Chain Multi-Utility Platform",
  description: "Cutting-ceiling multi-can, multi-utility cryptocurrency platform designed to provide users with a comprehensive suite of blockchain-based tools and services.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: 'var(--font-gilmer)' }}>
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}

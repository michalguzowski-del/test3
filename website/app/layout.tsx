import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Technologies — Data Management Platform",
  description: "Cloud Technologies to największa polska platforma zarządzania danymi (DMP). Dostarczamy precyzyjne segmenty odbiorców dla marketerów i partnerów technologicznych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

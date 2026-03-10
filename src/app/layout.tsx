import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Factory Stories by WorldFirst — Inside China's Source Factories",
  description: "A documentary series by WorldFirst taking you behind the gates of China's real source factories. No middlemen. No showrooms. Just the raw truth of how things are made.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

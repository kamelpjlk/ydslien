import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YDSLien",
  description: "Next.js app with Tailwind CSS, Framer Motion, and Lucide Icons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

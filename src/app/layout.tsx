import type { Metadata } from "next";
import { Quicksand } from 'next/font/google';
import "./globals.css";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: "Mustafa Alsheikh",
  description: "Portfolio",
  icons: {
    icon: "/logo.png",
  },
};

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className}`} >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Updated metadata engine configuration
export const metadata: Metadata = {
  title: "Villa Interior Design & Manufacturing | Ideal Factory",
  description: "Kitchens, closets, doors, and premium uPVC windows designed, manufactured, and installed by one trusted Emirati factory.",
  icons: {
    icon: "/Logo_02.png", // Maps the teal logo from your public folder directly onto the browser favicon array
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        className={`
          ${inter.variable}
          ${playfair.variable}
          antialiased
          bg-[#0A0909]
        `}
      >
        {children}
      </body>
    </html>
  );
}
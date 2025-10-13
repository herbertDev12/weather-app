import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const dMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wheather Now | See the Sky. Know the Day",
  description: "Discover the sky around you. Weather Now brings real-time forecasts that look as good as they feel.",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dMSans.variable} ${bricolageGrotesque.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

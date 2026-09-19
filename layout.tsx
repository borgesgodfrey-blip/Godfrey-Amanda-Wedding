import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Godfrey & Amanda | Goa 2027",
  description: "Godfrey & Amanda's wedding celebration in Goa — 28 January 2027.",
  manifest: "/manifest.webmanifest",
  themeColor: "#74846c"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

import { Rubik } from "next/font/google";

import "./globals.modules.scss";

import { Navbar } from "~/components/ui/navbar/navbar";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {/* @ts-expect-error Async Server Component */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}

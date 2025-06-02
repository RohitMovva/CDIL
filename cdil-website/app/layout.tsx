import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Connect Digital Inclusion Labs",
  description: "Discription",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <div className="sm:mx-5 md:mx-30 lg:mx-40 grid gap-30 mb-30">
          <nav className="flex items-center text-xl justify-between py-4">
            <ul className="flex items-center text-black gap-10">
              <li>
                <Link href="/">
                  <Image
                    src="/CDIL-Logo.png"
                    width={72}
                    height={72}
                    alt="CDIL Logo"
                    className="transition-transform duration-300 hover:-translate-y-1 hover:cursor-pointer"
                  />
                </Link>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link href="/about">About</Link>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link href="/events">Events</Link>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link href="/services">Services</Link>
              </li>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link href="/impact">Impact</Link>
              </li>
            </ul>
            <ul>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Button text="Donate" href="/donate"></Button>
              </li>
            </ul>
          </nav>
          {children}
        </div>
        <footer className="bg-gray-200 p-20">
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}

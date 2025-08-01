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
      <body className="antialiased" suppressHydrationWarning={true}>
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
              {/* <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link href="/services">Services</Link>
              </li> */}
              {/* <li className="transition-transform duration-300 hover:-translate-y-1">
                <Link href="/impact">Impact</Link>
              </li> */}
            </ul>
            <ul>
              <li className="transition-transform duration-300 hover:-translate-y-1">
                <Button text="Events" href="/events"></Button>
              </li>
            </ul>
          </nav>
          {children}
        </div>

        <footer className="bg-gray-900 text-white mt-20">
          <div className="sm:mx-5 md:mx-30 lg:mx-40 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Image
                    src="/CDIL-Logo.png"
                    width={48}
                    height={48}
                    alt="CDIL Logo"
                    className="filter brightness-0 invert"
                  />
                  <span className="ml-3 text-lg font-semibold">Connect Digital Inclusion Labs</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A group of tech-savvy high school students elevating our communities through digital literacy and inclusion.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/connectdigitalinclusionlabs/" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      About Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      Services
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/events" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      Events
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/impact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      Impact
                    </Link>
                  </li> */}
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Our Services</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 text-sm">Digital Literacy Training</li>
                  <li className="text-gray-300 text-sm">Technology Access</li>
                  <li className="text-gray-300 text-sm">Community Outreach</li>
                </ul>
              </div>

              {/* Contact Us */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@cdil.org" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      info@cdil.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  © 2025 Connect Digital Inclusion Labs. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

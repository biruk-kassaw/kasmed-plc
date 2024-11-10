import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Poppins, Raleway } from 'next/font/google';
import Landing from "./ui/landing";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Kasmed",
  description: "Kasmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${poppins.className} ${raleway.className} antialiased index-page`}
      >
        <Landing/>
        {children}
      </body>
    </html>
  );
}

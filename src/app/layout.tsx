import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Form from "./components/Form";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercadolibre search",
  description: "BUscar productos en mercadolibre rapidito",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <div className="bg-yellow-400">
            <nav className="max-w-xl flex gap-4 py-2 mx-auto justify-between px-4 items-center">
              <Link href="/" className="font-bold">
                Home
              </Link>
              <Form />
            </nav>
          </div>
          <main className="max-w-xl mx-auto px-4 flex-grow py-4 flex flex-col justify-center items-center">
            {children}
          </main>
          <footer className="py-4 text-center">
            <p>
              Hecho con ☕ por{" "}
              <a
                href="https://github.com/nedilio"
                target="_blank"
                className="text-blue-500 hover:underline underline-offset-2"
              >
                @nedilio
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}

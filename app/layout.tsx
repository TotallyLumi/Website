import type { Metadata } from "next";
import "./globals.css";

import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "TotallyLumi",
  description: "My Website",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          <div className="px-4 w-full">
            <header className="h-[70vh] bg-cover bg-center flex items-center text-left justify-center">
              <div className="bg-black/65 border border-pink-500 p-8 rounded-lg text-left shadow-xl">
                <Navigation/>
                {children}
              </div>
            </header>
          </div>
        </main>
      </body>
    </html>
  );
}

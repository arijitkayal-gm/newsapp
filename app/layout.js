import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WorldNews",
  description: "Get your daily news fix here with us.",
   icons: {
    icon: "/news.ico", // or "/favicon.ico"
   },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex-1 bg-zinc-800  bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}

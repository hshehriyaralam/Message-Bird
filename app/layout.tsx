import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import SideBar from "@/components/layout/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Message Bird",
  description: "Message Bird - Chat Application",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div  className={`min-h-screen flex `}>
        <SideBar />
        <div className="flex-1 flex flex-col min-h-screen lg:mb-4 mb-20">
        <main className="flex-1 1 overflow-y-auto">  
          {children}
         <Toaster />
         </main>
      </div>
          </div>
      </body>


      {/* <body className="min-h-full flex flex-col">
        {children}
         <Toaster /> 
      </body> */}
    </html>
  );
}

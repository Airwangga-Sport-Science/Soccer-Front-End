import { Inter } from 'next/font/google'
import './globals.css'
import IndexNavbar from "@/components/Navbars/IndexNavbar";
import "../styles/globals.css";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap"
        rel="stylesheet" />
      </head>

        <body className="antialiased bg-slate-100 font-poppins text-black ">
        <IndexNavbar />
          {children}
        </body>
    </html>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Geist, Geist_Mono } from "next/font/google";
import BootstrapClient from './Components/BootstrapClient';
import UsersProvider from './Contexts/UsersContext';
import Navbar from './Components/Navbar';
import CartProvider from './Contexts/CartContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pizzario",
  description: "Order your pizza online, fast and easy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://cdn.boxicons.com/fonts/basic/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UsersProvider>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
          <BootstrapClient />
        </UsersProvider>
      </body>
    </html>
  );
}

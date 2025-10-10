import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../Components/Navbar';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Contact Us",
    description: "Contact Us",
};

export default function ContactLayout({ children }) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
            <Navbar page={"Contact Us"} />
            {children}
        </div>
    );
}

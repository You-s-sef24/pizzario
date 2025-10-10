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
    title: "Privacy and Policy",
    description: "Privacy and Policy",
};

export default function PrivacyLayout({ children }) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
            <Navbar page={"Privacy"} />
            {children}
        </div>
    );
}

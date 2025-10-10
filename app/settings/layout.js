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
    title: "Settings",
    description: "Settings",
};

export default function SettingsLayout({ children }) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
            <Navbar page={"Settings"} />
            {children}
        </div>
    );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const navLink = (href: string, label: string) => (
        <Link
            href={href}
            className={`text-sm font-bold tracking-widest transition-colors relative group ${
                pathname === href ? "text-white" : "text-indigo-100/70 hover:text-white"
            }`}
        >
            {label}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all ${
                pathname === href ? "w-full" : "w-0 group-hover:w-full"
            }`}></span>
        </Link>
    );

    return (
        <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-black tracking-tighter text-white hover:text-indigo-400 transition-all shrink-0">
                    MZ<span className="text-indigo-500">.</span>
                </Link>

                <nav className="hidden md:flex items-center justify-evenly flex-1 max-w-2xl mx-auto">
                    {navLink("/profil", "PROFIL")}
                    {navLink("/stage", "EXPÉRIENCE")}
                    {navLink("/veille", "VEILLE")}
                </nav>

                <div className="shrink-0 flex justify-end md:w-12">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-indigo-100 p-2 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="flex flex-col space-y-6 pt-6 pb-4 border-t border-indigo-900/50 mt-4 md:hidden text-center">
                    {navLink("/profil", "PROFIL")}
                    {navLink("/stage", "EXPÉRIENCE")}
                    {navLink("/veille", "VEILLE")}
                </div>
            )}
        </div>
    );
}
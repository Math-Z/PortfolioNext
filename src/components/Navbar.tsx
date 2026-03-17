"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-black tracking-tighter text-white hover:text-indigo-400 transition-all shrink-0">
                    MZ<span className="text-indigo-500">.</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center justify-evenly flex-1 max-w-2xl mx-auto">
                    <Link href="/profil" className="text-sm font-bold tracking-widest text-indigo-100/70 hover:text-white transition-colors relative group">
                        PROFIL
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/stage" className="text-sm font-bold tracking-widest text-indigo-100/70 hover:text-white transition-colors relative group">
                        EXPÉRIENCE
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#" className="text-sm font-bold tracking-widest text-indigo-100/70 hover:text-white transition-colors relative group">
                        VEILLE
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* Mobile menu button */}
                <div className="shrink-0 flex justify-end md:w-12">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-indigo-100 p-2 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="flex flex-col space-y-6 pt-6 pb-4 border-t border-indigo-900/50 mt-4 md:hidden text-center">
                    <Link href="/profil" className="text-sm font-bold tracking-widest text-indigo-100">
                        PROFIL
                    </Link>
                    <Link href="/stage" className="text-sm font-bold tracking-widest text-indigo-100">
                        EXPÉRIENCE
                    </Link>
                    <Link href="#" className="text-sm font-bold tracking-widest text-indigo-100">
                        VEILLE
                    </Link>
                </div>
            )}
        </div>
    );
}
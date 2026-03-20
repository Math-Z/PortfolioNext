"use client";

import { useEffect } from "react";

export default function ScrollAnimation() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // stop d'observer une fois visible
                }
            });
        }, { threshold: 0.05 });

        document
            .querySelectorAll(".float-on-scroll")
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect(); // cleanup mémoire
    }, []);

    return null;
}
import Link from "next/link";
import {Metadata} from "next";


export const metadata : Metadata = {
    title: "Profil - Mathieu Zavazzo",
};

const skills = [
    { name: "Symfony / PHP", icon: "php.svg" },
    { name: "Python / Django", icon: "python.svg" },
    { name: "Java / Kotlin", icon: "java.svg" },
    { name: "JS / HTML / CSS", icon: "javascript.svg" },
    { name: "SQL / PLSQL", icon: "sql.svg" },
    { name: "Docker", icon: "docker.svg" },
    { name: "Linux", icon: "linux.svg" },
    { name: "IDEs JetBrains", icon: "jetbrains.svg" },
    { name: "Git", icon: "git.svg" },
];

export default function ProfilPage() {
    return (
        <section className="w-full space-y-12">

            {/* Profile */}
            <article className="card float-on-scroll p-8 sm:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

                    <div className="relative shrink-0">
                        <div className="absolute -inset-1 bg-indigo-500 rounded-full blur opacity-30"></div>

                        <img
                            src="/uploads/photo.png"
                            alt="Photo de Mathieu Zavazzo"
                            className="relative w-40 h-40 rounded-full border-2 border-indigo-400/50 object-cover"
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-4">
                        <h1 className="text-4xl font-black text-white tracking-tight">
                            Mathieu Zavazzo
                        </h1>

                        <p className="text-lg text-indigo-100/80 leading-relaxed max-w-3xl">
                            Étudiant en{" "}
                            <span className="text-indigo-400 font-semibold">
                BTS SIO spécialité SLAM
              </span>.
                            Motivé et toujours désireux d'en apprendre davantage, je poursuis
                            mes études dans le domaine qui me passionne, l'informatique et le
                            développement.
                        </p>

                        <div className="pt-4">
                            <a
                                href="/uploads/CV_Mathieu_Zavazzo.pdf"
                                target="_blank"
                                className="btn btn-primary px-8 py-3 rounded-xl shadow-lg shadow-indigo-500/20 transform transition hover:scale-105"
                            >
                                Télécharger mon CV (PDF)
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            {/* Skills + Education */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Skills */}
                <div className="lg:col-span-2 space-y-8">
                    <article className="card float-on-scroll p-8 h-full">

                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-px bg-indigo-500"></span>
                            Compétences (Stack technique)
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-indigo-500/50 transition-colors group"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`/uploads/icons/${skill.icon}`}
                                        className="w-6 h-6"
                                        alt={skill.name}
                                    />

                                    <span className="text-sm font-medium text-indigo-100/70 group-hover:text-white">
                    {skill.name}
                  </span>
                                </div>
                            ))}

                        </div>
                    </article>
                </div>

                {/* Education */}
                <div className="space-y-8 text-center lg:text-left">
                    <article className="card float-on-scroll p-8 h-full">

                        <h2 className="text-2xl font-bold text-white mb-6">
                            Formations
                        </h2>

                        <div className="space-y-4">

                            <div className="border-l-2 border-indigo-500 pl-4">
                                <h3 className="font-bold text-indigo-100">
                                    BTS SIO SLAM
                                </h3>
                                <p className="text-sm text-indigo-300/60">
                                    2024 - 2026
                                </p>
                            </div>

                            <div className="border-l-2 border-slate-700 pl-4 opacity-50">
                                <h3 className="font-bold text-indigo-100">
                                    Baccalauréat
                                </h3>
                                <p className="text-sm text-indigo-300/60">
                                    Obtenu en 2024
                                </p>
                            </div>

                        </div>
                    </article>
                </div>

            </div>

            {/* Projects */}
            <article className="card float-on-scroll p-8">

                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-2xl font-bold text-white">
                        Projets
                    </h2>

                    <Link
                        href="/stage"
                        className="text-sm text-indigo-400 hover:underline"
                    >
                        Voir tout →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all">
                        <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-indigo-400 px-2 py-1 bg-indigo-500/10 rounded uppercase tracking-tighter">
                Projet SLAM
              </span>

                            <span className="text-xs text-slate-500">
                2025
              </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                            Lorem Ipsum
                        </h3>

                        <p className="text-indigo-100/60 text-sm leading-relaxed">
                            Lorem Ipsum
                        </p>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all">
                        <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-indigo-400 px-2 py-1 bg-indigo-500/10 rounded uppercase tracking-tighter">
                Lorem Ipsum
              </span>

                            <span className="text-xs text-slate-500">
                2025
              </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                            Lorem Ipsum
                        </h3>

                        <p className="text-indigo-100/60 text-sm leading-relaxed">
                            Lorem Ipsum
                        </p>
                    </div>

                </div>
            </article>

        </section>
    );
}
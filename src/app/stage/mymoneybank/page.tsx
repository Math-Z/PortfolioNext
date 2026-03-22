
import Link from "next/link";
import { Metadata } from "next";
import FancyboxWrapper from "@/components/FancyboxWrapper";

export const metadata: Metadata = {
    title: "Stage — MyMoneyBank",
};

const techStack = [
    "Java / Spring Boot 3", "Python", "PostgreSQL", "CI/CD GitLab",
    "API REST", "Méthode Agile / Scrum", "IDE JetBrains (IntelliJ, Pycharm)",
    "AWS (DataLake)", "Apache Airflow (Batch processing)",
];

type GalleryImage = { src: string; alt: string }

function Gallery({ images, group }: { images: GalleryImage[]; group: string }) {
    const count = images.length;

    return (
        <div className={`grid gap-4 ${count === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
            {images.map((img, i) => (
                <a
                    key={i}
                    data-fancybox={group}
                    href={img.src}
                    className={count % 2 !== 0 && i === count - 1 ? "col-span-2" : ""}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="rounded-lg border border-white/10 shadow-2xl w-full cursor-zoom-in hover:border-indigo-500/50 transition-all"
                    />
                </a>
            ))}
        </div>
    );
}

export default function MyMoneyBankPage() {
    return (
        <FancyboxWrapper>
            <section className="py-12 space-y-8">

                <Link href="/stage" className="text-sm text-indigo-400 hover:underline">
                    ← Retour aux stages
                </Link>

                <article className="card p-6 space-y-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="/uploads/mymoneybank.png"
                            alt="Logo My Money Bank"
                            className="h-13 w-auto object-contain shrink-0 mt-1 opacity-70"
                        />
                        <div>
        <span className="text-indigo-400 font-mono text-xs uppercase tracking-tighter">
            Mai — Juin 2025
        </span>
                            <p className="text-xs text-slate-500 mb-2">Stage · 7 semaines</p>
                            <h1 className="text-2xl font-bold text-white">My Money Bank</h1>
                            <p className="text-indigo-300 font-medium">
                                Groupe Crédit Commercial de France (CCF)
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
                            Environnement Technique et Compétences
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-indigo-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-slate-400 italic">
                        Dans ce stage, j'ai intégré une équipe DevOps backend afin de contribuer à l'évolution d'APIs REST utilisées en production,
                        principalement en Java. J'ai immédiatement été placé dans une équipe et cela constitue ma première expérience dans une
                        équipe de développement suivant la méthode agile.
                    </p>
                </article>

            </section>
        </FancyboxWrapper>
    );
}

import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expérience",
};

const stages = [
    {
        href: "/stage/us2b",
        date: "Janvier — Février 2026",
        duree: "Stage · 6 semaines",
        entreprise: "Nantes Université / CNRS",
        service: "Unité en Sciences Biologiques et Biotechnologies",
        mission: "Analyse des vulnérabilités et failles des sites web du laboratoire",
        stack: ["Django", "Perl", "PHP", "WordPress", "Apache", "Linux", "MySQL / SQLite"],
        logo: "/uploads/US2B.png",
        invertLogo: true,
    },
    {
        href: "/stage/mymoneybank",
        date: "Mai — Juin 2025",
        duree: "Stage · 7 semaines",
        entreprise: "My Money Bank",
        service: "Groupe Crédit Commercial de France",
        mission: "Développement orienté backend et DevOps sous l'équipe DOM après vente",
        stack: ["PostgreSQL", "Java / Spring Boot 3", "Python", "IDE JetBrains (IntelliJ, PyCharm)", "CI/CD", "Méthode agile"],
        logo: "/uploads/mymoneybank.png",
        invertLogo: false,
    },
];

export default function StagePage() {
    return (
        <section className="space-y-8">
            <h1 className="text-4xl font-black text-white">Expérience</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stages.map((stage) => (
                    <Link
                        key={stage.href}
                        href={stage.href}
                        className="group p-6 space-y-4 border border-white/10 rounded-xl bg-white/8 transition-all hover:border-indigo-500/50"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                                <span className="text-indigo-400 font-mono text-xs uppercase tracking-tighter">
                                    {stage.date}
                                </span>
                                <p className="text-xs text-slate-500">{stage.duree}</p>
                            </div>
                            {stage.logo && (
                                <img
                                    src={stage.logo}
                                    alt={`Logo ${stage.entreprise}`}
                                    className={`h-10 w-auto object-contain shrink-0 ${stage.invertLogo ? "invert" : ""}`}
                                />
                            )}
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                {stage.entreprise}
                            </h2>
                            {stage.service && (
                                <p className="text-sm text-indigo-300/70">{stage.service}</p>
                            )}
                            <p className="text-sm text-slate-400 italic mt-1">{stage.mission}</p>
                        </div>

                        {stage.stack.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {stage.stack.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-indigo-200">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="text-indigo-500 text-sm group-hover:translate-x-1 transition-transform">
                            Voir le détail →
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
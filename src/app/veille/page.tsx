import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Veille Technologique",
};

const sources = [
    {
        categorie: "Référence",
        titre: "OWASP Top 10 : 2025 — A05 Injection",
        auteur: "OWASP Foundation",
        date: "Janvier 2026",
        langue: "EN",
        url: "https://owasp.org/Top10/2025/A05_2025-Injection/",
        resume: "L'injection SQL passe de la 3e à la 5e place du classement 2025, mais reste l'une des failles les plus exploitées avec plus de 14 000 CVEs recensés. L'OWASP recommande l'usage de requêtes paramétrées, la validation stricte des entrées, et l'intégration d'outils SAST/DAST dans les pipelines CI/CD.",
        tags: ["Injection SQL", "OWASP", "CVE", "CI/CD"],
    },
    {
        categorie: "Guide officiel",
        titre: "Se protéger des fuites de données",
        auteur: "ANSSI — MesServicesCyber",
        date: "2024",
        langue: "FR",
        url: "https://messervices.cyber.gouv.fr/guides/se-proteger-des-fuites-de-donnees",
        resume: "Guide pratique de l'ANSSI destiné aux organisations pour prévenir les fuites de données : chiffrement, contrôle des accès, politique de mots de passe, gestion des habilitations et conduite à tenir en cas d'incident. Directement applicable aux bonnes pratiques de protection des BDD.",
        tags: ["ANSSI", "Fuite de données", "Chiffrement", "Habilitations"],
    },
    {
        categorie: "Guide officiel",
        titre: "Mise en œuvre sécurisée d'un CMS",
        auteur: "ANSSI — MesServicesCyber",
        date: "2025",
        langue: "FR",
        url: "https://messervices.cyber.gouv.fr/guides/mise-en-oeuvre-securisee-dun-cms",
        resume: "Recommandations de l'ANSSI pour sécuriser un CMS (WordPress, Drupal…) : mises à jour, gestion des plugins, droits des utilisateurs, protection des formulaires et des accès base de données. En lien direct avec le stage CNRS où WordPress et les vulnérabilités associées étaient en jeu.",
        tags: ["ANSSI", "CMS", "WordPress", "Sécurité BDD"],
    },
    {
        categorie: "Guide officiel",
        titre: "Bases de données relationnelles — Bonnes pratiques de sécurité",
        auteur: "ANSSI — MesServicesCyber",
        date: "2025",
        langue: "FR",
        url: "https://messervices.cyber.gouv.fr/guides/bases-de-donnees-relationnelles",
        resume: "Guide de l'ANSSI dédié à la sécurisation des SGBD relationnels : principe du moindre privilège, séparation des comptes applicatifs, chiffrement des données sensibles, journalisation et audit. Ce guide synthétise les pratiques que j'ai appliquées en stage (MySQL, PostgreSQL).",
        tags: ["ANSSI", "SGBD", "Moindre privilège", "PostgreSQL", "MySQL"],
    },
    {
        categorie: "Menace émergente",
        titre: "Skeleton Key : quand les chatbots IA tournent mal",
        auteur: "IBM Think — fr",
        date: "2025",
        langue: "FR",
        url: "https://www.ibm.com/fr-fr/think/insights/llm-skeleton-key",
        resume: "L'attaque Skeleton Key contourne les garde-fous des LLMs en les persuadant progressivement d'ignorer leurs restrictions. Elle illustre comment les IA peuvent être détournées pour extraire des informations sensibles ou produire du contenu malveillant, posant la question de la sécurité des systèmes qui s'appuient sur des modèles de langage pour accéder à des données.",
        tags: ["LLM", "Jailbreak", "Prompt injection", "IA"],
    },
    {
        categorie: "Menace émergente",
        titre: "Beyond Data: The Rising Need for AI Security",
        auteur: "Sarath Chandra Vidya Sagar Machupalli — IBM",
        date: "Novembre 2025",
        langue: "EN",
        url: "https://hackernoon.com/beyond-data-the-rising-need-for-ai-security",
        resume: "La sécurité des données et la sécurité des systèmes IA sont désormais indissociables. L'article introduit de nouvelles menaces : empoisonnement de données d'entraînement, model inversion, prompt injection. Il propose un cadre de défense en profondeur couvrant l'ensemble du cycle de vie ML, du RBAC à la surveillance continue.",
        tags: ["IA", "Model Poisoning", "RBAC", "Defense in depth"],
    },
    {
        categorie: "Cas concret",
        titre: "Piratage du CROUS — 774 000 étudiants touchés",
        auteur: "IT-Connect / France Inter",
        date: "Mars 2026",
        langue: "FR",
        url: "https://www.it-connect.fr/piratage-du-crous-les-donnees-de-774-000-etudiants-dans-la-nature-mars-2026/",
        resume: "La plateforme mesrdv.etudiant.gouv.fr a été compromise, exposant les données de 774 000 étudiants sur une décennie. 139 000 d'entre eux ont vu leurs pièces jointes (passeports, cartes d'identité) exfiltrées. L'incident illustre les conséquences d'une mauvaise protection des bases de données publiques et d'un manque de segmentation des accès.",
        tags: ["Fuite de données", "Service public", "RGPD", "Exfiltration"],
    },
    {
        titre: "SQL Injection in ORMs 2025: Why Modern Frameworks Still Aren't Safe",
        auteur: "Propel / Aikido Security",
        date: "Août 2025",
        langue: "EN",
        url: "https://www.propelcode.ai/blog/sql-injection-orm-vulnerabilities-modern-frameworks-2025",
        resume: "Malgré la promesse des ORM d'éliminer les injections SQL, 18% des applications les utilisant restent vulnérables. Des CVEs critiques ont été identifiés sur Django (CVE-2024-42005), Rails ActiveRecord et Hibernate. Le faux sentiment de sécurité induit par les ORM est le principal facteur de risque.",
        tags: ["ORM", "Django", "CVE-2024-42005", "Injection SQL"],
    },
];

const categorieColor: Record<string, string> = {
    "Référence":        "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    "Guide officiel":   "bg-teal-500/10 text-teal-300 border-teal-500/20",
    "Menace émergente": "bg-amber-500/10 text-amber-300 border-amber-500/20",
    "Cas concret":      "bg-red-500/10 text-red-300 border-red-500/20",
};

const langueColor: Record<string, string> = {
    "EN":    "bg-blue-500/10 text-blue-300 border-blue-500/20",
    "FR":    "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
};

export default function VeillePage() {
    return (
        <section className="py-12 space-y-10">

            <div className="space-y-4">
                <span className="text-indigo-400 font-mono text-xs uppercase tracking-tighter">
                    Veille Technologique — BTS SIO SLAM
                </span>
                <h1 className="text-4xl font-black text-white">
                    Sécurité des bases de données
                </h1>
                <p className="text-indigo-300 font-medium">
                    Et l'émergence des menaces liées à l'intelligence artificielle
                </p>
            </div>

            <article className="card p-6 space-y-4">
                <p className="text-slate-200 leading-relaxed text-sm">
                    La sécurité des bases de données est un enjeu central du développement logiciel moderne.
                    Pendant près de six mois, j'ai suivi l'actualité de ce domaine via des alertes Google,
                    des publications OWASP et des guides officiels de l'ANSSI. Cette veille m'a permis
                    d'identifier trois grandes tendances : la persistance des vulnérabilités classiques
                    (injection SQL, mauvaise configuration), l'émergence de nouvelles surfaces d'attaque
                    liées à l'IA, et des incidents récents qui illustrent les conséquences réelles d'une
                    protection insuffisante, y compris dans des services publics français.
                </p>
                <p className="text-slate-200 leading-relaxed text-sm">
                    Ces observations résonnent directement avec mes expériences, la sécurisation
                    des formulaires et des accès SQL au laboratoire US2B, la gestion des rôles et du principe du moindre
                    privilège avec le projet API Ministage où la gestion des droits
                    d'accès était au cœur de l'architecture.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {[
                        { label: "Sources analysées", val: "8" },
                        { label: "CVEs SQL recensés", val: "14k+" },
                        { label: "Durée de veille", val: "1 an, 6 mois" },
                    ].map(({ label, val }) => (
                        <div key={label} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                            <p className="text-xl font-black text-indigo-400">{val}</p>
                            <p className="text-xs text-slate-500 mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </article>

            <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
                    Axes de veille
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        {
                            titre: "Menaces classiques",
                            desc: "Injection SQL, élévation de privilèges, mauvaise configuration — des vulnérabilités persistantes malgré les outils modernes.",
                        },
                        {
                            titre: "Fuites de données",
                            desc: "Des millions de records exposés chaque année en France, souvent par des bases mal protégées ou des accès non segmentés.",
                        },
                        {
                            titre: "IA & nouvelles menaces",
                            desc: "Skeleton Key, empoisonnement de données d'entraînement, prompt injection — les LLMs comme nouvelle surface d'attaque.",
                        },
                    ].map(({ titre, desc }) => (
                        <div key={titre} className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                            <h3 className="text-sm font-bold text-white">{titre}</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
                    Sources analysées
                </h2>
                <div className="space-y-4">
                    {sources.map((source) => (
                        <article key={source.url} className="card p-5 space-y-3">
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div className="space-y-1">
                                    <a
                                        href={source.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base font-bold text-white hover:text-indigo-400 transition-colors"
                                    >
                                        {source.titre} ↗
                                    </a>
                                    <p className="text-xs text-slate-500">
                                        {source.auteur} · {source.date}
                                    </p>
                                </div>
                                <div className="flex gap-2 shrink-0">
                                    <span className={`px-2 py-0.5 border rounded text-xs font-mono ${categorieColor[source.categorie]}`}>
                                        {source.categorie}
                                    </span>
                                    <span className={`px-2 py-0.5 border rounded text-xs font-mono ${langueColor[source.langue]}`}>
                                        {source.langue}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {source.resume}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {source.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-indigo-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <article className="card p-6 space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
                    Synthèse & perspectives
                </h2>
                <p className="text-slate-200 leading-relaxed text-sm">
                    Cette veille confirme que la sécurité des bases de données reste un domaine en constante
                    évolution. Les vulnérabilités classiques comme l'injection SQL ne disparaissent pas,
                    elles se déplacent vers de nouveaux environnements (ORM, CMS, APIs). Le piratage du CROUS
                    en 2026 illustre que même des services publics récents peuvent négliger des fondamentaux
                    comme la segmentation des accès ou la gestion des pièces jointes sensibles.
                </p>
                <p className="text-slate-200 leading-relaxed text-sm">
                    L'angle IA est particulièrement structurant pour les années à venir : des attaques comme
                    Skeleton Key montrent que les LLMs peuvent être détournés pour contourner des protections,
                    y compris sur des systèmes qui s'appuient sur l'IA pour accéder à des données. Les guides
                    de l'ANSSI restent la référence française pour structurer une réponse concrète à ces menaces.
                </p>
            </article>

        </section>
    );
}
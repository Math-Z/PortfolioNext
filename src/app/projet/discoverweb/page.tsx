import { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import FancyboxWrapper from "@/components/FancyboxWrapper";

export const metadata: Metadata = {
    title: "Projet — Application Web Ministage",
};

const techStack = [
    "PHP", "Symfony", "API Platform",
    "PostgreSQL", "DBeaver", "PHPStorm", "Twig"
];

const roles = [
    { role: "ROLE_ADMIN",          desc: "Accès total à l'application" },
    { role: "ROLE_PROGRAMMATION",  desc: "Gestion des ministages" },
    { role: "ROLE_RESERVATION",    desc: "Gestion des réservations" },
    { role: "ROLE_CONSULTATION",   desc: "Lecture seule" },
];

const features = [
    "Réservation de mini-stages en ligne",
    "Consultation des établissements disponibles",
    "Gestion des réservations par les enseignants",
    "Réservation dans un établissement",
    "Consommation d'une API sécurisée exposant les données",
];

const authFlow = [
    { step: "Authentification via API",     desc: "Envoi des identifiants à l'endpoint /api/login" },
    { step: "Stockage du token en session", desc: "JWT conservé côté serveur dans la session Symfony" },
    { step: "Récupération du rôle",         desc: "Appel à /api/user/{email} pour obtenir le rôle utilisateur" },
    { step: "Redirection dynamique",        desc: "Chargement du template Twig adapté au rôle" },
];

const securityPoints = [
    { label: "Authentification JWT",  desc: "Tokens signés avec expiration configurable" },
    { label: "Gestion des rôles",     desc: "Accès contrôlé par rôle côté front Symfony" },
    { label: "Session sécurisée",     desc: "Token stocké en session serveur, jamais exposé au client" },
    { label: "API protégée",          desc: "Endpoints sécurisés par expressions Symfony / API Platform" },
];

export default function MinistagePage() {
    return (
        <section className="py-12 space-y-8">
            <article className="card p-6 space-y-6">

                <Link href="/experience" className="text-sm text-indigo-400 hover:underline">
                    ← Retour aux projets
                </Link>

                {/* Header */}
                <div>
                    <span className="text-indigo-400 font-mono text-xs uppercase tracking-tighter">
                        Projet BTS SIO SLAM
                    </span>
                    <p className="text-xs text-slate-500 mb-2">Développement en équipe · 2025 — 2026</p>
                    <h1 className="text-2xl font-bold text-white">Application Web Ministage</h1>
                    <p className="text-indigo-300 font-medium">
                        Gestion et réservation de mini-stages inter-établissements
                    </p>
                    <h2 className="text-xl font-bold text-gray-100 italic mt-1">
                        Conception d'une application web sécurisée avec Symfony communicant avec l'API ministage
                    </h2>
                </div>

                {/* Objectif */}
                <p className="text-slate-200 leading-relaxed text-sm">
                    Dans le cadre d'un projet BTS, j'ai participé au développement d'une application
                    permettant aux élèves de réserver des sessions de mini-stages dans leur établissement
                    ou dans un autre, tout en offrant un espace de gestion pour les professeurs et les
                    responsables. Le projet met l'accent sur la sécurité, l'interopérabilité et la
                    simplicité d'utilisation. L'architecture suit les conventions REST et les bonnes
                    pratiques Symfony, avec une convention de nommage stricte sur les branches et
                    pull requests.
                </p>

                {/* Stack */}
                <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
                        Environnement Technique
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-indigo-200">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Fonctionnalités */}
                <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
                        Fonctionnalités principales
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sécurité & Rôles */}
                <div className="space-y-4">
                    <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                        Sécurité & gestion des rôles
                        <br />
                        <span className="text-indigo-400 font-mono text-xs normal-case tracking-normal">
                            JWT · Voters Symfony · RBAC
                        </span>
                    </p>
                    <p className="text-slate-200 leading-relaxed text-sm">
                        Après authentification, l'utilisateur est redirigé vers une interface spécifique
                        selon son rôle. Une vue dynamique est chargée automatiquement en fonction du rôle
                        récupéré depuis l'API. Chaque rôle possède son interface dédiée, rendant
                        l'application évolutive et facilitant l'ajout de nouveaux rôles ou fonctionnalités.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {roles.map(({ role, desc }) => (
                            <div key={role} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                                <span className="px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-xs text-indigo-300 font-mono shrink-0">
                                    {role}
                                </span>
                                <span className="text-xs text-slate-400">{desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fonctionnement technique */}
                <div className="space-y-4">
                    <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                        Fonctionnement technique
                        <br />
                        <span className="text-indigo-400 font-mono text-xs normal-case tracking-normal">
                            Flux d'authentification & redirection
                        </span>
                    </p>
                    <p className="text-slate-200 leading-relaxed text-sm">
                        Le front Symfony agit comme un client de l'API. Après la soumission du formulaire
                        de connexion, le token JWT est stocké en session côté serveur et utilisé pour
                        chaque appel API subséquent.
                    </p>

                    <div className="space-y-2">
                        {authFlow.map(({ step, desc }, i) => (
                            <div key={step} className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                                <span className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {i + 1}
                                </span>
                                <div>
                                    <p className="text-xs font-semibold text-slate-200">{step}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Points de sécurité */}
                <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
                        Sécurité
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {securityPoints.map(({ label, desc }) => (
                            <div key={label} className="p-3 bg-white/5 border border-white/10 rounded-lg space-y-1">
                                <p className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                                    {label}
                                </p>
                                <p className="text-xs text-slate-400 pl-3.5">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <FancyboxWrapper>
                    <Gallery group="login" images={[
                        { src: "/uploads/discoverweb/commit.png",  alt: "Tableau Kanban GitHub du projet" },
                        { src: "/uploads/discoverweb/loginController.png",  alt: "Tableau Kanban GitHub du projet" },
                        { src: "/uploads/discoverweb/loginViewCode.png",  alt: "Tableau Kanban GitHub du projet" },
                        { src: "/uploads/discoverweb/loginView.png",  alt: "Tableau Kanban GitHub du projet" },
                    ]} />
                </FancyboxWrapper>


                <div className="space-y-4">
                    <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                        Travail en mode projet
                        <br />
                        <span className="text-indigo-400 font-mono text-xs normal-case tracking-normal">
                            Méthode Agile / Scrum
                        </span>
                    </p>
                    <p className="text-slate-200 leading-relaxed text-sm">
                        Le projet a été développé suivant la méthode Agile et Scrum
                    </p>

                </div>

                <FancyboxWrapper>
                    <Gallery group="tableau" images={[
                        { src: "/uploads/discoverweb/tableauProjet.png",  alt: "Tableau Kanban GitHub du projet" },
                    ]} />
                </FancyboxWrapper>

            </article>
        </section>
    );
}
import { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import FancyboxWrapper from "@/components/FancyboxWrapper";

export const metadata: Metadata = {
    title: "Projet — API Ministage",
};

const techStack = [
    "PHP", "Symfony", "API Platform",
    "PostgreSQL", "DBeaver", "PHPStorm", "Twig"
];

const roles = [
    { role: "ROLE_ADMIN", desc: "Accès total" },
    { role: "ROLE_PROGRAMMATION", desc: "Gestion des ministages" },
    { role: "ROLE_RESERVATION", desc: "Réservations" },
    { role: "ROLE_CONSULTATION", desc: "Lecture seule" },
];

const endpoints = [
    { method: "GET",    path: "/api/ministages",        desc: "Liste des ministages disponibles" },
    { method: "POST",   path: "/api/ministages",        desc: "Créer un ministage" },
    { method: "PATCH",  path: "/api/ministages/{id}",   desc: "Modifier un ministage" },
    { method: "DELETE", path: "/api/ministages/{id}",   desc: "Supprimer un ministage" },
    { method: "GET",    path: "/api/reservations",      desc: "Liste des réservations" },
    { method: "POST",   path: "/api/reservations",      desc: "Créer une réservation" },
    { method: "GET",    path: "/api/etablissements",    desc: "Liste des établissements" },
    { method: "GET",    path: "/api/eleves",            desc: "Liste des élèves" },
];

const methodColor: Record<string, string> = {
    GET:    "bg-teal-500/10 text-teal-300 border-teal-500/20",
    POST:   "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    PATCH:  "bg-amber-500/10 text-amber-300 border-amber-500/20",
    DELETE: "bg-red-500/10 text-red-300 border-red-500/20",
};

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
                    <h1 className="text-2xl font-bold text-white">API Ministage</h1>
                    <p className="text-indigo-300 font-medium">
                        Gestion et réservation de mini-stages inter-établissements
                    </p>
                    <h2 className="text-xl font-bold text-gray-100 italic mt-1">
                        Conception d'une API REST sécurisée avec Symfony & API Platform
                    </h2>
                </div>

                {/* Contexte */}
                <p className="text-slate-200 leading-relaxed text-sm">
                    Dans le cadre d'un projet BTS, j'ai participé au développement d'une application
                    permettant aux élèves de réserver des sessions de mini-stages dans leur établissement
                    ou dans un autre. Le projet expose une API REST sécurisée consommable par
                    n'importe quel front-end, avec une gestion fine des rôles et des accès.
                    L'architecture suit les conventions REST et les bonnes pratiques Symfony,
                    avec une convention de nommage stricte sur les branches et pull requests.
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

                {/* Architecture */}
                <div className="space-y-4">
                    <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                        Architecture du projet
                        <br />
                        <span className="text-indigo-400 font-mono text-xs normal-case tracking-normal">
                            Entity · Repository · Controller · DataFixtures
                        </span>
                    </p>
                    <p className="text-slate-200 leading-relaxed text-sm">
                        Le projet suit l'architecture MVC de Symfony, avec une séparation claire
                        entre les entités Doctrine, les repositories, et les contrôleurs.
                        Les <span className="text-indigo-300">DataFixtures</span> permettent de peupler
                        la base PostgreSQL avec des données de test cohérentes pour chaque entité.
                        API Platform expose automatiquement les opérations CRUD sécurisées via des annotations
                        directement sur les entités.
                    </p>
                    <pre className="text-xs text-indigo-200/70 font-mono bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto leading-relaxed">
{`src/
├── ApiResource/
├── Controller/
│   ├── RegistrationController.php
│   └── UserController.php
├── DataFixtures/
│   ├── AcademieFixtures.php
│   ├── AppFixtures.php
│   ├── EleveFixtures.php
│   ├── EtablissementFixtures.php
│   ├── FonctionFixtures.php
│   ├── FormationFixtures.php
│   ├── MinistageFixtures.php
│   ├── ProfesseurFixtures.php
│   ├── ProfilFixtures.php
│   ├── ReservationFixtures.php
│   ├── TypeEtabFixtures.php
│   ├── TypeFormationFixtures.php
│   ├── UserFixtures.php
│   └── UtilisateurFixtures.php
├── Entity/
│   ├── Academie.php
│   ├── Eleve.php
│   ├── Etablissement.php
│   ├── Fonction.php
│   ├── Formation.php
│   ├── Ministage.php
│   ├── Professeur.php
│   ├── Profil.php
│   ├── Reservation.php
│   ├── TypeEtab.php
│   ├── TypeFormation.php
│   ├── User.php
│   └── Utilisateur.php
├── Kernel.php
└── Repository/
    ├── AcademieRepository.php
    ├── EleveRepository.php
    ├── EtablissementRepository.php
    ├── FonctionRepository.php
    ├── FormationRepository.php
    ├── MinistageRepository.php
    ├── ProfesseurRepository.php
    ├── ProfilRepository.php
    ├── ReservationRepository.php
    ├── TypeEtabRepository.php
    ├── TypeFormationRepository.php
    ├── UserRepository.php
    └── UtilisateurRepository.php`}
</pre>
                    <pre className="text-xs font-mono bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto leading-relaxed">
{[
    { name: "User", fields: "id, email, roles, password", pk: ["id"] },
    { name: "Utilisateur", fields: "#id, nom, prenom, mail", pk: ["#id"] },
    { name: "Profil", fields: "id, nom, #idUtilisateur", pk: ["id"] },
    { name: "Fonction", fields: "id, nom, #idUtilisateur", pk: ["id"] },
    { name: "Etablissement", fields: "id, rne, nom_etab, telephone, ville, adresse, mail, cp, #idMinistage, #idEleve, #idUtilisateur", pk: ["id"] },
    { name: "Academie", fields: "id, nom, #idEtablissement", pk: ["id"] },
    { name: "TypeEtab", fields: "id, nom, nomcourt, #idEtablissement", pk: ["id"] },
    { name: "Formation", fields: "id, nom, #idMinistage", pk: ["id"] },
    { name: "TypeFormation", fields: "id, nom, nomcourt, #idFormation", pk: ["id"] },
    { name: "Eleve", fields: "id, nom, prenom, classe, date_naiss", pk: ["id"] },
    { name: "Ministage", fields: "id, date_debut, date_fin, nb_place, nb_place_reste, lieu", pk: ["id"] },
    { name: "Professeur", fields: "id, nom, prenom, #idMinistage", pk: ["id"] },
    { name: "Reservation", fields: "id, confirmation, rappel, absence, #idUtilisateur, #idEleve, #idMinistage", pk: ["id"] },
    { name: "Proposer", fields: "#idEtablissement, #idFormation", pk: ["#idEtablissement", "#idFormation"] },
].map(({ name, fields, pk }, i) => (
    <span key={i} className="block">
        <span className="text-indigo-400">{name}</span>
        <span className="text-slate-500"> (</span>
        {fields.split(", ").map((f, j) => (
            <span key={j}>
                {j > 0 && <span className="text-slate-500">, </span>}
                <span className={`${f.startsWith("#") ? "text-amber-400" : "text-slate-200"} ${pk.includes(f) ? "underline" : ""}`}>
                    {f}
                </span>
            </span>
        ))}
        <span className="text-slate-500">)</span>
    </span>
))}
</pre>
                    <FancyboxWrapper>

                        <Gallery group="schema" images={[
                            { src: "/uploads/discoverapi/schema.png", alt: "Schéma de la base de donnée Tucana" },
                        ]} />

                    </FancyboxWrapper>
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
                        Chaque endpoint est protégé par des expressions de sécurité Symfony
                        directement sur les opérations API Platform. Quatre rôles distincts
                        définissent les permissions d'accès en lecture, écriture et suppression.
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

                {/* Endpoints */}
                <div className="space-y-4">
                    <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                        Endpoints principaux
                        <br />
                        <span className="text-indigo-400 font-mono text-xs normal-case tracking-normal">
                            REST · GET · POST · PATCH · DELETE
                        </span>
                    </p>
                    <p className="text-slate-200 leading-relaxed text-sm">
                        L'API respecte les conventions REST standard. Les URLs suivent
                        le pattern <span className="font-mono text-indigo-300">/api/{"{"}ressource{"}"}</span> avec
                        les méthodes HTTP correspondantes. La convention de nommage
                        des branches suit le pattern <span className="font-mono text-indigo-300">Feat_{"{"}Entity{"}"}</span> et
                        les pull requests <span className="font-mono text-indigo-300">Feat_{"{"}Entity{"}"} #{"{"}num_ticket{"}"}</span>.
                    </p>

                    <div className="space-y-2">
                        {endpoints.map(({ method, path, desc }) => (
                            <div key={path + method} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                                <span className={`px-2 py-0.5 border rounded text-xs font-mono font-bold shrink-0 w-16 text-center ${methodColor[method]}`}>
                                    {method}
                                </span>
                                <span className="font-mono text-xs text-indigo-300 shrink-0">{path}</span>
                                <span className="text-xs text-slate-400 hidden sm:block">{desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <FancyboxWrapper>

                <Gallery group="ticket1" images={[
                    { src: "/uploads/discoverapi/tableauProjet.png", alt: "Tableau Kanban GitHub du projet" },
                    { src: "/uploads/discoverapi/ticketProjet.png", alt: "Exemple d'un ticket m'ayant été attribué" },
                    { src: "/uploads/discoverapi/exCode.png", alt: "Exemple de code, de l'entité formation.php" },
                    { src: "/uploads/discoverapi/requeteLogin.png", alt: "Exemple de test via Insomnia, résultat de la requête sur /api/login" },
                ]} />

                </FancyboxWrapper>

            </article>

        </section>
    );
}
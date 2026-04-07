import Link from "next/link";
import { Metadata } from "next";
import FancyboxWrapper from "@/components/FancyboxWrapper";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
    title: "Stage — MyMoneyBank",
};

const techStack = [
    "Java 17 / Spring Boot 3",
    "Maven",
    "PostgreSQL / MyBatis",
    "GitLab CI/CD",
    "Kubernetes",
    "Jira / Agile",
    "Insomnia",
    "Datadog",
    "Scala"
];

export default function MyMoneyBankPage() {
    return (
            <section className="py-12 space-y-8">

                <Link href="/experience" className="text-sm text-indigo-400 hover:underline">
                    ← Retour aux projets
                </Link>

                <article className="card p-6 space-y-6">

                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <img
                            src="/uploads/mymoneybank.png"
                            alt="Logo My Money Bank"
                            className="h-10 w-auto object-contain shrink-0"
                        />
                        <div>
                            <span className="text-indigo-400 font-mono text-xs uppercase tracking-tighter">
                                Mai — Juin 2025
                            </span>
                            <p className="text-xs text-slate-500 mb-1">Stage · 7 semaines</p>
                            <h1 className="text-2xl font-bold text-white">My Money Bank</h1>
                            <p className="text-indigo-300 font-medium">
                                Groupe Crédit Commercial de France (CCF)
                            </p>
                            <h2 className="text-xl font-bold text-gray-100 italic mt-1">
                                Évolution de l'API KSIOP
                            </h2>
                        </div>
                    </div>

                    {/* Contexte */}
                    <p className="text-slate-200 leading-relaxed text-sm">
                        Intégré à l'équipe de développement de l'API KSIOP, j'ai participé à l'évolution
                        de cette API Java / Spring Boot qui alimente le site SOFIGES, un outil
                        utilisé côté métier (pour le personnel de la banque) pour consulter et gérer des données clients.
                        L'architecture repose sur un pipeline de données Kafka connecté à une BDD SOFIGES,
                        dont les données transitent vers un DataLake structuré en zones Raw, Structured et Consumer
                        avant d'être exposées via une Consumer View PostgreSQL.
                        Ma mission principale a porté sur la mise en conformité RGPD via une purge de données
                        et l'évolution de l'API pour refléter ces changements sur SOFIGES.
                    </p>

                    <FancyboxWrapper>
                    <Gallery group="archi" images={[
                        { src: "/uploads/stage2/SOFIGES_DATAHUB.jpg", alt: "Schéma architecture SOFIGES / DataHub" },
                    ]} />
                    </FancyboxWrapper>

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

                    {/* Section 1 */}
                    <div className="space-y-4">
                        <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                            Mettre à disposition des utilisateurs un service informatique
                            <br />
                            <span className="text-indigo-400 font-mono text-xs normal-case tracking-normal">
                                CI/CD · Insomnia · Environnements · Déploiement
                            </span>
                        </p>
                        <p className="text-slate-200 leading-relaxed text-sm">
                            Mon premier ticket consistait à faire évoluer une requête PostgreSQL en MyBatis (XML traduit
                            automatiquement en Java) pour modifier le comportement d'un endpoint de l'API.
                            Après modification, j'ai validé le résultat via Insomnia en environnement d'intégration,
                            puis suivi le pipeline CI/CD GitLab jusqu'au déploiement, en respectant les conventions
                            de nommage de l'équipe (ex: DSK-7226).
                        </p>
                    </div>

                    <FancyboxWrapper>
                    <Gallery group="ticket1" images={[
                        { src: "/uploads/stage2/1stTicket.png", alt: "Premier ticket attribué" },
                        { src: "/uploads/stage2/codemodifjour1et2.png", alt: "Modification du code XML MyBatis" },
                    ]} />
                    </FancyboxWrapper>

                    <FancyboxWrapper>
                    <Gallery group="insomnia" images={[
                        { src: "/uploads/stage2/1stTicketResultInsomnia.png", alt: "Test Insomnia après modification" },
                        { src: "/uploads/stage2/CICDetConvention.png", alt: "Pipeline CI/CD GitLab et convention de nommage" },
                    ]} />
                    </FancyboxWrapper>

                    {/* Section 2 */}
                    <div className="space-y-4">
                        <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                            Travailler en mode projet
                            <br />
                            <span className="text-indigo-400 font-mono text-xs normal-case tracking-normal">
                                Jira · Méthode Agile · Sprints
                            </span>
                        </p>
                        <p className="text-slate-200 leading-relaxed text-sm">
                            L'équipe travaillait en méthode Agile avec des sprints Jira. J'ai suivi et géré
                            mes tickets du backlog jusqu'à la review, en respectant les statuts et conventions
                            de l'équipe.
                        </p>
                    </div>

                    <FancyboxWrapper>
                    <Gallery group="jira" images={[
                        { src: "/uploads/stage2/sprint117.png", alt: "Tableau Kanban Jira — sprint 117" },
                        { src: "/uploads/stage2/batchTicket.png", alt: "Ticket de création du DAG de purge" },
                    ]} />
                    </FancyboxWrapper>

                    <FancyboxWrapper>
                    <Gallery group="signif" images={[
                        { src: "/uploads/stage2/signiftickets.png", alt: "Signification des statuts de tickets" },
                    ]} />
                    </FancyboxWrapper>

                    {/* Section 3 */}
                    <div className="space-y-4">
                        <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                            Développer la présence en ligne de l'organisation
                            <br />
                            <span className="text-indigo-400 font-mono text-xs normal-case tracking-normal">
                                Purge RGPD · Évolution API · SOFIGES
                            </span>
                        </p>
                        <p className="text-slate-200 leading-relaxed text-sm">
                            Ma mission principale a été la mise en conformité RGPD d'environ 11 000 acteurs
                            présents dans la BDD SOFIGES. J'ai créé trois batchs Airflow définissant l'ordonnancement
                            et l'ordre d'exécution de la purge, qui pousse ensuite un événement Kafka en production
                            pour signaler la suppression effective des données. Le site SOFIGES, alimenté par l'API,
                            reflète en temps réel ces évolutions pour les utilisateurs métier.
                        </p>
                    </div>

                    <FancyboxWrapper>
                    <Gallery group="sofiges" images={[
                        { src: "/uploads/stage2/SOFIGES.png", alt: "Site SOFIGES — données clients (env. intégration)" },
                    ]} />
                    </FancyboxWrapper>

                    <FancyboxWrapper>
                    <Gallery group="code" images={[
                        { src: "/uploads/stage2/codeBatch.png", alt: "Code des 3 batchs de purge" },
                        { src: "/uploads/stage2/codeDag.png", alt: "Définition du DAG et ordre d'exécution" },
                    ]} />
                    </FancyboxWrapper>

                    <FancyboxWrapper>
                    <Gallery group="purge" images={[
                        { src: "/uploads/stage2/11000.png", alt: "11 000 acteurs distincts impactés par la purge" },
                        { src: "/uploads/stage2/PURGE.png", alt: "Requête SQL — état de la purge par date et statut" },
                        { src: "/uploads/stage2/purgePreuv.png", alt: "Preuve de purge effective en environnement recette" },
                    ]} />
                    </FancyboxWrapper>

                    <FancyboxWrapper>
                        <Gallery group="envs" images={[
                            { src: "/uploads/stage2/dagIntA.png", alt: "Batch lancé en environnement intégration REU" },
                        ]} />
                    </FancyboxWrapper>

                    {/* Section 4 */}
                    <div className="space-y-4">
                        <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                            Répondre aux incidents et aux demandes d'assistance et d'évolution
                            <br />
                            <span className="text-indigo-400 font-mono text-xs normal-case tracking-normal">
                                Tickets Jira · Évolutions API · Batchs
                            </span>
                        </p>
                        <p className="text-slate-200 leading-relaxed text-sm">
                            Face à un blocage lors de l'exécution d'un DAG, j'ai utilisé Datadog pour analyser
                            les logs d'exécution et tenter d'identifier la cause, un outil davantage orienté DevOps
                        </p>
                    </div>

                    <Gallery group="incidents" images={[
                        { src: "/uploads/stage2/dagCRBloq.png", alt: "Analyse de blocage DAG via Datadog" },
                        { src: "/uploads/stage2/airflow.png", alt: "Dashboard Airflow — ensemble des DAGs" },
                    ]} />

                    {/* Section 5 */}
                    <div className="space-y-4">
                        <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                            Gérer le patrimoine informatique
                            <br />
                            <span className="text-indigo-400 font-mono text-xs normal-case tracking-normal">
                                Normes de déploiement · Documentation
                            </span>
                        </p>
                        <p className="text-slate-200 leading-relaxed text-sm">
                            Chaque déploiement respectait les conventions de nommage et les normes établies
                            par l'équipe, visibles directement dans le pipeline GitLab CI/CD.
                            Cette rigueur garantit la traçabilité et la maintenabilité du patrimoine applicatif.
                        </p>
                    </div>

                    <FancyboxWrapper>
                    <Gallery group="patrimoine" images={[
                        { src: "/uploads/stage2/CICDetConvention.png", alt: "Convention de nommage et CI/CD GitLab" },
                    ]} />
                    </FancyboxWrapper>

                </article>

            </section>
    );
}

import Link from "next/link";
import { Metadata } from "next";
import FancyboxWrapper from "@/components/FancyboxWrapper";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
    title: "Stage — Nantes Université / CNRS",
};

const techStack = [
    "Django", "Perl", "PHP", "WordPress",
    "Apache", "Linux", "MySQL / SQLite",
    "Cybersécurité"
];

export default function CnrsPage() {
    return (
        <FancyboxWrapper>
            <section className="py-12 space-y-8">

                <Link href="/experience" className="text-sm text-indigo-400 hover:underline">
                    ← Retour aux projets
                </Link>

                <article className="card p-6 space-y-6">

                    <div className="flex items-center gap-4">
                        <img
                            src="/uploads/US2B.png"
                            alt="Logo Nantes Université / CNRS"
                            className="h-16 w-auto object-contain shrink-0 mt-1 invert opacity-70"
                        />
                        <div>
                            <span className="text-indigo-400 font-mono text-xs uppercase tracking-tighter">
                                Janvier — Février 2026
                            </span>
                            <p className="text-xs text-slate-500 mb-2">Stage · 6 semaines</p>
                            <h1 className="text-2xl font-bold text-white">
                                Nantes Université / CNRS
                            </h1>
                            <p className="text-indigo-300 font-medium">
                                Unité en Sciences Biologiques et Biotechnologies
                            </p>
                            <h2 className="text-xl font-bold text-gray-100 italic mt-1">
                                Analyse des vulnérabilités et failles des sites web du laboratoire
                            </h2>
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

                    <p className="text-slate-200 leading-relaxed text-sm">
                        Suite à une compromission, ma mission consistait à sécuriser les
                        formulaires et les accès critiques des différents sites web du laboratoire.
                        Les sites web étant hébergés et tournant sur la même bande passante et infrastructure que celle de l'université,
                        cela explique le besoin critique de sécurisation.
                    </p>

                    {/* Section 1 */}
                    <div className="space-y-4">
                        <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                            Recensement des vulnérabilités exploitables pour chaque site
                            <br />
                            Compétence : Répondre aux incidents et aux demandes d'assistance et d'évolution
                        </p>
                        <p className="text-slate-200 leading-relaxed text-sm">
                            Dans le cadre et l'objectif de garantir un code et des principes de cybersécurité appliquées de manière
                            claire, j'ai écrit un document technique de recommandations pour l'équipe du laboratoire afin d'assurer
                            la maintenance sur le long terme et encourager les bonnes pratiques, dont voici un extrait concernant les formulaires :
                        </p>
                    </div>

                    <Gallery group="doc" images={[
                        { src: "/uploads/stage1/doc.png", alt: "Partie backend de la doc" },
                    ]} />

                    <p className="text-slate-200 leading-relaxed text-sm">
                        Recensement des failles : les versions de Perl et PHP sont obsolètes,
                        tandis que WordPress et MySQL sont à jour.
                    </p>

                    <Gallery group="versions" images={[
                        { src: "/uploads/stage1/verphp.png", alt: "Version PHP obsolète" },
                        { src: "/uploads/stage1/verperl.png", alt: "Version Perl obsolète" },
                    ]} />

                    {/* Section 2 */}
                    <div className="space-y-4">
                        <p className="text-base font-bold uppercase tracking-widest text-slate-200">
                            Correction et test des vulnérabilités
                            <br />
                            Compétences : Gérer le patrimoine informatique, Mettre à disposition des utilisateurs un service informatique
                        </p>
                        <p className="text-slate-200 leading-relaxed text-sm">
                            Champ d'entrée utilisateur permettant de taper sa propre requête SQL.
                            Le principe du moindre privilège a été instauré et la page verrouillée par mot de passe.
                        </p>
                    </div>

                    <Gallery group="search" images={[
                        { src: "/uploads/stage1/advancedsearch.png", alt: "Page requête SQL" },
                        { src: "/uploads/stage1/advancedsearchlocked.png", alt: "Page protégée" },
                    ]} />

                    <Gallery group="grants" images={[
                        { src: "/uploads/stage1/grantsvulnerability.png", alt: "Vulnérabilité privilèges" },
                        { src: "/uploads/stage1/MySqlUsers.png", alt: "Requête SQL" },
                        { src: "/uploads/stage1/grantsresolved.png", alt: "Vulnérabilité corrigée" },
                    ]} />

                    <Gallery group="upload" images={[
                        { src: "/uploads/stage1/UploadPerl.png", alt: "Upload sécurisé" },
                        { src: "/uploads/stage1/UploadSuite.png", alt: "Upload suite" },
                        { src: "/uploads/stage1/UploadTest.png", alt: "Test upload" },
                    ]} />

                </article>

            </section>
        </FancyboxWrapper>
    );
}

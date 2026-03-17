import Link from "next/link";
import { Metadata } from "next";
import FancyboxWrapper from "@/components/FancyboxWrapper";

export const metadata: Metadata = {
    title: "Stage",
};

const techStack = [
    "Django", "Perl", "PHP", "WordPress",
    "Apache", "Linux", "MySQL / SQLite",
];

type GalleryImage = { src: string; alt: string }

function Gallery({ images, group }: { images: GalleryImage[]; group: string }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, i) => (
                <a key={i} data-fancybox={group} href={img.src}>
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="rounded-lg border border-white/10 shadow-2xl w-full object-cover cursor-zoom-in hover:border-indigo-500/50 transition-all"
                    />
                </a>
            ))}
        </div>
    )
}

export default function ExperiencePage() {
    return (
        <FancyboxWrapper>
            <section className="py-12 space-y-16">

                {/* Stage 2026 */}
                <article className="relative pl-8 sm:pl-0 float-on-scroll">
                    <div className="hidden sm:block absolute left-40 top-0 bottom-0 w-px bg-indigo-500/30"></div>

                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="sm:w-35 shrink-0 pt-2">
                            <span className="text-indigo-400 font-mono font-bold text-sm uppercase tracking-tighter">
                                Janvier — Février 2026
                            </span>
                            <p className="text-xs text-slate-500 mt-1">Stage (6 semaines)</p>
                        </div>

                        <div className="card flex-1 p-5 space-y-6">
                            <div>
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

                            <p className="text-slate-200 leading-relaxed text-sm">
                                Suite à une compromission, ma mission consistait à sécuriser les
                                formulaires et les accès critiques des différents sites webs du laboratoire.
                            </p>

                            <div className="space-y-4">
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
                                    Recensement des vulnérabilités exploitables pour chaque site
                                    <br />
                                    Compétence : Répondre aux incidents et aux demandes d'assistance et d'évolution
                                </p>
                                <p className="text-slate-200 leading-relaxed text-sm">
                                    Écriture de recommandations pour l'équipe du laboratoire :
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
                        </div>
                    </div>
                </article>

                {/* Stage 2025 */}
                <article className="relative pl-8 sm:pl-0 float-on-scroll">
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="sm:w-35 shrink-0 pt-2">
                            <span className="text-indigo-400 font-mono font-bold text-sm uppercase tracking-tighter">
                                Mai — Juin 2025
                            </span>
                        </div>

                        <div className="card flex-1 p-8">
                            <h1 className="text-2xl font-bold text-white mb-4">MyMoneyBank</h1>
                            <p className="text-slate-400 italic">Détails de la mission à venir...</p>
                            <div className="mt-6">
                                <Link href="/profil" className="btn btn-primary text-xs px-4 py-2">
                                    En savoir plus
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>

            </section>
        </FancyboxWrapper>
    );
}
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-6">
            <p className="text-indigo-400 font-mono tracking-widest text-sm uppercase">
                Erreur 404
            </p>
            <h1 className="text-8xl font-black text-white">
                Oups<span className="text-indigo-500">.</span>
            </h1>
            <p className="text-slate-400 text-lg">
                Cette page n'existe pas.
            </p>
            <p className="text-slate-500 text-sm">
                Le site est encore en cours de construction, certaines pages ne sont pas disponibles.
            </p>
            <Link
                href="/"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded shadow-xl transition-all hover:scale-105"
            >
                Retour à l'accueil
            </Link>
        </section>
    );
}
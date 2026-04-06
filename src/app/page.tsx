import Link from "next/link";

export default function HomePage() {
  return (
      <section className="min-h-[90vh] flex items-center justify-center px-8 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 float-on-scroll">
            <div className="space-y-2">
              <p className="text-indigo-400 font-mono tracking-widest text-sm uppercase">
                Portfolio
              </p>

              <h1 className="text-6xl lg:text-8xl font-black text-white">
                Mathieu <span className="text-indigo-500">Zavazzo</span>
              </h1>

              <h2 className="text-2xl lg:text-3xl text-slate-300 font-light italic">
                BTS SIO SLAM
              </h2>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Bienvenue sur mon portfolio
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                  href="/profil"
                  className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded shadow-xl transition-all transform hover:scale-105"
              >
                Consulter mon Profil
              </Link>
            </div>
          </div>

          {/* Right column – Quick access */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 self-center">
            <h3 className="text-slate-500 uppercase text-xs font-bold tracking-widest mb-2 lg:text-right">
              Accès Rapide
            </h3>

            <Link
                href="/experience"
                className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all flex justify-between items-center"
            >
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Stages
                </h4>
              </div>

              <div className="text-2xl text-slate-700 group-hover:text-indigo-500">
                →
              </div>
            </Link>

            <Link
                href="/veille"
                className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all flex justify-between items-center"
            >
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Veille Technologique
                </h4>
              </div>

              <div className="text-2xl text-slate-700 group-hover:text-indigo-500">
                →
              </div>
            </Link>
          </div>

        </div>
      </section>
  );
}
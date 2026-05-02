export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffe7d1,_#fff7ef_35%,_#f8fafc_72%)] px-6 py-10 text-slate-900 sm:px-10 lg:px-16">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur sm:p-10 lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="inline-flex w-fit items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
              Student Profile
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Charellino Kalingga Sadewo
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Next.js project ini menampilkan profil mahasiswa, daftar minat teknologi,
              dan rencana belajar yang siap dipublikasikan melalui Docker Hub dan GitHub Actions.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 px-6 py-5 text-white shadow-lg shadow-slate-950/15">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Student ID</p>
            <p className="mt-2 text-2xl font-semibold tracking-wide">2341720205</p>
            <p className="mt-2 text-sm tracking-[0.2em] text-slate-400">Absen 5</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <article className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-300">About Me</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Saya tertarik pada web development, containerization, dan automation.
              Fokus utama saya adalah membangun aplikasi yang rapi, mudah di-deploy,
              dan konsisten lewat pipeline CI/CD.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Frontend", "Next.js, React"],
                ["DevOps", "Docker, CI/CD"],
                ["Interests", "UI, Cloud, Automation"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                  <p className="mt-2 text-base font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="grid gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-950">Tech Stack</h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>Next.js 16</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Docker + GitHub Actions</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-xl font-semibold text-slate-950">Project Goal</h2>
              <p className="mt-3 leading-7 text-slate-700">
                Setiap perubahan fitur wajib lewat feature branch dan pull request,
                lalu diverifikasi oleh CI sebelum merge ke main.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

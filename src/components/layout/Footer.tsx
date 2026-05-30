export default function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between px-6 py-5 text-sm text-slate-500 md:px-10">
        <p>© {new Date().getFullYear()} Yafie Portfolio</p>
        <p>Built with Next.js, Motion, and thoughtful UI craft.</p>
      </div>
    </footer>
  );
}

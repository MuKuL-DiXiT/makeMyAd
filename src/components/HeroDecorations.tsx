export default function HeroDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-24 h-56 w-56 rounded-full bg-blue-700/20 blur-3xl" />
      <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute left-1/3 bottom-16 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl" />
      <div className="absolute right-24 bottom-24 h-1 w-32 bg-blue-300/50" />
      <div className="absolute left-20 top-56 h-1 w-20 bg-blue-300/50" />
    </div>
  );
}

export function BrandMark({ size = 38 }: { size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 font-display font-bold text-white shadow-md shadow-sky-500/25"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      MB
    </span>
  );
}

export function BrandName() {
  return (
    <span className="font-display text-lg font-extrabold tracking-tight sm:text-xl">
      <span className="text-slate-900">Mohammed</span>{" "}
      <span className="text-gradient">Benghanem</span>
      <span className="font-black text-cyan-500">.</span>
    </span>
  );
}

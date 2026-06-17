export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-fluent-indigo/15 blur-[140px] animate-float" />
      <div className="absolute right-[-10%] top-1/4 h-[30rem] w-[30rem] rounded-full bg-fluent-violet/12 blur-[150px] animate-float-slow" />
      <div className="absolute bottom-[-15%] left-1/3 h-[32rem] w-[32rem] rounded-full bg-fluent-cyan/12 blur-[150px] animate-float" />
      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}

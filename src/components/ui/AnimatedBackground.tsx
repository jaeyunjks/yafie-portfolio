export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="ambient-blob absolute -left-28 -top-28 h-[34rem] w-[34rem] rounded-full bg-[#8dbbff]/20 blur-[90px]" />
      <div className="ambient-blob absolute -right-24 bottom-[-8rem] h-[32rem] w-[32rem] rounded-full bg-[#c6b7ff]/18 blur-[92px]" />
      <div className="ambient-blob absolute left-[58%] top-[38%] h-[22rem] w-[22rem] rounded-full bg-[#e6b04b]/10 blur-[96px]" />
    </div>
  );
}

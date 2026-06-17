export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#eef4ff]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(141,187,255,0.4),transparent_38%),radial-gradient(circle_at_88%_18%,rgba(198,183,255,0.32),transparent_34%),radial-gradient(circle_at_70%_58%,rgba(141,187,255,0.2),transparent_42%),radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.72),transparent_40%),linear-gradient(180deg,#eef4ff_0%,#f4f7ff_36%,#f8fbff_62%,#f4f0ff_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,#eef4ff_0%,rgba(238,244,255,0)_100%)]" />
      <div className="absolute -left-40 -top-32 h-[42rem] w-[42rem] rounded-full bg-[#8dbbff]/12 blur-[112px]" />
      <div className="absolute -right-36 top-6 h-[40rem] w-[40rem] rounded-full bg-[#c6b7ff]/13 blur-[120px]" />
      <div className="absolute bottom-[-13rem] left-[20%] h-[30rem] w-[58rem] rounded-full bg-white/48 blur-[104px]" />

      <div className="stars-layer absolute inset-0 opacity-90">
        <span className="star-dot star-dot-soft twinkle-slow left-[6%] top-[16%] [animation-delay:1.4s]" />
        <span className="star-cross star-cross-small twinkle-medium left-[12%] top-[34%] [animation-delay:2.2s]" />
        <span className="star-dot star-dot-lavender twinkle-medium left-[18%] top-[58%] [animation-delay:0.9s]" />
        <span className="star-cross star-cross-lavender twinkle-slow left-[9%] top-[78%] [animation-delay:3.2s]" />
        <span className="star-dot twinkle-medium left-[28%] top-[22%] [animation-delay:1.7s]" />
        <span className="star-cross star-cross-small twinkle-slow left-[34%] top-[46%] [animation-delay:0.5s]" />
        <span className="star-dot star-dot-soft twinkle-slow left-[39%] top-[70%] [animation-delay:2.5s]" />
        <span className="star-dot twinkle-slow left-[54%] top-[13%]" />
        <span className="star-dot star-dot-soft twinkle-medium left-[66%] top-[28%] [animation-delay:1.8s]" />
        <span className="star-dot twinkle-medium left-[79%] top-[12%] [animation-delay:0.7s]" />
        <span className="star-dot star-dot-lavender twinkle-slow left-[88%] top-[26%] [animation-delay:2.6s]" />
        <span className="star-dot twinkle-slow left-[61%] top-[48%] [animation-delay:1.2s]" />
        <span className="star-dot star-dot-soft twinkle-medium left-[76%] top-[42%] [animation-delay:3.1s]" />
        <span className="star-dot twinkle-slow left-[91%] top-[54%] [animation-delay:2.1s]" />
        <span className="star-dot star-dot-lavender twinkle-medium left-[67%] top-[73%] [animation-delay:0.4s]" />
        <span className="star-cross twinkle-slow left-[58%] top-[25%] [animation-delay:2.4s]" />
        <span className="star-cross star-cross-small twinkle-medium left-[73%] top-[20%] [animation-delay:1.1s]" />
        <span className="star-cross twinkle-slow left-[84%] top-[38%] [animation-delay:3.4s]" />
        <span className="star-cross star-cross-lavender twinkle-medium left-[70%] top-[58%] [animation-delay:1.6s]" />
        <span className="star-cross star-cross-small twinkle-slow left-[86%] top-[70%] [animation-delay:0.9s]" />
        <span className="star-cross twinkle-medium left-[95%] top-[34%] [animation-delay:2.9s]" />
        <span className="star-dot star-dot-soft twinkle-slow left-[47%] top-[62%] [animation-delay:2.8s]" />
        <span className="star-cross star-cross-small twinkle-medium left-[52%] top-[82%] [animation-delay:0.6s]" />
        <span className="star-dot star-dot-lavender twinkle-slow left-[23%] top-[88%] [animation-delay:3.6s]" />
        <span className="star-cross star-cross-small twinkle-medium left-[44%] top-[36%] [animation-delay:1.9s]" />
        <span className="star-dot star-dot-soft twinkle-medium left-[57%] top-[92%] [animation-delay:2.7s]" />
      </div>
    </div>
  );
}

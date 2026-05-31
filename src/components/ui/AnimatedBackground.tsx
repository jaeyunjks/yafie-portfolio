export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f9f9ff]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(141,187,255,0.32),transparent_36%),radial-gradient(circle_at_82%_24%,rgba(198,183,255,0.26),transparent_34%),radial-gradient(circle_at_68%_58%,rgba(141,187,255,0.18),transparent_40%),radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.72),transparent_38%),linear-gradient(180deg,#f9f9ff_0%,#f8fbff_45%,#ffffff_100%)]" />
      <div className="absolute -left-32 -top-28 h-[36rem] w-[36rem] rounded-full bg-[#8dbbff]/12 blur-[104px]" />
      <div className="absolute -right-28 top-12 h-[34rem] w-[34rem] rounded-full bg-[#c6b7ff]/13 blur-[112px]" />
      <div className="absolute bottom-[-12rem] left-[28%] h-[28rem] w-[42rem] rounded-full bg-white/48 blur-[96px]" />

      <div className="stars-layer absolute inset-0">
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
      </div>
    </div>
  );
}

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

function HeroSection({ active, heroRef, onOrder, onMenu, children }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tiltX = useSpring(useTransform(pointerY, [-1, 1], [4, -4]), { stiffness: 100, damping: 18 });
  const tiltY = useSpring(useTransform(pointerX, [-1, 1], [-4, 4]), { stiffness: 100, damping: 18 });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const reveal = (delay = 0, distance = 28) => ({
    initial: reduceMotion ? false : { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease },
  });

  return (
    <section ref={heroRef} className={active ? 'mikun-hero relative overflow-hidden text-white' : 'hidden'}>
      <div className="mikun-hero-glow" aria-hidden="true" />
      <div className="mikun-hero-grid mx-auto grid max-w-7xl items-center gap-8 px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-14 lg:min-h-[650px] lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-14">
        <div className="mikun-hero-copy relative z-10 min-w-0 lg:order-2 lg:max-w-xl lg:justify-self-end">
          <motion.p {...reveal(0.1, 16)} className="text-xs font-bold uppercase tracking-[0.32em] text-brand-lime sm:text-sm">
            MIKUN / ADO EKITI
          </motion.p>
          <h1 className="mikun-hero-title mt-5 max-w-[650px] text-[clamp(3.4rem,7vw,6.9rem)] leading-[0.98] tracking-[-0.035em]">
            <motion.span {...reveal(0.2, 48)} className="block">Good food,</motion.span>
            <motion.span {...reveal(0.36, 48)} className="block text-brand-lime">good vibe.</motion.span>
          </h1>
          <motion.p {...reveal(0.54)} className="mt-6 max-w-lg text-base font-normal leading-relaxed text-white/85 sm:text-lg">
            Comforting favourites, colourful plates and moments worth sharing. Find your next good food mood at MIKUN.
          </motion.p>
          <motion.div {...reveal(0.66)} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <motion.button
              type="button"
              onClick={onOrder}
              whileHover={reduceMotion ? undefined : { scale: 1.045, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="mikun-hero-button group inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-brand-lime px-7 py-3 text-sm font-bold text-brand-forest shadow-[0_14px_32px_rgba(75,234,0,0.18)] transition-colors hover:bg-brand-lime-hover sm:text-base"
            >
              Order now
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </motion.button>
            <motion.button
              type="button"
              onClick={onMenu}
              whileHover={reduceMotion ? undefined : { scale: 1.035, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/75 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:text-base"
            >
              See the menu
            </motion.button>
          </motion.div>
          <motion.div {...reveal(0.83)} className="mikun-hero-proof mt-11 grid max-w-lg grid-cols-3 border-t border-white/20 pt-5 sm:mt-14">
            <div><strong>Fresh daily</strong><span>Made to order</span></div>
            <div><strong>10 pm</strong><span>Closing time</span></div>
            <div><strong>Ado Ekiti</strong><span>Find us here</span></div>
          </motion.div>
        </div>

        <div className="mikun-hero-visual relative mx-auto w-full max-w-[600px] select-none lg:order-1 lg:justify-self-start" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
          <div className="mikun-hero-orbit mikun-hero-orbit-one" aria-hidden="true" />
          <div className="mikun-hero-orbit mikun-hero-orbit-two" aria-hidden="true" />
          <div className="mikun-hero-orbit-dot" aria-hidden="true" />
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.88, rotate: -6, y: 35 }}
            animate={{ opacity: 1, scale: 1, rotate: -3, y: 0 }}
            transition={{ duration: 1.15, delay: 0.15, ease }}
            style={reduceMotion ? undefined : { rotateX: tiltX, rotateY: tiltY, transformPerspective: 1100 }}
            className="mikun-hero-photo-shell relative mx-auto w-[86%]"
          >
            <div className="mikun-hero-photo-float overflow-hidden rounded-[2.5rem] border-[6px] border-white/95 bg-white shadow-[0_35px_70px_rgba(0,0,0,0.3)] sm:rounded-[3.5rem]">
              <img
                src="/images/landingpage-optimized.webp"
                alt="Nigerian jollof rice with chicken and plantain beside another freshly prepared meal"
                className="mikun-hero-photo h-full w-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </motion.div>
          <motion.div {...reveal(0.75, 22)} className="mikun-hero-photo-caption absolute bottom-[5%] left-[2%] z-10 rounded-2xl border border-white/15 bg-brand-forest/90 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:px-5 sm:py-4">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-lime sm:text-xs">Today&apos;s favourite</span>
            <strong className="mikun-hero-caption-title mt-1 block text-lg sm:text-xl">Jollof, Chicken &amp; Plantain</strong>
          </motion.div>
          <div className="mikun-hero-badge absolute right-[1%] top-[6%] z-10 grid h-16 w-16 place-items-center rounded-full border-2 border-white bg-brand-lime text-center text-[10px] font-black leading-tight text-brand-forest shadow-xl sm:h-20 sm:w-20" aria-label="Ready fast">
            READY<br />FAST
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}

export default HeroSection;

import { useEffect, useMemo, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Send,
  ShieldCheck,
  FileText,
  Target,
  BrainCircuit,
} from 'lucide-react'

const PHOTO = '/images/Neeraj1.png'

const tickerItems = [
  'Research-Backed Market Insights',
  'Transparent Methodology',
  'Data-Driven Equity Research',
  'Defined Entry & Exit Levels',
  'Disciplined Risk Management',
  'Smarter Market Decisions',
]

/*
  Mobile: badges stay away from the face.
  - Research-Backed: top-left
  - Defined Levels: lower-right (over the suit)
  - Disciplined Strategy: bottom-left
  Desktop (sm+) positions are unchanged.
*/
const badges = [
  {
    icon: FileText,
    title: 'Research-Backed',
    subtitle: 'Data-driven analysis',
    aos: 'fade-right',
    iconBg:
      'bg-gradient-to-br from-[#ff8b35] to-[#ff6a0b] shadow-[0_4px_12px_rgba(255,106,11,.28)]',
    pos: 'top-[2%] left-[2%] sm:top-[20%] sm:left-auto sm:right-[calc(50%_+_min(23%,175px)_-_28px)]',
    delay: '0s',
  },
  {
    icon: Target,
    title: 'Defined Levels',
    subtitle: 'Entry & exit planning',
    aos: 'fade-left',
    iconBg:
      'bg-gradient-to-br from-[#ff8b35] to-[#ff6a0b] shadow-[0_4px_12px_rgba(255,106,11,.28)]',
    pos: 'bottom-[20%] right-[2%] sm:bottom-auto sm:top-[34%] sm:right-auto sm:left-[calc(50%_+_min(23%,175px)_-_28px)]',
    delay: '-2s',
  },
  {
    icon: BrainCircuit,
    title: 'Disciplined Strategy',
    subtitle: 'Structured risk framework',
    aos: 'fade-up',
    iconBg:
      'bg-gradient-to-br from-[#8b5cf6] to-[#6544dc] shadow-[0_4px_12px_rgba(101,68,220,.3)]',
    pos: 'bottom-[5%] left-[2%] max-w-[62%] sm:max-w-[46%] sm:bottom-[12%] sm:left-auto sm:right-[calc(50%_+_min(23%,175px)_-_10px)]',
    delay: '-1.2s',
  },
]

function ResearchBadge({
  icon: Icon,
  title,
  subtitle,
  aos,
  iconBg,
  pos,
  delay,
  aosDelay,
}) {
  return (
    <div
      data-aos={aos}
      data-aos-duration="750"
      data-aos-delay={aosDelay}
      className={`absolute z-[5] w-max max-w-[46%] ${pos}`}
    >
      {/* Inner wrapper floats so AOS transforms never fight the float animation */}
      <div
        style={{ animationDelay: delay }}
        className="group/badge flex items-center gap-[7px] rounded-xl border-[1.5px] border-[rgba(31,41,55,.72)] bg-white/95 px-[9px] py-2 leading-normal shadow-[0_9px_28px_rgba(15,23,42,.1)] backdrop-blur-md transition-[box-shadow,border-color,transform] duration-200 animate-[hero-float_5.5s_ease-in-out_infinite] hover:-translate-y-0.5 hover:border-[rgba(255,116,23,.65)] hover:shadow-[0_13px_30px_rgba(15,23,42,.16)] motion-reduce:animate-none sm:gap-[11px] sm:rounded-[15px] sm:px-3.5 sm:py-2.5"
      >
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-[9px] text-white transition-transform duration-300 group-hover/badge:scale-110 group-hover/badge:-rotate-6 sm:h-[43px] sm:w-[43px] sm:rounded-[11px] ${iconBg}`}
        >
          <Icon
            strokeWidth={1.9}
            aria-hidden="true"
            className="h-[18px] w-[18px] sm:h-[23px] sm:w-[23px]"
          />
        </span>

        <span className="flex min-w-0 flex-col gap-[3px] text-left sm:gap-1">
          <strong className="text-[10px] font-[850] leading-tight text-[#151b28] sm:whitespace-nowrap sm:text-xs">
            {title}
          </strong>
          <small className="text-[8px] font-semibold leading-snug text-slate-500 sm:whitespace-nowrap sm:text-[10px]">
            {subtitle}
          </small>
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 25,
      disable: () =>
        window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })

    const timer = window.setTimeout(() => AOS.refresh(), 400)

    return () => window.clearTimeout(timer)
  }, [])

  const marqueeItems = useMemo(() => [...tickerItems, ...tickerItems], [])

  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-[radial-gradient(ellipse_at_4%_55%,rgba(255,116,23,.12),transparent_39%),radial-gradient(ellipse_at_92%_23%,rgba(119,85,232,.14),transparent_40%),radial-gradient(ellipse_at_48%_75%,rgba(40,120,255,.07),transparent_38%),linear-gradient(135deg,#fffaf6,#fff_47%,#f7f5ff)] text-[#111827]"
    >
      {/* Keyframes only (Tailwind can't define these inline) */}
      <style>{`
        @keyframes hero-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes hero-float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -7px; }
        }
        @keyframes hero-portrait-in {
          from { opacity: 0; translate: 0 18px; }
          to { opacity: 1; translate: 0 0; }
        }
        @keyframes hero-glow {
          0%, 100% { opacity: .55; transform: scale(1); }
          50% { opacity: .85; transform: scale(1.06); }
        }
        @keyframes hero-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes hero-sheen {
          0%, 60% { transform: translateX(-130%); }
          100% { transform: translateX(130%); }
        }
        @keyframes hero-cta-pulse {
          0%, 100% { box-shadow: 0 9px 26px rgba(119,85,232,.22), 0 0 0 0 rgba(255,116,23,.28); }
          50% { box-shadow: 0 9px 26px rgba(119,85,232,.22), 0 0 0 9px rgba(255,116,23,0); }
        }
      `}</style>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,.075)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.075)_1px,transparent_1px)] bg-[length:27px_27px] opacity-25 [mask-image:linear-gradient(to_bottom,#000,transparent_90%)] sm:bg-[length:34px_34px] sm:opacity-100" />

      {/* Soft ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-[#ff7417]/10 blur-3xl animate-[hero-glow_8s_ease-in-out_infinite] motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full bg-[#7755e8]/10 blur-3xl animate-[hero-glow_9s_ease-in-out_infinite_-3s] motion-reduce:animate-none"
      />

      {/* Announcement ticker */}
      <div
        role="marquee"
        aria-label="Research highlights"
        className="group relative z-[3] w-full overflow-hidden bg-gradient-to-r from-[#ff7b19] to-[#ff650d] shadow-[0_3px_14px_rgba(255,105,13,.16)] [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]"
      >
        <div className="flex w-max animate-[hero-marquee_38s_linear_infinite] will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              aria-hidden={index >= tickerItems.length}
              className="inline-flex shrink-0 items-center gap-[13px] whitespace-nowrap px-[9px] py-3 text-[10px] font-extrabold leading-tight text-white sm:gap-[22px] sm:px-3 sm:py-3.5 sm:text-[13px]"
            >
              <span>{item}</span>
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rotate-45 bg-white/80 sm:h-2 sm:w-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-[1] mx-auto w-full max-w-[1180px] px-2.5 pt-8 text-center sm:px-6 sm:pt-10 md:pt-12">
        <div
          data-aos="fade-down"
          className="mb-[17px] inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[rgba(255,116,23,.28)] bg-white/85 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.02em] text-[#c54b09] shadow-[0_5px_20px_rgba(15,23,42,.035)] backdrop-blur-sm sm:mb-5 sm:gap-[9px] sm:px-[15px] sm:py-[9px] sm:text-xs sm:tracking-[.045em]"
        >
          <span className="relative flex h-[9px] w-[9px] shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#13a66a] opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-[#13a66a]" />
          </span>
          Structured Equity Research
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto max-w-full text-[min(7.3vw,42px)] font-[850] leading-[1.17] tracking-[-.05em] text-[#111827] [overflow-wrap:normal] sm:max-w-[760px] sm:text-[clamp(39px,6.3vw,56px)] sm:leading-[1.12] sm:tracking-[-.052em] sm:[text-wrap:balance] md:max-w-[1060px] md:text-[clamp(40px,5vw,65px)]"
        >
          <span className="block whitespace-nowrap sm:inline sm:whitespace-normal">
            Start Your Smarter
          </span>{' '}
          <span className="block whitespace-nowrap sm:inline sm:whitespace-normal">
            Trading Journey With
          </span>{' '}
          <span className="block whitespace-nowrap sm:inline sm:whitespace-normal">
            <span className="bg-gradient-to-r from-[#2878ff] to-[#4f9bff] bg-clip-text text-transparent">
              SEBI-Registered
            </span>{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#f04b0b] to-[#ff7417] bg-clip-text text-transparent">
                Research
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-[7px] w-full sm:-bottom-1.5 sm:h-2.5"
              >
                <path
                  d="M2 8 C 50 2, 110 2, 198 7"
                  fill="none"
                  stroke="#ff7417"
                  strokeOpacity=".45"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-delay="180"
          className="mx-auto mt-[17px] max-w-[800px] text-[clamp(21px,5.4vw,27px)] font-[850] leading-[1.32] tracking-[-.035em] text-[#202b3d] [text-wrap:balance] sm:mt-5 sm:text-[clamp(21px,2.4vw,29px)] sm:leading-[1.35]"
        >
          We Don&apos;t Chase the Market.
          <br />
          <span className="bg-gradient-to-r from-[#7755e8] to-[#9b7bff] bg-clip-text text-transparent">
            We Decode It.
          </span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="250"
          className="mx-auto mt-3 max-w-[820px] px-1.5 text-sm font-medium leading-[1.75] text-slate-600 [text-wrap:pretty] sm:mt-[15px] sm:px-0 sm:text-[clamp(15px,1.35vw,18px)]"
        >
          Make sense of market opportunities with data-driven equity research,
          clearly defined entry and exit levels, and a disciplined
          risk-to-reward framework.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="320"
          className="mt-[21px] flex w-full justify-center sm:mt-6"
        >
          <a
            href="#consult"
            className="group relative isolate inline-flex min-h-[52px] w-full max-w-[370px] items-center justify-center gap-3 overflow-hidden rounded-[14px] bg-[linear-gradient(105deg,#ff7417_0%,#ed6b78_48%,#347cf6_100%)] px-4 py-[13px] text-[15px] font-extrabold text-white no-underline shadow-[0_9px_26px_rgba(119,85,232,.22)] outline-none transition duration-[250ms] animate-[hero-cta-pulse_2.8s_ease-in-out_infinite] before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,.34)_48%,transparent_75%)] before:content-[''] before:animate-[hero-sheen_4.5s_ease-in-out_infinite] hover:-translate-y-[3px] hover:shadow-[0_14px_35px_rgba(119,85,232,.3)] hover:[animation-play-state:paused] focus-visible:ring-4 focus-visible:ring-[#7755e8]/40 active:translate-y-0 active:scale-[.98] motion-reduce:animate-none motion-reduce:before:animate-none motion-reduce:transition-none sm:min-h-[54px] sm:w-auto sm:min-w-[310px] sm:max-w-none sm:rounded-[15px] sm:px-7 sm:py-3.5 sm:text-[17px]"
          >
            Explore Our Research
            <Send
              size={19}
              aria-hidden="true"
              className="shrink-0 transition-transform duration-[250ms] group-hover:translate-x-[3px] group-hover:-translate-y-[2px]"
            />
          </a>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mx-auto mt-3 flex max-w-[330px] items-center justify-center gap-[7px] text-[11px] font-semibold leading-relaxed text-slate-500 sm:mt-[13px] sm:max-w-none sm:text-xs"
        >
          <ShieldCheck
            size={16}
            aria-hidden="true"
            className="shrink-0 text-[#13a66a]"
          />
          Less noise. More analysis. A clearer research process.
        </div>

        {/* Portrait (arch) with floating badges */}
        <div className="relative isolate mx-auto mt-6 w-full max-w-full sm:mt-7 sm:max-w-[680px] md:max-w-[760px]">
          {/* Glow + rotating dashed ring behind the arch */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[88%] w-[78%] max-w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(119,85,232,.22),rgba(255,116,23,.14)_45%,transparent_70%)] blur-2xl animate-[hero-glow_7s_ease-in-out_infinite] motion-reduce:animate-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-30%] left-1/2 -z-10 aspect-square w-[88%] max-w-[470px] -translate-x-1/2 rounded-full border-2 border-dashed border-[#7755e8]/20 animate-[hero-spin_60s_linear_infinite] motion-reduce:animate-none sm:w-[62%]"
          />

          <div className="relative flex w-full items-end justify-center overflow-visible leading-[0]">
            {/* Mobile: 92% wide, fixed 440px tall. sm+: natural photo height */}
            <div className="pointer-events-none relative z-[2] h-[440px] w-[92%] max-w-[440px] animate-[hero-portrait-in_.9s_ease_both] overflow-hidden rounded-t-full border-4 border-b-0 border-white bg-gradient-to-br from-[#efeaff] to-[#fff2e8] shadow-[0_22px_50px_rgba(15,23,42,.18)] ring-1 ring-[#7755e8]/10 motion-reduce:animate-none sm:h-auto sm:w-1/2 sm:max-w-[330px] sm:border-[5px] md:w-[46%] md:max-w-[350px]">
              {!photoFailed ? (
                <img
                  src={PHOTO}
                  alt="Research professional portrait"
                  width="700"
                  height="900"
                  decoding="async"
                  fetchpriority="high"
                  onError={() => setPhotoFailed(true)}
                  className="block h-full w-full object-cover object-top sm:h-auto"
                />
              ) : (
                <div className="grid h-full min-h-[420px] w-full place-items-center text-[100px] font-[850] leading-none text-[#2878ff]">
                  N
                </div>
              )}
              {/* Gentle bottom fade for a cleaner blend into the closing bar */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#101827]/15 to-transparent" />
            </div>

            {badges.map((badge, index) => (
              <ResearchBadge
                key={badge.title}
                {...badge}
                aosDelay={500 + index * 120}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Closing message */}
      <div className="relative z-[3] flex w-full items-center justify-center overflow-hidden bg-[linear-gradient(100deg,#101827,#20183f)] px-4 py-5 text-center text-white before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[linear-gradient(90deg,#ff7417,#ed6b78_50%,#347cf6)] before:content-[''] sm:px-5 sm:py-[26px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.06),transparent)] animate-[hero-sheen_7s_ease-in-out_infinite] motion-reduce:hidden"
        />
        <p className="relative m-0 max-w-[300px] text-[17px] font-extrabold leading-snug tracking-[-.01em] [text-wrap:balance] sm:max-w-[760px] sm:text-[clamp(18px,2vw,24px)]">
          Better decisions start with{' '}
          <span className="bg-gradient-to-r from-[#ff994d] to-[#ffb877] bg-clip-text text-transparent">
            better research.
          </span>
        </p>
      </div>
    </section>
  )
}
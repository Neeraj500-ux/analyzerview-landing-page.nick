
import {
  AlertOctagon,
  SearchX,
  HeartCrack,
  MessageSquareWarning,
  ShieldAlert,
  TrendingDown,
  Repeat,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

import { painPoints } from '../data/content'

const icons = [
  SearchX,
  HeartCrack,
  MessageSquareWarning,
  ShieldAlert,
  TrendingDown,
  Repeat,
]

export default function Problem() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#fff1f0] via-white to-[#fffafa] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 left-1/2 h-64 w-[90%] max-w-[680px] -translate-x-1/2 rounded-full bg-red-400/15 blur-[90px]" />

        <div className="absolute -left-24 top-1/2 h-56 w-56 rounded-full bg-orange-300/10 blur-[80px]" />

        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-rose-300/15 blur-[90px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(#dc2626 0.8px, transparent 0.8px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1100px]">

        {/* Heading */}
        <div className="mx-auto max-w-[850px] text-center">

          <span
            data-aos="fade-down"
            className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-red-200 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur sm:px-5"
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-100 text-red-600">
              <AlertOctagon size={15} strokeWidth={2.5} />
            </span>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-red-600 sm:text-xs sm:tracking-[0.17em]">
              Reality Check
            </span>
          </span>

          <h2
            data-aos="zoom-in"
            className="mt-5 font-black leading-[0.95] tracking-[-0.055em] sm:mt-7"
          >
            <span className="block bg-gradient-to-b from-red-500 via-red-600 to-red-800 bg-clip-text text-[clamp(76px,18vw,150px)] text-transparent drop-shadow-[0_8px_22px_rgba(220,38,38,0.16)]">
              STOP
            </span>

            <span className="mx-auto mt-4 block max-w-[780px] text-[clamp(25px,5.5vw,52px)] leading-[1.15] text-slate-950">
              Before You Lose{' '}
              <span className="text-red-600">Your Money</span>{' '}
              in Trading.
            </span>
          </h2>

          <p
            data-aos="fade-up"
            className="mx-auto mt-5 max-w-[590px] text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8"
          >
            Emotional decisions, poor risk management, and repeated mistakes
            can put your trading capital at risk. Do any of these sound familiar?
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-9 grid grid-cols-1 gap-3.5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">

          {painPoints.map((text, i) => {
            const Icon = icons[i % icons.length]

            return (
              <div
                key={text}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 80}
                className="group relative flex min-w-0 items-start gap-3.5 overflow-hidden rounded-2xl border border-red-100/90 bg-white/90 p-4 shadow-[0_5px_22px_rgba(127,29,29,0.045)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_14px_34px_rgba(220,38,38,0.12)] sm:gap-4 sm:rounded-[22px] sm:p-5 lg:p-6"
              >
                {/* Top highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-red-100 bg-gradient-to-br from-red-50 to-rose-100/70 text-red-600 transition-all duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon size={22} strokeWidth={1.9} />
                </span>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold leading-relaxed text-slate-800 sm:text-[15px]">
                    {text}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.1em] text-red-500/80 sm:text-[11px] sm:tracking-[0.12em]">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400 transition-colors group-hover:bg-red-600" />
                    Risk to recognize
                  </div>
                </div>

                <ArrowRight
                  size={16}
                  className="mt-1 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500"
                />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA section */}
        <div
          data-aos="fade-up"
          className="relative mx-auto mt-10 max-w-[820px] overflow-hidden rounded-[24px] border border-red-100 bg-white/90 p-5 text-center shadow-[0_12px_40px_rgba(127,29,29,0.055)] backdrop-blur-sm sm:mt-14 sm:rounded-[30px] sm:p-8 lg:p-10"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-red-100/70 blur-3xl" />

          <div className="relative">

            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100 sm:h-14 sm:w-14">
              <ShieldAlert size={25} strokeWidth={1.8} />
            </div>

            <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-red-500 sm:text-xs">
              It's time to rethink your strategy
            </p>

            <h3 className="mt-3 text-[24px] font-black leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Stop Guessing.
              <span className="mt-1 block text-red-600">
                Start Trading Smarter.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-[600px] text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              If you relate to any of these problems, it's time to rethink
              your approach. Focus on discipline, understand risk, and make
              more informed trading decisions.
            </p>

            {/* Supporting points */}
            <div className="mx-auto mt-6 flex max-w-[600px] flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7">
              {[
                'Risk awareness',
                'Better discipline',
                'Smarter decisions',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-bold text-slate-700 sm:text-sm"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-emerald-600"
                  />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA button */}
            <a
              href="#consult"
              className="group relative mt-8 inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff7417] via-[#ed6b78] to-[#347cf6] px-4 py-4 text-center text-sm font-extrabold leading-snug text-white shadow-[0_10px_28px_rgba(119,85,232,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(119,85,232,0.32)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 sm:w-auto sm:min-w-[310px] sm:px-7 sm:text-base"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                Step Into a Smarter Trading Approach
              </span>

              <ArrowRight
                size={19}
                className="relative shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <p className="mt-4 text-[11px] leading-relaxed text-slate-400 sm:text-xs">
              Trading involves risk. No strategy can guarantee profits.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

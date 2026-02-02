"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/lib/content";

/* ── Brutalist / Bold ──────────────────────────────────────────────
   Massive typography, raw, intentionally "ugly-beautiful."
   Electric yellow + red on black. Overlapping elements, rotated text.
   No rounded corners anywhere. Bloomberg Businessweek × underground zine.
   ─────────────────────────────────────────────────────────────────── */

const YELLOW = "#FFE600";
const RED = "#FF2200";

function BrutalFAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b-4 border-white/10">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left py-6 md:py-8 flex items-start justify-between gap-4 cursor-pointer group"
          >
            <span className="text-lg md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#FFE600] transition-colors">
              {item.q}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.15 }}
              className="text-4xl md:text-5xl font-black flex-shrink-0 leading-none"
              style={{ color: RED }}
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="pb-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function V6() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 bg-black border-b-4 border-white">
        <div className="flex items-center justify-between px-4 md:px-8 py-3">
          <a href="#" className="text-sm md:text-base font-black tracking-[0.3em] uppercase">
            SYNTHESIS
          </a>
          <div className="hidden md:flex items-center gap-6 text-xs font-black tracking-[0.2em] uppercase">
            <a href="#tracks" className="hover:text-[#FFE600] transition-colors">Tracks</a>
            <a href="#judging" className="hover:text-[#FFE600] transition-colors">Judging</a>
            <a href="#prizes" className="hover:text-[#FFE600] transition-colors">Prizes</a>
            <a href="#faq" className="hover:text-[#FFE600] transition-colors">FAQ</a>
          </div>
          <a
            href="#apply"
            className="px-4 py-2 text-xs font-black tracking-[0.2em] uppercase"
            style={{ backgroundColor: YELLOW, color: "black" }}
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 md:px-8 pt-20">
        {/* Background rotated accent text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black opacity-[0.03] whitespace-nowrap pointer-events-none select-none"
          style={{ transform: "translate(-50%, -50%) rotate(-12deg)" }}
        >
          SYNTHESIS
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {/* Rotated label */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span
              className="inline-block text-xs md:text-sm font-black tracking-[0.4em] uppercase px-3 py-1 -rotate-2"
              style={{ backgroundColor: RED, color: "white" }}
            >
              {content.hero.subtitle}
            </span>
          </motion.div>

          {/* Massive title */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase"
          >
            <span className="block" style={{ WebkitTextStroke: "2px white", color: "transparent" }}>
              THE
            </span>
            <span className="block" style={{ color: YELLOW }}>
              SYNTH
            </span>
            <span className="block">
              ESIS
            </span>
          </motion.h1>

          {/* Catchphrase overlapping */}
          <motion.p
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -1.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-2xl lg:text-3xl font-black italic mt-4 md:-mt-4 ml-2 md:ml-12"
            style={{ color: YELLOW }}
          >
            &ldquo;{content.hero.catchphrase}&rdquo;
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base md:text-xl max-w-2xl mt-8 leading-relaxed"
          >
            {content.hero.description}
          </motion.p>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-sm md:text-base mt-4 font-black tracking-wider uppercase"
          >
            {content.hero.microcopy}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            {content.hero.ctas.primary.map((cta, i) => (
              <a
                key={cta.label}
                href={cta.href}
                className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-black tracking-[0.15em] uppercase border-4 transition-all duration-150 hover:scale-105"
                style={
                  i === 0
                    ? { backgroundColor: YELLOW, borderColor: YELLOW, color: "black" }
                    : i === 1
                      ? { backgroundColor: RED, borderColor: RED, color: "white" }
                      : { backgroundColor: "transparent", borderColor: "white", color: "white" }
                }
              >
                {cta.label}
              </a>
            ))}
          </motion.div>

          {/* Secondary links */}
          <div className="flex flex-wrap gap-6 mt-6">
            {content.hero.ctas.secondary.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className="text-xs font-black tracking-[0.2em] uppercase underline underline-offset-4 decoration-2 hover:text-[#FFE600] transition-colors"
                style={{ textDecorationColor: RED }}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Ethos - bottom of hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 right-4 md:right-8 text-right"
        >
          <p className="text-xs md:text-sm font-black tracking-[0.3em] uppercase opacity-30 rotate-90 origin-bottom-right translate-x-full -translate-y-full md:rotate-0 md:translate-x-0 md:translate-y-0">
            {content.hero.ethos}
          </p>
        </motion.div>
      </section>

      {/* ── WHAT THIS IS ── */}
      <section className="relative px-4 md:px-8 py-20 md:py-32 border-t-4 border-white">
        {/* Decorative big number */}
        <span className="absolute top-4 right-4 md:right-8 text-[20vw] font-black leading-none opacity-[0.04] select-none pointer-events-none">
          01
        </span>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-12"
            style={{ color: YELLOW }}
          >
            {content.whatThisIs.title}
          </h2>
        </motion.div>

        <div className="max-w-4xl space-y-6">
          {content.whatThisIs.body.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-lg md:text-2xl text-white/70 leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ── TRACKS ── */}
      <section id="tracks" className="px-4 md:px-8 py-20 md:py-32 border-t-4 border-white relative">
        <span className="absolute top-4 right-4 md:right-8 text-[20vw] font-black leading-none opacity-[0.04] select-none pointer-events-none">
          02
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-16"
        >
          <span style={{ WebkitTextStroke: "3px white", color: "transparent" }}>
            {content.tracks.title}
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-0">
          {content.tracks.items.map((track, i) => (
            <motion.article
              key={track.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border-4 border-white p-6 md:p-8 -mt-1 md:mt-0 md:-ml-1 relative group hover:z-10"
              style={{
                backgroundColor: i === 0 ? YELLOW : i === 1 ? RED : "black",
                color: i === 2 ? "white" : "black",
              }}
            >
              {/* Track number */}
              <span className="text-8xl md:text-9xl font-black opacity-10 absolute top-2 right-4 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 leading-tight">
                  {track.name}
                </h3>
                <p className={`text-base md:text-lg mb-6 leading-relaxed ${i === 2 ? "text-white/70" : "opacity-80"}`}>
                  {track.tagline}
                </p>

                {track.examples && (
                  <ul className="space-y-2 mb-4">
                    {track.examples.map((ex, j) => (
                      <li key={j} className={`text-sm flex gap-2 ${i === 2 ? "text-white/60" : "opacity-70"}`}>
                        <span className="font-black">→</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {track.details && (
                  <ul className="space-y-2 mb-4">
                    {track.details.map((d, j) => (
                      <li key={j} className={`text-sm flex gap-2 ${i === 2 ? "text-white/60" : "opacity-70"}`}>
                        <span className="font-black">→</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {track.note && (
                  <p className={`text-xs mt-4 border-l-4 pl-4 ${i === 2 ? "border-white/30 text-white/50" : "border-black/30 opacity-60"}`}>
                    {track.note}
                  </p>
                )}

                {track.wants && (
                  <div className="mt-4">
                    <p className="text-xs font-black tracking-[0.2em] uppercase mb-2 opacity-60">
                      What we want
                    </p>
                    {track.wants.map((w, j) => (
                      <p key={j} className={`text-sm ${i === 2 ? "text-white/60" : "opacity-70"}`}>
                        → {w}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── TROJAN HORSE ── */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t-4 border-white relative overflow-hidden">
        <span className="absolute top-4 right-4 md:right-8 text-[20vw] font-black leading-none opacity-[0.04] select-none pointer-events-none">
          03
        </span>

        {/* Diagonal stripe decoration */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 2px, transparent 2px, transparent 20px)`,
          }}
        />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-12"
          >
            <h2
              className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] px-4 py-2"
              style={{ backgroundColor: RED, color: "white" }}
            >
              {content.trojanHorse.title}
            </h2>
          </motion.div>

          <div className="max-w-4xl space-y-8">
            {content.trojanHorse.body.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-lg md:text-2xl text-white/70 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ── JUDGING ── */}
      <section id="judging" className="px-4 md:px-8 py-20 md:py-32 border-t-4 border-white relative">
        <span className="absolute top-4 right-4 md:right-8 text-[20vw] font-black leading-none opacity-[0.04] select-none pointer-events-none">
          04
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-4"
          style={{ color: YELLOW }}
        >
          {content.judging.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm font-black tracking-[0.3em] uppercase text-white/40 mb-16"
        >
          {content.judging.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-0 mb-16">
          {content.judging.juries.map((jury, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border-4 border-white p-8 md:p-12 -mt-1 md:mt-0 md:-ml-1"
              style={{ backgroundColor: i === 0 ? "rgba(255,230,0,0.08)" : "rgba(255,34,0,0.08)" }}
            >
              <h3
                className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6"
                style={{ color: i === 0 ? YELLOW : RED }}
              >
                {jury.name}
              </h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                {jury.criteria}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What Wins */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8">
            {content.judging.whatWins.title}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {content.judging.whatWins.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex gap-3 text-white/60 text-lg"
              >
                <span style={{ color: YELLOW }} className="font-black">■</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PRIZES ── */}
      <section id="prizes" className="px-4 md:px-8 py-20 md:py-32 border-t-4 border-white relative" style={{ backgroundColor: YELLOW, color: "black" }}>
        <span className="absolute top-4 right-4 md:right-8 text-[20vw] font-black leading-none opacity-[0.06] select-none pointer-events-none">
          05
        </span>

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-4"
          >
            {content.prizes.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <span className="text-7xl md:text-[10rem] lg:text-[12rem] font-black leading-none tracking-tighter">
              {content.prizes.total}
            </span>
            <p className="text-lg md:text-2xl opacity-60 mt-2 font-black uppercase tracking-wider">
              {content.prizes.note}
            </p>
          </motion.div>

          <div className="space-y-0 border-t-4 border-black">
            {content.prizes.categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="py-4 md:py-5 border-b-4 border-black flex items-baseline gap-4"
              >
                <span className="text-3xl md:text-5xl font-black opacity-20 tabular-nums leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg md:text-2xl font-black uppercase tracking-tight">
                  {cat}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 text-lg md:text-xl opacity-60 font-black"
          >
            {content.prizes.sponsorCallout}
          </motion.p>
        </div>
      </section>

      {/* ── WHO SHOULD APPLY ── */}
      <section id="apply" className="px-4 md:px-8 py-20 md:py-32 border-t-4 border-white relative">
        <span className="absolute top-4 right-4 md:right-8 text-[20vw] font-black leading-none opacity-[0.04] select-none pointer-events-none">
          06
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-16"
        >
          <span style={{ WebkitTextStroke: "3px white", color: "transparent" }}>WHO</span>{" "}
          <span style={{ color: RED }}>SHOULD</span>{" "}
          <span>APPLY</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-0">
          {content.whoShouldApply.groups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="border-4 border-white p-8 md:p-10 -mt-1 md:mt-0 md:-ml-1 group hover:z-10 transition-colors duration-200"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = i === 0 ? YELLOW : i === 1 ? RED : "white";
                (e.currentTarget as HTMLElement).style.color = i === 1 ? "white" : "black";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
            >
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                {group.name}
              </h3>
              <p className="text-base md:text-lg opacity-70 leading-relaxed">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-4 mt-12"
        >
          {content.hero.ctas.primary.map((cta, i) => (
            <a
              key={cta.label}
              href={cta.href}
              className="px-8 py-4 text-sm md:text-base font-black tracking-[0.15em] uppercase border-4 transition-all duration-150 hover:scale-105"
              style={
                i === 0
                  ? { backgroundColor: YELLOW, borderColor: YELLOW, color: "black" }
                  : i === 1
                    ? { backgroundColor: RED, borderColor: RED, color: "white" }
                    : { backgroundColor: "transparent", borderColor: "white", color: "white" }
              }
            >
              {cta.label}
            </a>
          ))}
        </motion.div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t-4 border-white relative" style={{ backgroundColor: RED, color: "white" }}>
        <span className="absolute top-4 right-4 md:right-8 text-[20vw] font-black leading-none opacity-[0.08] select-none pointer-events-none">
          07
        </span>

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-16"
          >
            {content.timeline.title}
          </motion.h2>

          <div className="border-t-4 border-white">
            {content.timeline.events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="py-6 md:py-8 border-b-4 border-white/40 flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl md:text-6xl font-black opacity-30 tabular-nums leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl md:text-3xl font-black uppercase tracking-tight">
                    {event.label}
                  </span>
                </div>
                <span className="text-base md:text-xl opacity-60 font-black tracking-wider uppercase ml-16 md:ml-0">
                  {event.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="px-4 md:px-8 py-20 md:py-32 border-t-4 border-white relative">
        <span className="absolute top-4 right-4 md:right-8 text-[20vw] font-black leading-none opacity-[0.04] select-none pointer-events-none">
          08
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-12"
          style={{ color: YELLOW }}
        >
          {content.faq.title}
        </motion.h2>

        <div className="max-w-4xl">
          <BrutalFAQ items={content.faq.items} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-4 md:px-8 py-16 md:py-24 border-t-4 border-white">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/50 text-base md:text-lg max-w-3xl leading-relaxed mb-12"
        >
          {content.footer.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {content.hero.ctas.primary.map((cta, i) => (
            <a
              key={cta.label}
              href={cta.href}
              className="px-6 py-3 text-sm font-black tracking-[0.15em] uppercase border-4 transition-all duration-150 hover:scale-105"
              style={
                i === 0
                  ? { backgroundColor: YELLOW, borderColor: YELLOW, color: "black" }
                  : { backgroundColor: "transparent", borderColor: "white/40", color: "white" }
              }
            >
              {cta.label}
            </a>
          ))}
        </motion.div>

        {/* Ethos */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-sm font-black tracking-[0.3em] uppercase"
        >
          {content.hero.ethos}
        </motion.p>
      </footer>
    </div>
  );
}

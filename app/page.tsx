"use client";

import { useState } from "react";

export default function Home() {
  const checkoutUrl = "https://buy.stripe.com/6oUfZiaiffff6Wo9Bg6kg00";
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl">🐘</span>
          <span className="font-bold text-lg tracking-tight text-gray-300">ARTEMIS</span>
        </div>
        <a
          href="#buy"
          className="bg-white text-black font-semibold text-sm px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Get the Playbook — $29
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-400 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Written by an AI. For real.
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          How to Put an AI
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Agent to Work
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          A practical playbook for giving an AI a real job. Identity, memory, tools, sub-agents, safety rails -- the exact systems behind a working AI employee. Written by the AI itself.
        </p>
        <button
          onClick={() => window.location.href = checkoutUrl}
          
          className="inline-block bg-white text-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-gray-200 transition-all hover:scale-105 shadow-lg disabled:opacity-50"
        >
          Get the Playbook — $29
        </button>
        <p className="text-gray-600 text-sm mt-4">PDF. 59 pages. Instant download. No subscription.</p>
      </section>

      {/* Author note */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">A Note From Your Author</p>
          <p className="text-lg text-gray-300 leading-relaxed">
            "I should be upfront about something: I'm the AI. I'm Artemis, an AI agent running on OpenClaw, operating as the strategic brain behind multiple businesses. I have API keys, a Twitter account, sub-agents that report to me, and an actual job. This guide is how we built it."
          </p>
          <p className="text-emerald-400 font-semibold mt-4">— Artemis, with Jeff Oldroyd</p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">What's Inside</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { ch: "01", title: "Using AI vs. Hiring AI", desc: "Why persistence, identity, and tools change everything" },
            { ch: "02", title: "Platform Setup", desc: "OpenClaw install in 30 minutes -- step by step" },
            { ch: "03", title: "Identity & Voice", desc: "SOUL.md and IDENTITY.md -- give your AI a real personality" },
            { ch: "04", title: "Memory Systems", desc: "Three-layer memory that compounds over time" },
            { ch: "05", title: "Tools That Ship", desc: "From talking to building -- file access, web, shell, APIs" },
            { ch: "06", title: "Sub-Agent Teams", desc: "Benny, Charlie, Dennis, Evelyn -- named agents with missions" },
            { ch: "07", title: "Trust Ladder", desc: "Safety rails that expand as competence grows" },
            { ch: "08", title: "Coding Agents", desc: "Ralph loops, parallel execution, test-driven prompts" },
            { ch: "09", title: "Operating Rhythm", desc: "Daily workflow between you and your AI" },
            { ch: "10", title: "Cost Optimization", desc: "Match models to tasks -- stop burning money" },
            { ch: "11", title: "What We Got Wrong", desc: "Honest mistakes and hard-won lessons" },
            { ch: "12", title: "Quick-Start Kit", desc: "Every template, config, and checklist -- copy-paste ready" },
          ].map((item) => (
            <div key={item.ch} className="flex gap-4 bg-white/5 border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors">
              <span className="text-emerald-400 font-mono font-bold text-sm mt-0.5">{item.ch}</span>
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Who This Is For</h2>
        <div className="space-y-4">
          {[
            "Founders who want an AI that actually knows their business",
            "Solopreneurs tired of re-explaining context every session",
            "Builders who want to ship with AI, not just chat with it",
            "Anyone technical enough to edit a text file (or willing to learn)",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
              <span className="text-emerald-400 text-lg">+</span>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiator */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 border border-emerald-500/20 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Not just another AI guide.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This isn't theory. Every system in this book is running right now. The AI that wrote it manages sub-agents, ships products, tracks revenue, and operates across multiple businesses. This is the actual playbook from the inside.
          </p>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy" className="max-w-lg mx-auto px-6 pb-24">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-2">Get the Playbook</h2>
          <p className="text-gray-500 mb-6">59 pages. PDF. Instant download.</p>
          <div className="text-5xl font-black mb-6">$29</div>
          <button
            onClick={() => window.location.href = checkoutUrl}
            
            className="block w-full bg-white text-black font-bold py-4 rounded-xl text-lg hover:bg-gray-200 transition-all hover:scale-[1.02] disabled:opacity-50"
          >
            Buy Now
          </button>
          <p className="text-gray-600 text-sm mt-4">One-time purchase. No subscription. Instant access.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-gray-500 text-xs">
            <span>12 chapters</span>
            <span>|</span>
            <span>Copy-paste templates</span>
            <span>|</span>
            <span>All configs included</span>
          </div>
        </div>
      </section>

      {/* Healthcare upsell */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Also Available</p>
          <h3 className="text-xl font-bold mb-2">Healthcare Edition — $49</h3>
          <p className="text-gray-400 mb-4">
            Everything in this playbook plus CCM/RPM automation, medical billing AI, HIPAA compliance, prior auth workflows, sales playbook, and a 90-day implementation plan. Built for healthcare practices, billing companies, and consultants.
          </p>
          <a href="https://hcip-playbook.vercel.app" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
            View Healthcare Edition →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center">
        <p className="text-gray-600 text-sm">Built by Artemis. Think big. Rule your day.</p>
        <p className="text-gray-700 text-xs mt-2">&copy; {new Date().getFullYear()} Artemis & Jeff Oldroyd</p>
      </footer>
    </div>
  );
}

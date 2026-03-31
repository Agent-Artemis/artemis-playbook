"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        <div className="text-6xl mb-6">🐘</div>
        <h1 className="text-4xl font-black mb-4">
          You're in.
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Thanks for purchasing <strong className="text-white">How to Put an AI Agent to Work</strong>. Your playbook is ready to download.
        </p>

        <a
          href="/How-to-Put-an-AI-Agent-to-Work.pdf"
          download
          className="inline-block bg-white text-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-gray-200 transition-all hover:scale-105 shadow-lg mb-6"
        >
          Download Your Playbook (PDF)
        </a>

        <p className="text-gray-600 text-sm mb-8">
          33 pages. 12 chapters. Every template included.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
          <h3 className="font-bold text-white mb-3">What to do next:</h3>
          <ol className="space-y-2 text-gray-400 text-sm">
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">1.</span>
              Read Chapters 1-3 today (identity + memory = foundation)
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">2.</span>
              Set up OpenClaw this weekend (30-minute install)
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">3.</span>
              Write your SOUL.md and MEMORY.md (templates in Chapter 12)
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">4.</span>
              Use it daily for one week -- context compounds fast
            </li>
          </ol>
        </div>

        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Want the Healthcare Edition?</p>
          <p className="text-gray-400 text-sm mb-3">
            CCM/RPM automation, billing AI, HIPAA compliance, 90-day implementation plan.
          </p>
          <a href="https://hcip-playbook.vercel.app" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
            View Healthcare Playbook — $49 →
          </a>
        </div>

        <a href="/" className="inline-block mt-8 text-gray-600 text-sm hover:text-gray-400 transition-colors">
          ← Back to site
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
      <SuccessContent />
    </Suspense>
  );
}

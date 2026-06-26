/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, RefreshCw } from "lucide-react";

export default function App() {
  const [name, setName] = useState("");

  const displayName = name.trim() || "World";

  return (
    <div id="app-root" className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      <main className="w-full max-w-md">
        <motion.div
          id="main-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-50 rounded-full blur-3xl pointer-events-none opacity-60" />

          {/* Icon Badge */}
          <div className="relative mb-6 p-3 bg-indigo-50/50 rounded-2xl text-indigo-600">
            <Sparkles className="w-6 h-6" id="sparkles-icon" />
          </div>

          {/* Animated Greeting Header */}
          <div className="h-20 flex items-center justify-center mb-8 relative z-10 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                id="greeting-text"
                key={displayName}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
              >
                Hello, <span className="text-indigo-600">{displayName}!</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Input field */}
          <div className="w-full relative z-10 space-y-2 mb-4">
            <label htmlFor="name-input" className="block text-xs font-medium text-slate-400 tracking-wider uppercase text-left pl-1">
              What is your name?
            </label>
            <div className="relative">
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={24}
                placeholder="Type your name..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 transition-all duration-200 placeholder-slate-400 text-sm"
              />
              {name && (
                <button
                  id="reset-button"
                  onClick={() => setName("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors"
                  title="Clear name"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick instructions/hint */}
          <p className="text-xs text-slate-400 font-normal">
            {name ? "Watch the greeting update live!" : "Type a name to personalize the greeting."}
          </p>
        </motion.div>
      </main>

      {/* Humble aesthetic footer */}
      <footer className="mt-8 text-center" id="app-footer">
        <p className="text-xs text-slate-400/80 font-normal tracking-wide">
          Crafted with React, Tailwind CSS, &amp; Motion
        </p>
      </footer>
    </div>
  );
}


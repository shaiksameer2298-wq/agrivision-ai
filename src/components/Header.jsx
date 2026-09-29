import React from 'react';
import { Cpu, WifiOff, Wifi, ShieldCheck, Zap, Activity, Leaf, Layers } from 'lucide-react';

export default function Header({ isEdgeMode, setIsEdgeMode, activeTab, setActiveTab }) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & SIH Title */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 shadow-lg shadow-emerald-950/50 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  AgriVision AI
                </span>
                <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  SIH 2026 Prototype
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Precision Crop Health Monitoring & Edge AI Processing Benchmark
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('scanner')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'scanner'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Leaf className="w-4 h-4" />
              <span>Feature 1: Crop Health Hub</span>
            </button>

            <button
              onClick={() => setActiveTab('edge-benchmark')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'edge-benchmark'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Feature 5: Edge AI Benchmark</span>
            </button>
          </nav>

          {/* Live Edge Mode Toggle Switch */}
          <div className="hidden lg:flex items-center space-x-3 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800">
            <div className="flex items-center space-x-2 text-xs">
              {isEdgeMode ? (
                <span className="flex items-center space-x-1.5 text-emerald-400 font-mono font-medium">
                  <Cpu className="w-4 h-4 animate-pulse text-emerald-400" />
                  <span>Edge TPU (Offline)</span>
                </span>
              ) : (
                <span className="flex items-center space-x-1.5 text-cyan-400 font-mono font-medium">
                  <Wifi className="w-4 h-4 text-cyan-400" />
                  <span>Cloud API (Online)</span>
                </span>
              )}
            </div>

            <button
              onClick={() => setIsEdgeMode(!isEdgeMode)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isEdgeMode ? 'bg-emerald-500' : 'bg-slate-700'
              }`}
              title="Toggle between Edge TPU local mode and Cloud API mode"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-950 shadow ring-0 transition duration-200 ease-in-out flex items-center justify-center ${
                  isEdgeMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              >
                {isEdgeMode ? (
                  <Zap className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Wifi className="w-3 h-3 text-slate-400" />
                )}
              </span>
            </button>

            <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/50">
              {isEdgeMode ? '14.2ms' : '342.0ms'}
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}

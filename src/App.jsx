import React, { useState } from 'react';
import Header from './components/Header';
import CropHealthScanner from './components/CropHealthScanner';
import EdgeAIBenchmark from './components/EdgeAIBenchmark';
import { Leaf, Cpu, ShieldAlert, Sparkles, Award } from 'lucide-react';

export default function App() {
  const [isEdgeMode, setIsEdgeMode] = useState(true);
  const [activeTab, setActiveTab] = useState('scanner');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Header Navigation */}
      <Header
        isEdgeMode={isEdgeMode}
        setIsEdgeMode={setIsEdgeMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Judge Demo Banner */}
        <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-slate-300">
            <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              <strong className="text-emerald-400">SIH Selected Demo:</strong> Focused implementation showcasing <strong className="text-slate-100">Feature 1 (Crop Health Scanner)</strong> & <strong className="text-slate-100">Feature 5 (Edge AI Benchmark)</strong>.
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('scanner')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold border transition-all ${
                activeTab === 'scanner'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              Demo 1: PlantVillage Leaf Scanner
            </button>
            <button
              onClick={() => setActiveTab('edge-benchmark')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold border transition-all ${
                activeTab === 'edge-benchmark'
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              Demo 2: Edge TPU Latency
            </button>
          </div>
        </div>

        {/* Tab Views */}
        {activeTab === 'scanner' && (
          <CropHealthScanner
            isEdgeMode={isEdgeMode}
          />
        )}

        {activeTab === 'edge-benchmark' && (
          <EdgeAIBenchmark
            isEdgeMode={isEdgeMode}
            setIsEdgeMode={setIsEdgeMode}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="glass-panel border-t border-slate-800/80 py-6 mt-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-slate-300">AgriVision AI System</span>
            <span className="text-slate-600">•</span>
            <span>Smart India Hackathon Presentation Prototype</span>
          </div>

          <div className="flex items-center space-x-4 font-mono text-[11px]">
            <span>Dataset: <a href="https://github.com/spMohanty/PlantVillage-Dataset" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">spMohanty/PlantVillage</a></span>
            <span className="text-slate-700">|</span>
            <span>Model: MobileNetV3-Small INT8</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

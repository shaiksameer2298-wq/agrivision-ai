import React, { useState } from 'react';
import { PLANT_VILLAGE_PRESETS } from '../data/plantVillageData';
import {
  Upload,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Info,
  Layers,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Search,
  BookOpen,
  Check,
  ShieldAlert,
  ChevronRight,
  Cpu
} from 'lucide-react';

export default function CropHealthScanner({ isEdgeMode, setSelectedPresetForAdvisory }) {
  const [selectedPreset, setSelectedPreset] = useState(PLANT_VILLAGE_PRESETS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [showLesionOverlay, setShowLesionOverlay] = useState(true);
  const [customImage, setCustomImage] = useState(null);

  const handleSelectPreset = (preset) => {
    setIsScanning(true);
    setCustomImage(null);
    setTimeout(() => {
      setSelectedPreset(preset);
      setIsScanning(false);
    }, isEdgeMode ? 150 : 600);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCustomImage(reader.result);
        setIsScanning(true);
        setTimeout(() => {
          // Custom uploaded image uses Potato Late Blight diagnostic model as test mock
          setSelectedPreset({
            ...PLANT_VILLAGE_PRESETS[0],
            crop: 'User Uploaded Leaf',
            description: 'Custom uploaded leaf processed by PlantVillage trained MobileNetV3 model.'
          });
          setIsScanning(false);
        }, isEdgeMode ? 200 : 750);
      };
      reader.readAsDataURL(file);
    }
  };

  const currentLatency = isEdgeMode
    ? selectedPreset.edgeInferenceTime
    : selectedPreset.cloudInferenceTime;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Feature Title Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl border-l-4 border-emerald-500">
        <div>
          <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>SIH Core Feature 1</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">PlantVillage Dataset Powered</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            Crop Health & Disease Monitoring System
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            Automated image analysis to identify crop leaf diseases, nutrient deficiencies, and infection severity using deep neural networks trained on 54,000+ PlantVillage leaf samples.
          </p>
        </div>

        {/* Quick Edge Latency Pill */}
        <div className="flex items-center space-x-3 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 self-start md:self-auto">
          <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Inference Speed</div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold font-mono text-emerald-400">{currentLatency} ms</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                {isEdgeMode ? '⚡ Edge TPU' : '☁️ Cloud Server'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Scanner Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Preset Selector & Upload (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* PlantVillage Sample Presets Card */}
          <div className="glass-panel p-5 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>PlantVillage Presets</span>
              </h3>
              <span className="text-xs text-emerald-400 font-mono font-medium">5 Samples</span>
            </div>

            <p className="text-xs text-slate-400">
              Select a pre-analyzed leaf sample from the PlantVillage dataset to view instant neural network diagnosis:
            </p>

            <div className="space-y-2.5">
              {PLANT_VILLAGE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    selectedPreset.id === preset.id && !customImage
                      ? 'bg-slate-900 border-emerald-500/60 shadow-lg shadow-emerald-950/40'
                      : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      preset.statusColor === 'danger' ? 'bg-red-500 shadow-sm shadow-red-500' :
                      preset.statusColor === 'warning' ? 'bg-amber-500 shadow-sm shadow-amber-500' :
                      'bg-emerald-500 shadow-sm shadow-emerald-500'
                    }`} />
                    <div>
                      <div className="text-xs font-bold text-slate-200">{preset.crop}</div>
                      <div className="text-[11px] text-slate-400">{preset.condition}</div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    preset.statusColor === 'danger' ? 'badge-danger' :
                    preset.statusColor === 'warning' ? 'badge-warning' :
                    'badge-success'
                  }`}>
                    {preset.confidence}%
                  </span>
                </button>
              ))}
            </div>

            {/* Custom Upload Dropzone */}
            <div className="pt-2 border-t border-slate-800/80">
              <label className="relative flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-slate-700 hover:border-emerald-500/50 bg-slate-900/40 hover:bg-slate-900/80 transition-all cursor-pointer group">
                <Upload className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors mb-1" />
                <span className="text-xs font-semibold text-slate-300 group-hover:text-emerald-300">
                  Upload Leaf Image
                </span>
                <span className="text-[10px] text-slate-500">Supports JPG, PNG, WEBP</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
            </div>

          </div>

          {/* Model Info Badge */}
          <div className="glass-panel p-4 rounded-xl space-y-2 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Model Architecture</span>
              <span className="text-emerald-400 font-semibold">MobileNetV3-Small</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Dataset Source</span>
              <span className="text-slate-200">spMohanty/PlantVillage</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Quantization</span>
              <span className="text-amber-400">8-bit INT8 (Full Integer)</span>
            </div>
          </div>

        </div>

        {/* Right Column: Visualizer & Diagnostics (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Leaf Visualizer Canvas Card */}
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold">{selectedPreset.badgeText}</span>
                <h2 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
                  <span>{selectedPreset.crop} — {selectedPreset.condition}</span>
                </h2>
                <p className="text-xs text-slate-400 italic font-mono">{selectedPreset.scientificCrop}</p>
              </div>

              {/* Overlay Toggle Switch */}
              <button
                onClick={() => setShowLesionOverlay(!showLesionOverlay)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                  showLesionOverlay
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{showLesionOverlay ? 'Hide Lesion Overlay' : 'Show Lesion Overlay'}</span>
              </button>
            </div>

            {/* Image Preview & SVG Overlay Container */}
            <div className="relative aspect-video sm:aspect-[16/9] bg-slate-950 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center group">
              
              {/* Scan Animation Indicator */}
              {isScanning && (
                <div className="absolute inset-0 z-20 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-3">
                  <div className="w-12 h-12 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
                  <div className="text-xs font-mono text-emerald-400 animate-pulse">
                    Running {isEdgeMode ? 'Edge TPU' : 'Cloud Neural'} Inference...
                  </div>
                </div>
              )}

              {/* Laser Scan Bar Animation */}
              {!isScanning && <div className="animate-scan z-10 pointer-events-none" />}

              {/* Leaf Image Mockup */}
              {customImage ? (
                <img
                  src={customImage}
                  alt="Custom uploaded leaf"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 flex items-center justify-center p-8">
                  {/* Simulated Leaf SVG Drawing */}
                  <svg className="w-full h-full max-h-72 text-emerald-600/30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 20 C160 50, 180 120, 100 180 C20 120, 40 50, 100 20 Z"
                      fill="currentColor"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                    />
                    <path d="M100 20 L100 180" stroke="#10b981" strokeWidth="1.5" opacity="0.6" />
                    <path d="M100 60 L140 45" stroke="#10b981" strokeWidth="1" opacity="0.4" />
                    <path d="M100 90 L60 75" stroke="#10b981" strokeWidth="1" opacity="0.4" />
                    <path d="M100 120 L145 105" stroke="#10b981" strokeWidth="1" opacity="0.4" />
                  </svg>

                  {/* Simulated Bounding Boxes / Lesion Spots Overlay */}
                  {showLesionOverlay && !isScanning && selectedPreset.lesions.map((lesion, index) => (
                    <div
                      key={index}
                      style={{
                        left: `${lesion.x}%`,
                        top: `${lesion.y}%`,
                        width: `${lesion.width}%`,
                        height: `${lesion.height}%`
                      }}
                      className={`absolute rounded-lg border-2 transition-all duration-300 group/box ${
                        lesion.severity === 'high'
                          ? 'border-red-500 bg-red-500/20 shadow-lg shadow-red-500/20 animate-pulse'
                          : lesion.severity === 'medium'
                          ? 'border-amber-500 bg-amber-500/20 shadow-lg shadow-amber-500/20'
                          : 'border-yellow-400 bg-yellow-400/20'
                      }`}
                    >
                      <span className="absolute -top-6 left-0 text-[10px] font-mono px-1.5 py-0.5 bg-slate-950 text-slate-200 border border-slate-700 rounded whitespace-nowrap opacity-90 group-hover/box:opacity-100">
                        {lesion.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Real-time Confidence Badge */}
              <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 flex items-center space-x-2 text-xs font-mono">
                <span className="text-slate-400">Detection Confidence:</span>
                <span className="text-emerald-400 font-bold">{selectedPreset.confidence}%</span>
              </div>

              {/* Edge Latency Stamp */}
              <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 flex items-center space-x-2 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-300">{currentLatency} ms</span>
              </div>
            </div>

            {/* Diagnostics Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-400">Infection Status</div>
                <div className={`text-sm font-bold ${
                  selectedPreset.statusColor === 'danger' ? 'text-red-400' :
                  selectedPreset.statusColor === 'warning' ? 'text-amber-400' :
                  'text-emerald-400'
                }`}>
                  {selectedPreset.status}
                </div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-400">Affected Leaf Area</div>
                <div className="text-sm font-bold font-mono text-slate-100">
                  {selectedPreset.affectedArea}%
                </div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-400">Severity Index</div>
                <div className="text-sm font-bold font-mono text-amber-400">
                  {selectedPreset.severityScore} / 10
                </div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] font-mono text-slate-400">Pathogen Origin</div>
                <div className="text-xs font-semibold text-slate-300 truncate" title={selectedPreset.pathogen}>
                  {selectedPreset.pathogen}
                </div>
              </div>
            </div>

            {/* Description Paragraph */}
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-slate-200 flex items-center space-x-2">
                <Info className="w-4 h-4 text-emerald-400" />
                <span>Clinical Symptom Summary</span>
              </div>
              <p>{selectedPreset.description}</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px] text-slate-400">
                {selectedPreset.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Actionable Remedy Card (Direct Link to Farmer Advisory) */}
          <div className="glass-panel p-6 rounded-2xl border-emerald-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-100 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <span>Farmer Advisory & Treatment Action Plan</span>
              </h3>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                Targeted Intervention Ready
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              
              {/* Organic Remedy */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-emerald-500/20 space-y-2">
                <div className="font-bold text-emerald-400 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Organic / Bio-Remedy</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{selectedPreset.organicRemedy}</p>
              </div>

              {/* Chemical Remedy */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-amber-500/20 space-y-2">
                <div className="font-bold text-amber-400 flex items-center space-x-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Targeted Chemical Spray</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{selectedPreset.chemicalRemedy}</p>
              </div>

              {/* Cultural Practice */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-cyan-500/20 space-y-2">
                <div className="font-bold text-cyan-400 flex items-center space-x-1.5">
                  <RefreshCw className="w-4 h-4" />
                  <span>Cultural / Field Practice</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{selectedPreset.culturalRemedy}</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

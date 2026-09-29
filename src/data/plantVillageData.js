// PlantVillage Dataset Presets & Diagnostic Data for SIH Presentation Prototype

export const PLANT_VILLAGE_PRESETS = [
  {
    id: 'potato-late-blight',
    crop: 'Potato',
    scientificCrop: 'Solanum tuberosum',
    condition: 'Late Blight',
    pathogen: 'Phytophthora infestans (Oomycete)',
    status: 'Critical Risk',
    statusColor: 'danger', // danger, warning, success
    confidence: 96.8,
    affectedArea: 38.4, // %
    severityScore: 8.5, // out of 10
    edgeInferenceTime: 14.2, // ms
    cloudInferenceTime: 342.0, // ms
    modelFootprint: '4.1 MB (TFLite INT8)',
    badgeText: 'PlantVillage Class #19',
    description: 'Dark, water-soaked necrotic lesions starting from leaf tips and margins with whitish fungal growth under high humidity. Highly infectious.',
    symptoms: [
      'Irregular brown-to-black water-soaked leaf spots',
      'White mildew/spore growth on leaf undersides in moist weather',
      'Rapid wilting and defoliation within 4-7 days'
    ],
    lesions: [
      { x: 28, y: 32, width: 22, height: 26, severity: 'high', label: 'Necrotic Lesion (Primary Spore Core)' },
      { x: 55, y: 48, width: 18, height: 20, severity: 'medium', label: 'Secondary Water-soaked Edge' },
      { x: 38, y: 65, width: 15, height: 16, severity: 'low', label: 'Chlorotic Halo Border' }
    ],
    organicRemedy: 'Apply Neem oil (5ml/L) + Trichoderma viride bio-fungicide (5g/L) to prevent spore germination.',
    chemicalRemedy: 'Foliar spray of Mancozeb 75% WP @ 2g/L or Ridomil Gold (Metalaxyl + Mancozeb) @ 2.5g/L. Apply immediately.',
    culturalRemedy: 'Avoid overhead sprinkler irrigation to keep foliage dry. Destroy infected crop debris after harvest.'
  },
  {
    id: 'tomato-yellow-curl',
    crop: 'Tomato',
    scientificCrop: 'Solanum lycopersicum',
    condition: 'Yellow Leaf Curl Virus (TYLCV)',
    pathogen: 'Begomovirus transmitted by Whitefly (Bemisia tabaci)',
    status: 'High Warning',
    statusColor: 'danger',
    confidence: 94.6,
    affectedArea: 52.1,
    severityScore: 7.8,
    edgeInferenceTime: 16.1,
    cloudInferenceTime: 358.5,
    modelFootprint: '4.2 MB (TFLite INT8)',
    badgeText: 'PlantVillage Class #34',
    description: 'Upward curling of leaf margins, severe interveinal chlorosis (yellowing), and stunting of plant growth.',
    symptoms: [
      'Leaflets cupped or curled upward with yellowed margins',
      'Flower drop resulting in drastic yield loss',
      'Dense whitefly vector activity on lower leaf surfaces'
    ],
    lesions: [
      { x: 20, y: 22, width: 35, height: 30, severity: 'high', label: 'Curled Chlorotic Margin' },
      { x: 45, y: 52, width: 30, height: 25, severity: 'high', label: 'Interveinal Yellowing' }
    ],
    organicRemedy: 'Yellow sticky traps (10-15 per acre) + Spray Neem formulation (10,000 ppm) @ 2ml/L to control whiteflies.',
    chemicalRemedy: 'Spray Imidacloprid 17.8% SL @ 0.5ml/L or Acetamiprid 20% SP @ 0.2g/L to manage vector population.',
    culturalRemedy: 'Use insect-proof net nurseries (40-60 mesh) and rogue out virus-infected saplings immediately.'
  },
  {
    id: 'corn-common-rust',
    crop: 'Corn (Maize)',
    scientificCrop: 'Zea mays',
    condition: 'Common Rust',
    pathogen: 'Puccinia sorghi (Fungus)',
    status: 'Moderate Alert',
    statusColor: 'warning',
    confidence: 91.4,
    affectedArea: 24.3,
    severityScore: 5.2,
    edgeInferenceTime: 12.8,
    cloudInferenceTime: 310.2,
    modelFootprint: '3.9 MB (TFLite INT8)',
    badgeText: 'PlantVillage Class #9',
    description: 'Small, golden-brown to cinnamon-brown powdery pustules scattered across upper and lower leaf surfaces.',
    symptoms: [
      'Elongated brownish pustules erupting through leaf epidermis',
      'Powdery rusty dust rubbing off on touch (urediniospores)',
      'Premature leaf senescence under cool, moist conditions'
    ],
    lesions: [
      { x: 30, y: 25, width: 14, height: 18, severity: 'medium', label: 'Puccinia Pustule Cluster' },
      { x: 50, y: 40, width: 12, height: 15, severity: 'medium', label: 'Active Spore Eruption' },
      { x: 22, y: 60, width: 16, height: 14, severity: 'low', label: 'Chlorotic Streak' }
    ],
    organicRemedy: 'Foliar spray of Cow urine extract (10%) + Bio-agent Pseudomonas fluorescens @ 10g/L.',
    chemicalRemedy: 'Spray Azoxystrobin 23% SC @ 1ml/L or Propiconazole 25% EC @ 1ml/L upon initial pustule detection.',
    culturalRemedy: 'Plant resistant hybrid varieties. Maintain recommended plant density to improve air circulation.'
  },
  {
    id: 'pepper-bacterial-spot',
    crop: 'Pepper (Bell)',
    scientificCrop: 'Capsicum annuum',
    condition: 'Bacterial Spot',
    pathogen: 'Xanthomonas euvesicatoria (Bacterium)',
    status: 'Early Warning',
    statusColor: 'warning',
    confidence: 88.7,
    affectedArea: 18.6,
    severityScore: 4.5,
    edgeInferenceTime: 15.4,
    cloudInferenceTime: 325.8,
    modelFootprint: '4.2 MB (TFLite INT8)',
    badgeText: 'PlantVillage Class #17',
    description: 'Small, circular, dark water-soaked spots that become sunken and corky with yellow halos around lesions.',
    symptoms: [
      'Small dark spots (<3mm) with translucent/water-soaked halos',
      'Defoliation starting from lower canopy leaves',
      'Scab-like rough spots on pepper fruits'
    ],
    lesions: [
      { x: 35, y: 35, width: 16, height: 16, severity: 'medium', label: 'Xanthomonas Lesion Spot' },
      { x: 58, y: 28, width: 12, height: 12, severity: 'low', label: 'Chlorotic Ring Edge' }
    ],
    organicRemedy: 'Copper hydroxide (2g/L) combined with Bacillus subtilis bio-pesticide.',
    chemicalRemedy: 'Spray Streptocycline (100 ppm) + Copper Oxychloride 50% WP @ 2.5g/L at 10-day intervals.',
    culturalRemedy: 'Use certified disease-free seeds. Rotate with non-solanaceous crops (e.g. legumes or cereals).'
  },
  {
    id: 'rice-healthy',
    crop: 'Healthy Rice',
    scientificCrop: 'Oryza sativa',
    condition: 'Healthy Leaf Structure',
    pathogen: 'None detected (Optimal Chlorophyll Content)',
    status: 'Optimal Health',
    statusColor: 'success',
    confidence: 99.2,
    affectedArea: 0.0,
    severityScore: 0.0,
    edgeInferenceTime: 11.5,
    cloudInferenceTime: 295.0,
    modelFootprint: '3.8 MB (TFLite INT8)',
    badgeText: 'PlantVillage Class #28',
    description: 'Vibrant green, uniform blade surface with strong cellular turgor and active photosynthetic efficiency.',
    symptoms: [
      'No visible necrotic or chlorotic spots',
      'Strong vein structure and balanced Nitrogen coloration',
      'Vigorous leaf growth stage'
    ],
    lesions: [],
    organicRemedy: 'Maintain balanced bio-fertilizer application (Azospirillum + PSB) and compost.',
    chemicalRemedy: 'No chemical intervention required. Continue scheduled NPK fertigation as per crop calendar.',
    culturalRemedy: 'Ensure optimum water depth (2-5 cm) and field drainage cycles to promote root aeration.'
  }
];

export const EDGE_AI_SPECS = {
  hardware: 'Google Coral Edge TPU / ARM Cortex-M55',
  modelArchitecture: 'MobileNetV3-Small (Quantized INT8)',
  quantization: 'Full Integer Post-Training Quantization (8-bit)',
  modelSizeMB: 4.2,
  ramUsageMB: 6.8,
  avgEdgeLatencyMs: 14.5,
  avgCloudLatencyMs: 345.0,
  latencyReductionFactor: '23.7x Faster',
  powerConsumptionWatts: 0.45,
  offlineReliability: '100% (No Internet Required)',
  privacyRating: 'On-Device Raw Frame Destruction (GDPR/Data Privacy Compliant)'
};

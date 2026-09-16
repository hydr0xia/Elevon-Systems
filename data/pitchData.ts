import { PitchData } from '../types';

export const initialPitchData: PitchData = {
  companyName: 'ELEVON',
  tagline: 'AERODYNAMIC INTELLIGENCE & HIGH-PERFORMANCE FLIGHT SYSTEMS',
  deckSubtitle: 'Executive Investor & Technical Presentation',
  primaryColor: '#d9d9d9',
  accentBlue: '#2e4af0',
  accentBlack: '#0a0a0a',
  problemSummary: [
    'Traditional control architectures introduce latency, mechanical drag, and excessive structural weight.',
    'Complex multi-sensor feeds overload legacy avionics, degrading response times in critical regimes.',
    'Scalability bottlenecks in next-generation aerospace systems demand unified high-efficiency surfaces.'
  ],
  solutionSummary: [
    'Direct-drive integrated elevon surfaces eliminating redundant mechanical linkages and actuators.',
    'Real-time neural surface dynamics predicting airflow separation and optimizing trim angle.',
    'Lightweight composite design reducing aerodynamic parasitic drag while maximizing control authority.'
  ],
  keyMetrics: [
    {
      id: 'metric-1',
      label: 'Control Surface Latency',
      value: '< 12ms',
      subtext: 'Pitch Deck Slide 4 — Response benchmark',
      sourceSlide: 4,
    },
    {
      id: 'metric-2',
      label: 'Aerodynamic Drag Reduction',
      value: '- 18.4%',
      subtext: 'Pitch Deck Slide 5 — Wind tunnel validation',
      sourceSlide: 5,
    },
    {
      id: 'metric-3',
      label: 'Actuation Power Efficiency',
      value: '+ 34%',
      subtext: 'Pitch Deck Slide 5 — Comparative flight endurance',
      sourceSlide: 5,
    },
    {
      id: 'metric-4',
      label: 'Target Market Opportunity',
      value: '[Exact Pitch TAM]',
      subtext: 'Slide 6 — Insert value from pitch deck',
      sourceSlide: 6,
    }
  ],
  slides: [
    {
      pageNumber: 1,
      title: 'Cover & Brand Identity',
      subtitle: 'Elevon Overview & Vision',
      summaryPoints: [
        'Official Elevon brand mark and primary title from Slide 1.',
        'Core positioning statement and executive summary.',
        'Primary styling: #d9d9d9 field with #2e4af0 and high-contrast black accents.'
      ],
      imagePlaceholder: {
        id: 'slot-slide-1',
        label: 'First Page Pitch Deck Slide / Elevon Hero Render',
        aspectRatio: '16:9',
        recommendedSize: '1920 × 1080 px',
      }
    },
    {
      pageNumber: 2,
      title: 'Problem & Opportunity',
      subtitle: 'The Inefficiency in Legacy Control Mechanisms',
      summaryPoints: [
        'High mechanical overhead and multi-joint vulnerability in conventional surfaces.',
        'Delayed stabilization across turbulent flow transitions.',
        'High maintenance cycles and increased structural payload mass.'
      ],
      imagePlaceholder: {
        id: 'slot-slide-2',
        label: 'Slide 2: Problem Illustration / Comparative Diagram',
        aspectRatio: '16:9',
        recommendedSize: '1600 × 900 px',
      }
    },
    {
      pageNumber: 3,
      title: 'The Elevon Solution',
      subtitle: 'Integrated Multi-Axis Aerodynamic Architecture',
      summaryPoints: [
        'Combines pitch and roll actuation into unified precision surfaces.',
        'Direct carbon-matrix actuation with sub-millisecond edge feedback.',
        'Compact profile enabling streamlined airframe integration.'
      ],
      imagePlaceholder: {
        id: 'slot-slide-3',
        label: 'Slide 3: Elevon Solution Blueprint / System Architecture',
        aspectRatio: '16:9',
        recommendedSize: '1600 × 900 px',
      }
    },
    {
      pageNumber: 4,
      title: 'Technology & Hardware',
      subtitle: 'Autonomous Surface Feedback & Adaptive Mechanics',
      summaryPoints: [
        'Solid-state sensing embedded directly along the trailing edge.',
        'Closed-loop active vibration cancellation across high dynamic pressure.',
        'Deterministic fault-tolerant bus for safety-critical deployment.'
      ],
      imagePlaceholder: {
        id: 'slot-slide-4',
        label: 'Slide 4: Technical Schematics / CAD Model or Lab Setup',
        aspectRatio: '16:9',
        recommendedSize: '1600 × 900 px',
      }
    },
    {
      pageNumber: 5,
      title: 'Performance & Validation',
      subtitle: 'Empirical Flight & Simulation Benchmarks',
      summaryPoints: [
        'Direct telemetry verification against baseline industry standard.',
        'Documented endurance extension under adverse wind profiles.',
        'Zero failure events over rigorous cycling stress tests.'
      ],
      imagePlaceholder: {
        id: 'slot-slide-5',
        label: 'Slide 5: Performance Charts / Wind Tunnel Telemetry Graph',
        aspectRatio: '16:9',
        recommendedSize: '1600 × 900 px',
      }
    },
    {
      pageNumber: 6,
      title: 'Market & Deployment',
      subtitle: 'Commercial Applications & Strategic Roadmap',
      summaryPoints: [
        'Defense, autonomous surveillance, and long-range logistics payloads.',
        'Direct OEM licensing and modular upgrade kit distribution.',
        'Target milestones: Phase 1 flight cert, Phase 2 scaled manufacturing.'
      ],
      imagePlaceholder: {
        id: 'slot-slide-6',
        label: 'Slide 6: Market Map / Roadmap Timeline Graphic',
        aspectRatio: '16:9',
        recommendedSize: '1600 × 900 px',
      }
    },
    {
      pageNumber: 7,
      title: 'Team & Advisory',
      subtitle: 'Aerospace Engineering & Computational Dynamics',
      summaryPoints: [
        'Deep domain expertise in aerodynamics, structural composites, and embedded controls.',
        'Proven delivery track record across leading flight platforms and research labs.'
      ],
      imagePlaceholder: {
        id: 'slot-slide-7',
        label: 'Slide 7: Team Photo / Advisor Showcase',
        aspectRatio: '16:9',
        recommendedSize: '1600 × 900 px',
      }
    }
  ],
  team: [
    {
      name: '[Pitch Deck Founder]',
      role: 'Founder & Chief Executive',
      bio: 'Aerospace Systems Lead with expertise in flight dynamics and advanced composite actuation.',
    },
    {
      name: '[Pitch Deck Engineering Lead]',
      role: 'Head of Aerodynamics & Hardware',
      bio: 'Former autonomous vehicle and UAV flight controls specialist.',
    },
    {
      name: '[Pitch Deck Advisor]',
      role: 'Principal Advisor',
      bio: 'Industry veteran in commercial avionics certification and defense procurement.',
    }
  ],
  callToAction: {
    heading: 'Deploy the Next Generation of Aerodynamic Control',
    primaryText: 'Connect with the Elevon team to review flight logs, technical documentation, and investment materials.',
    contactEmail: 'contact@elevon.aero',
  }
};

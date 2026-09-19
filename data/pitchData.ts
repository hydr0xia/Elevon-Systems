import { PitchData } from '../types';

export const initialPitchData: PitchData = {
  companyName: 'ELEVON Systems',
  tagline: 'Invisible to drones. Visible to us.',
  deckSubtitle: 'Elevon builds the eyes and brains of autonomous machines — from radar today to sovereign silicon tomorrow.',
  primaryColor: '#d9d9d9',
  accentBlue: '#2e4af0',
  accentBlack: '#0a0a0a',
  problemSummary: [
    'Drones & robots hit ultra-thin wires and obstacles cameras and LiDAR miss',
    'Optical sensors fail in fog, dust and glare',
    'A single wire strike destroys the aircraft — the #1 blocker to safe BVLOS',
    'Edge & companion compute relies on imported Cortex-M / foreign MCUs',
    'Sensor ingestion overloads the flight controller — jitter, latency, power draw',
    'Foreign silicon = supply-chain bottlenecks and hardware-level security risk'
  ],
  solutionSummary: [
    'Detects obstacles & wires as thin as 6 mm with mmWave radar + VEGA-on-FPGA',
    'Working, flying today — narrow, proven, sellable now',
    'SUTRA-E SoC built on C-DAC VEGA RISC-V core',
    'Hardened into silicon for UAVs, robotics, and industrial systems'
  ],
  keyMetrics: [
    {
      id: 'tam',
      label: 'TAM',
      value: '~$3B',
      subtext: 'Global drone sensor / detect-and-avoid market',
    },
    {
      id: 'sam',
      label: 'SAM',
      value: '~₹280 Cr',
      subtext: 'India + aligned drone DAA per year',
    },
    {
      id: 'som',
      label: 'SOM',
      value: '~₹6 Cr',
      subtext: 'Initial attainable market (India)',
    },
    {
      id: 'proof-grant',
      label: 'Grant Deployed',
      value: '₹ 3 L',
      subtext: 'Grant won and already deployed to build the PoC',
    }
  ],
  slides: [
    {
      pageNumber: 1,
      title: 'Hero & Mission',
      subtitle: 'Invisible to drones. Visible to us.',
      summaryPoints: [
        'Pre-Seed • TRL 4/5 • 2026',
        'Eyes and brains of autonomous machines — radar today, sovereign silicon tomorrow',
        'Flying PoC • Top-5 national RISC-V challenge (C2S) • C-DAC R&D partner'
      ],
      imagePlaceholder: {
        id: 'hero-drone-slot',
        label: 'Elevon Drone on Test Stand',
        aspectRatio: '4:3',
        recommendedSize: '1920 × 1440 px',
      }
    }
  ],
  team: [
    {
      name: 'Elevon Systems LLP',
      role: 'Core Engineering',
      bio: 'Bengaluru, India • tech@elevonsystems.in • +91 73384 88320',
    }
  ],
  callToAction: {
    heading: 'Sovereign autonomy starts here.',
    primaryText: "Let's build together.",
    contactEmail: 'tech@elevonsystems.in',
  }
};

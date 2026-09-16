/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

export interface PitchMetric {
  id: string;
  label: string;
  value: string;
  subtext?: string;
  sourceSlide?: number;
}

export interface PitchSlide {
  pageNumber: number;
  title: string;
  subtitle?: string;
  summaryPoints: string[];
  imagePlaceholder: {
    id: string;
    label: string;
    aspectRatio: string;
    recommendedSize: string;
    customUrl?: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
}

export interface PitchData {
  companyName: string;
  tagline: string;
  deckSubtitle: string;
  primaryColor: string;
  accentBlue: string;
  accentBlack: string;
  problemSummary: string[];
  solutionSummary: string[];
  keyMetrics: PitchMetric[];
  slides: PitchSlide[];
  team: TeamMember[];
  callToAction: {
    heading: string;
    primaryText: string;
    contactEmail: string;
  };
}

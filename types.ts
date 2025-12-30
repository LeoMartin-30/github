import React from 'react';

export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SpeakingData {
  id: string;
  title: string;
  date: string;
  link: string;
  description: string;
}

export interface SocialLinkData {
  name: string;
  url: string;
  icon?: React.ElementType; // Optional icon component
}
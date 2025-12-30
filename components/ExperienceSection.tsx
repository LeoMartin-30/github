import React from 'react';
import { ExperienceData } from '../types';

const experiences: ExperienceData[] = [
  {
    id: '1',
    role: 'AI & Automation Engineer',
    company: 'Malt',
    period: 'Sept 2024 — Present',
    description: 'Leading internal GenAI deployment. Scoping, building, and deploying AI agents while training 100% of non-tech staff on adoption.',
  },
  {
    id: '2',
    role: 'Graduate Program',
    company: 'Malt',
    period: '2023 — 2024',
    description: 'Rotations in Growth & Community. Focused on data-driven monitoring, GTM strategies for freelance programs, and AI sales empowerment.',
  },
  {
    id: '3',
    role: 'Key Account Manager',
    company: 'Qonto',
    period: '2022 — 2023',
    description: 'Managed client portfolios and developed feedback loops between Sales and Product teams.',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-24 border-t border-charcoal/10 scroll-mt-12">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <h2 className="font-serif text-2xl text-charcoal sticky top-24">Experience</h2>
        </div>
        
        <div className="md:col-span-9 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-charcoal group-hover:text-terracotta transition-colors">
                  {exp.role} <span className="font-serif font-normal text-charcoal/60">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-mono text-charcoal/50 mt-1 sm:mt-0">{exp.period}</span>
              </div>
              <p className="text-charcoal/80 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
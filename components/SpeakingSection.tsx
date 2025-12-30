import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { SpeakingData } from '../types';

const talks: SpeakingData[] = [
  {
    id: '1',
    title: 'Hymaday - AI Adoption At Scale',
    date: 'July 2025',
    link: 'https://youtu.be/NWQ213fohnM?si=s_CpKIyw5b9JPCGV',
    description: 'Keynote on scaling AI assistants in a 500+ person organization. Failures, learnings, and impact.',
  },
  {
    id: '2',
    title: 'AI in Action: From Crash tests to Learnings',
    date: 'April 2024',
    link: 'https://www.youtube.com/watch?v=tCiH311g_To&pp=ygUhRHVzdCBidXNpbmVzcyBvcGVyYXRpb25zIG5ldHdvcmtr',
    description: "A transparent look at how Dust helped solve real-world problems at Malt—and what didn't work.",
  },
];

const SpeakingSection: React.FC = () => {
  return (
    <section id="speaking" className="py-12 md:py-24 border-t border-charcoal/10 scroll-mt-12">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <h2 className="font-serif text-2xl text-charcoal sticky top-24">Speaking</h2>
        </div>

        <div className="md:col-span-9 grid gap-6">
          {talks.map((talk) => (
            <a 
              key={talk.id} 
              href={talk.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-6 border border-charcoal/10 hover:border-terracotta bg-white transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative accent on hover */}
              <div className="absolute top-0 left-0 w-1 h-full bg-terracotta transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>

              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-terracotta uppercase tracking-wider border border-terracotta/20 px-2 py-1 rounded-sm">
                  {talk.date}
                </span>
                <div className="text-charcoal group-hover:text-terracotta transition-colors">
                  <Play size={20} fill="currentColor" strokeWidth={0} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-6 top-6" />
                  <ArrowUpRight size={20} className="group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2 group-hover:translate-x-2 transition-transform duration-300">
                {talk.title}
              </h3>
              
              <p className="text-charcoal/70 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                {talk.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
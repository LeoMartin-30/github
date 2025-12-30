import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-24 scroll-mt-24">
      <h2 className="sr-only">About</h2>
      
      <div className="space-y-8 max-w-2xl">
        <p className="font-serif text-3xl md:text-5xl leading-tight text-charcoal">
          Bridging the gap between raw data and <span className="text-terracotta italic">human adoption</span>.
        </p>
        
        <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl">
          Engineered at Centrale Nantes, refined at Harvard, and currently scaling AI at Malt. 
          I scope, build, and deploy AI agents that actually work for people.
        </p>

        {/* Fun Fact - Bauhaus Geometric Box Style */}
        <div className="mt-12 relative group">
           {/* Geometric decoration */}
          <div className="absolute -left-2 -top-2 w-8 h-8 border-l-2 border-t-2 border-terracotta opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="p-6 border border-charcoal/10 bg-white/40 hover:bg-white/60 transition-colors duration-500">
            <p className="font-serif italic text-lg text-charcoal">
              <span className="font-bold not-italic text-terracotta text-xs tracking-widest uppercase block mb-2">Fun Fact</span>
              "My middle name is Claude. It was a tribute to my grandfather long before it was an LLM. I like to think it was a sign."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
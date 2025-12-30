import React from 'react';

const WritingSection: React.FC = () => {
  return (
    <section id="writing" className="py-12 md:py-24 border-t border-charcoal/10 mb-24 scroll-mt-12">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <h2 className="font-serif text-2xl text-charcoal sticky top-24">Writing</h2>
        </div>

        <div className="md:col-span-9">
          <div className="border-2 border-dashed border-charcoal/20 p-8 flex flex-col items-center justify-center text-center rounded-sm min-h-[200px] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-serif text-xl italic text-charcoal mb-2">Upcoming Articles</h3>
            <p className="text-charcoal/60 max-w-md">
              Work in progress. Thoughts on the human side of automation coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
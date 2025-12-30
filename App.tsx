import React from 'react';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SpeakingSection from './components/SpeakingSection';
import WritingSection from './components/WritingSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans selection:bg-terracotta selection:text-white">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      {/* Added left margin on desktop equal to sidebar width (w-80 = 20rem) */}
      <main className="flex-1 md:ml-80 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Sections */}
          <AboutSection />
          <ExperienceSection />
          <SpeakingSection />
          <WritingSection />
        </div>
      </main>
    </div>
  );
};

export default App;
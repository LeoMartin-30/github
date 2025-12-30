import React from 'react';
import { Linkedin, Github, Briefcase } from 'lucide-react';
import { SocialLinkData } from '../types';

const socialLinks: SocialLinkData[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/l%C3%A9o-martin-/', icon: Linkedin },
  { name: 'Malt', url: 'https://en.malt.fr/profile/n8n', icon: Briefcase }, // Using Briefcase as proxy for Malt
  { name: 'GitHub', url: 'https://github.com/LeoMartin-30', icon: Github },
];

const Sidebar: React.FC = () => {
  return (
    <header className="w-full md:w-80 md:h-screen md:fixed md:top-0 md:left-0 flex flex-col justify-between border-b md:border-b-0 md:border-r border-charcoal/10 bg-cream z-50">
      <div className="p-8 md:p-12 flex flex-col gap-6">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            Léo Martin
          </h1>
          <p className="mt-2 text-terracotta font-medium tracking-wide text-sm uppercase">
            AI & Automation Engineer
          </p>
        </div>

        <nav className="mt-4 md:mt-12 hidden md:block">
          <ul className="space-y-4">
            {['About', 'Experience', 'Speaking', 'Writing'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-charcoal hover:text-terracotta transition-colors duration-300 font-serif italic text-lg"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-8 md:p-12">
        <div className="flex gap-6 md:gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-charcoal hover:text-terracotta transition-transform duration-300 hover:-translate-y-1"
            >
              {link.icon ? <link.icon size={20} strokeWidth={1.5} /> : link.name}
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs text-charcoal/40 md:block hidden">
          © {new Date().getFullYear()} Léo Martin.
          <br />
          Built with structure & warmth.
        </p>
      </div>
    </header>
  );
};

export default Sidebar;
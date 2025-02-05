import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BannerProps } from '../types';

export const Banner: React.FC<BannerProps> = ({ className = '', adContent = '' }) => {
  return (
    <div className="w-full space-y-4">
      <a 
        href="https://buymeacoffee.com/3volve" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`block w-full p-6 rounded-lg bg-gradient-to-br from-orange-400/80 via-red-500/70 to-pink-500/60 border border-orange-300/10 shadow-lg hover:shadow-xl transition-all duration-300 group ${className}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Support this card game ☕️
            </h3>
            <p className="text-orange-50/90">
              {adContent} Buy me a coffee to help keep this card game burning bright. Thank you! ❤️
            </p>
          </div>
          <ExternalLink className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        </div>
      </a>
      <div className="text-center py-2">
        <a
          href="https://www.3volve.be"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-orange-400 transition-colors text-sm"
        >
          Created by 3volve
        </a>
      </div>
    </div>
  );
};
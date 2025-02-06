import React from 'react';
import { GameMode, ModeSwitchProps } from '../types';
import { Beer, Flame, Heart } from 'lucide-react';

export const ModeSwitch: React.FC<ModeSwitchProps> = ({ currentMode, onModeChange }) => {
  const modes: { value: GameMode; icon: React.ReactNode; label: string }[] = [
    { value: 'sfw', icon: <Heart className="w-5 h-5" />, label: 'SFW' },
    { value: 'nsfw', icon: <Flame className="w-5 h-5" />, label: 'NSFW' },
    { value: 'beer', icon: <Beer className="w-5 h-5" />, label: 'Beer' },
  ];

  return (
    <div className="flex justify-center gap-2 w-full mb-4">
      {modes.map(({ value, icon, label }) => (
        <button
          key={value}
          onClick={() => onModeChange(value)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full transition-all
            ${currentMode === value
              ? 'bg-orange-500 text-white'
              : 'bg-black/30 text-white/70 hover:bg-black/50'
            }
          `}
          title={`Switch to ${label} mode`}
        >
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
};
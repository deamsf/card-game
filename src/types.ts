export type GameMode = 'sfw' | 'nsfw' | 'beer';

export interface Card {
  id: string;
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades' | 'joker';
  value: string;
  assignments: {
    sfw: string;
    nsfw: string;
    beer: string;
  };
  imageUrl: string;
}

export interface DrawnCard extends Card {
  drawnMode: GameMode;
}

export interface BannerProps {
  className?: string;
  adContent?: string;
}

export interface ModeSwitchProps {
  currentMode: GameMode;
  onModeChange: (mode: GameMode) => void;
}
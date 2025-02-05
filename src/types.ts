export interface Card {
  id: string;
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades' | 'joker';
  value: string;
  assignment: string;
  imageUrl: string;
}

export interface BannerProps {
  className?: string;
  adContent?: string;
}
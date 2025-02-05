import React from 'react';
import { Card } from '../types';

interface DrawnCardsListProps {
  drawnCards: Card[];
}

export const DrawnCardsList: React.FC<DrawnCardsListProps> = ({ drawnCards }) => {
  return (
    <div className="w-full bg-black/30 rounded-lg p-4 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-orange-400 mb-4">Drawn Cards</h2>
      <div className="space-y-2">
        {drawnCards.map((card) => (
          <div
            key={card.id}
            className="flex items-start space-x-4 bg-black/20 p-3 rounded-lg text-white"
          >
            <img
              src={card.imageUrl}
              alt={`${card.value} of ${card.suit}`}
              className="w-12 h-12 object-contain flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{`${card.value} of ${card.suit}`}</p>
              <p className="text-sm text-orange-300 break-words">{card.assignment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
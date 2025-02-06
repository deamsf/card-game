import React, { useState, useCallback } from 'react';
import { Flame } from 'lucide-react';
import { generateDeck } from './data/cards';
import { Card, GameMode, DrawnCard } from './types';
import { Banner } from './components/Banner';
import { DrawnCardsList } from './components/DrawnCardsList';
import { ModeSwitch } from './components/ModeSwitch';

function App() {
  const [deck, setDeck] = useState<Card[]>(() => generateDeck());
  const [currentCard, setCurrentCard] = useState<DrawnCard | null>(null);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [gameMode, setGameMode] = useState<GameMode>('sfw');

  const drawCard = useCallback(() => {
    if (deck.length === 0) return;

    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    const newDeck = deck.filter((_, index) => index !== randomIndex);
    
    const drawnCard: DrawnCard = {
      ...card,
      drawnMode: gameMode
    };

    setDeck(newDeck);
    setCurrentCard(drawnCard);
    setDrawnCards(prev => [drawnCard, ...prev]);
  }, [deck, gameMode]);

  const resetGame = useCallback(() => {
    setDeck(generateDeck());
    setCurrentCard(null);
    setDrawnCards([]);
  }, []);

  const handleModeChange = (newMode: GameMode) => {
    setGameMode(newMode);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden bg-fixed"
      style={{ backgroundImage: 'url("/firecards-2.png")' }}
    >
      <div className="min-h-screen bg-black/40 backdrop-blur-sm flex flex-col">
        <div className="container mx-auto px-4 py-8 flex-1">
          <div className="max-w-2xl mx-auto flex flex-col min-h-[calc(100vh-4rem)]">
            <div className="flex-1">
              <div className="flex flex-col items-center space-y-8">
                {/* Cards remaining counter */}
                <div className="text-xl font-bold text-white">
                  Cards remaining: <span className="text-orange-400">{deck.length}</span>
                </div>

                {/* Current card display */}
                {currentCard && (
                  <div className="relative card-appear">
                    <img
                      src={currentCard.imageUrl}
                      alt={`${currentCard.value} of ${currentCard.suit}`}
                      className="w-[280px] sm:w-[320px] md:w-[360px] h-auto rounded-lg fiery-glow"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                      <p className="font-bold text-sm sm:text-base md:text-lg">
                        {currentCard.assignments[currentCard.drawnMode]}
                      </p>
                    </div>
                  </div>
                )}

                {/* Draw card button */}
                <button
                  onClick={drawCard}
                  disabled={deck.length === 0}
                  className={`
                    group relative px-8 py-4 text-xl font-bold text-white
                    rounded-full transform transition-transform
                    ${deck.length === 0 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 hover:scale-105 hover:shadow-xl'
                    }
                  `}
                >
                  <div className="flex items-center space-x-2">
                    <Flame className="w-6 h-6 animate-pulse" />
                    <span>Draw a Card</span>
                    <Flame className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-red-600 animate-pulse -z-10 group-hover:opacity-70 transition-opacity"></div>
                </button>

                {/* Reset game button */}
                {deck.length === 0 && (
                  <button
                    onClick={resetGame}
                    className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Reset Game
                  </button>
                )}

                {/* Drawn cards list */}
                {drawnCards.length > 0 && <DrawnCardsList drawnCards={drawnCards} />}
              </div>
            </div>

            {/* Mode Switch and Banner */}
            <div className="w-full mt-12 space-y-6">
              <ModeSwitch currentMode={gameMode} onModeChange={handleModeChange} />
              <Banner adContent="Support this game!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
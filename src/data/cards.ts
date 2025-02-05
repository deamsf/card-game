import { Card } from '../types';

const suits = ['hearts', 'diamonds', 'clubs', 'spades'] as const;
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'] as const;

// Fixed assignments for each card
const cardAssignments: Record<string, string> = {
  'hearts-Ace': 'Do 5 jumping jacks',
  'hearts-2': 'Take 3 deep breaths',
  'hearts-3': 'Give someone a compliment',
  'hearts-4': 'Drink a glass of water',
  'hearts-5': 'Stretch for 30 seconds',
  'hearts-6': 'Tell a joke',
  'hearts-7': 'Do a random act of kindness',
  'hearts-8': 'Write down a goal Write down a goal Write down a goal Write down a goal Write down a goal',
  'hearts-9': 'Send a positive message to someone',
  'hearts-10': 'Do 5 squats',
  'hearts-Jack': 'Share a happy memory',
  'hearts-Queen': 'Express gratitude to someone',
  'hearts-King': 'Meditate for 1 minute',
  
  'diamonds-Ace': 'Do 10 arm circles',
  'diamonds-2': 'Stand up and walk around',
  'diamonds-3': 'Learn one new word',
  'diamonds-4': 'Make someone smile',
  'diamonds-5': 'Do 5 leg stretches',
  'diamonds-6': 'Share something you learned today',
  'diamonds-7': 'Take a photo of something beautiful',
  'diamonds-8': 'Listen to your favorite song',
  'diamonds-9': 'Write down a happy thought',
  'diamonds-10': 'Do 10 high knees',
  'diamonds-Jack': 'Tell someone you appreciate them',
  'diamonds-Queen': 'Do something creative for 5 minutes',
  'diamonds-King': 'Do 15 jumping jacks',
  
  'clubs-Ace': 'Do a 30-second plank',
  'clubs-2': 'Practice good posture for 1 minute',
  'clubs-3': 'Name 3 things you\'re good at',
  'clubs-4': 'Do 10 arm rotations',
  'clubs-5': 'Take a mindful minute',
  'clubs-6': 'Do 6 lunges',
  'clubs-7': 'Share a fun fact',
  'clubs-8': 'Do 8 shoulder rolls',
  'clubs-9': 'Write down a dream',
  'clubs-10': 'Do 10 toe touches',
  'clubs-Jack': 'Practice positive self-talk',
  'clubs-Queen': 'Do 12 heel raises',
  'clubs-King': 'Do 20 jumping jacks',
  
  'spades-Ace': 'Do 7 push-ups',
  'spades-2': 'Take 5 deep breaths',
  'spades-3': 'Do 8 squats',
  'spades-4': 'Hold a stretch for 45 seconds',
  'spades-5': 'Do 10 arm circles',
  'spades-6': 'Do 12 high knees',
  'spades-7': 'Do 15 mountain climbers',
  'spades-8': 'Do 20 punches',
  'spades-9': 'Do 25 jumping jacks',
  'spades-10': 'Do 30 seconds of running in place',
  'spades-Jack': 'Do 8 burpees',
  'spades-Queen': 'Do 15 squats',
  'spades-King': 'Do 10 push-ups',
  
  'joker-red': 'Choose your own exercise',
  'joker-black': 'Double the previous card\'s exercise'
};

export const generateDeck = (): Card[] => {
  const deck: Card[] = [];

  // Generate regular cards
  suits.forEach((suit) => {
    values.forEach((value) => {
      const id = `${suit}-${value}`;
      deck.push({
        id,
        suit,
        value,
        assignment: cardAssignments[id],
        imageUrl: `/cards/${suit}/${value}.png`
      });
    });
  });

  // Add jokers
  deck.push({
    id: 'joker-red',
    suit: 'joker',
    value: 'red',
    assignment: cardAssignments['joker-red'],
    imageUrl: '/cards/red_joker.png'
  });
  
  deck.push({
    id: 'joker-black',
    suit: 'joker',
    value: 'black',
    assignment: cardAssignments['joker-black'],
    imageUrl: '/cards/black_joker.png'
  });

  return deck;
};
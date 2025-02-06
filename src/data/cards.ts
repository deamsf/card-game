import { Card } from '../types';

const suits = ['hearts', 'diamonds', 'clubs', 'spades'] as const;
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'] as const;

// Card assignments for each mode
const cardAssignments: Record<string, { sfw: string; nsfw: string; beer: string }> = {
  // Hearts
  'hearts-Ace': {
    sfw: 'Do 5 jumping jacks',
    nsfw: 'Give a sensual compliment to someone',
    beer: 'Take 2 sips'
  },
  'hearts-2': {
    sfw: 'Take 3 deep breaths',
    nsfw: 'Share your wildest fantasy',
    beer: 'Give out 3 sips'
  },
  'hearts-3': {
    sfw: 'Give someone a high five',
    nsfw: 'Describe your perfect date night',
    beer: 'Everyone drinks'
  },
  'hearts-4': {
    sfw: 'Do a funny dance move',
    nsfw: 'Share your most adventurous experience',
    beer: 'Waterfall starts with you'
  },
  'hearts-5': {
    sfw: 'Tell a joke',
    nsfw: 'Truth: Most attractive person in the room?',
    beer: 'Categories: Start with a drink'
  },
  'hearts-6': {
    sfw: 'Share a happy memory',
    nsfw: 'Give a flirty wink to someone',
    beer: 'Never have I ever (3 rounds)'
  },
  'hearts-7': {
    sfw: 'Do your best animal impression',
    nsfw: 'Share your secret crush',
    beer: 'Make a rule'
  },
  'hearts-8': {
    sfw: 'Give someone a compliment',
    nsfw: 'Truth: Most attractive celebrity?',
    beer: 'Guys drink'
  },
  'hearts-9': {
    sfw: 'Do 10 arm circles',
    nsfw: 'Demonstrate your best pickup line',
    beer: 'Girls drink'
  },
  'hearts-10': {
    sfw: 'Strike a superhero pose',
    nsfw: 'Give someone a shoulder massage',
    beer: 'Bottom\'s up!'
  },
  'hearts-Jack': {
    sfw: 'Tell us your favorite movie',
    nsfw: 'Truth: Most romantic moment?',
    beer: 'Choose someone to finish their drink'
  },
  'hearts-Queen': {
    sfw: 'Share a fun fact about yourself',
    nsfw: 'Truth or Dare (others choose)',
    beer: 'Queens: Ladies drink'
  },
  'hearts-King': {
    sfw: 'Lead everyone in a stretch',
    nsfw: 'Kiss someone on the cheek',
    beer: 'Pour some in the King\'s cup'
  },

  // Diamonds
  'diamonds-Ace': {
    sfw: 'Do 10 jumping jacks',
    nsfw: 'Give a playful compliment',
    beer: 'Finish your drink'
  },
  'diamonds-2': {
    sfw: 'Touch your toes',
    nsfw: 'Share your dating app story',
    beer: 'Choose 2 people to drink'
  },
  'diamonds-3': {
    sfw: 'Sing a few lines of a song',
    nsfw: 'Truth: Last romantic dream?',
    beer: 'Take 3 sips'
  },
  'diamonds-4': {
    sfw: 'Do 4 push-ups',
    nsfw: 'Share an embarrassing date story',
    beer: 'Give out 4 sips'
  },
  'diamonds-5': {
    sfw: 'Name 5 countries',
    nsfw: 'Five minutes in heaven with?',
    beer: 'Take 5 sips'
  },
  'diamonds-6': {
    sfw: 'Count to 10 in another language',
    nsfw: 'Truth: Most attractive feature?',
    beer: 'Give 6 sips'
  },
  'diamonds-7': {
    sfw: 'Do 7 squats',
    nsfw: 'Seven minutes in heaven with?',
    beer: 'Drink if you\'re single'
  },
  'diamonds-8': {
    sfw: 'Name 8 animals',
    nsfw: 'Truth: Most adventurous place?',
    beer: 'Pick a drinking buddy'
  },
  'diamonds-9': {
    sfw: 'Balance on one foot for 10 seconds',
    nsfw: 'Give someone a flirty nickname',
    beer: 'Nine sips to give out'
  },
  'diamonds-10': {
    sfw: 'Do 10 arm circles',
    nsfw: 'Share your perfect romantic evening',
    beer: 'Ten sips to give out'
  },
  'diamonds-Jack': {
    sfw: 'Tell us your dream job',
    nsfw: 'Truth: Celebrity crush?',
    beer: 'Everyone drinks'
  },
  'diamonds-Queen': {
    sfw: 'Show us your best dance move',
    nsfw: 'Truth: Most attractive person here?',
    beer: 'Queens drink'
  },
  'diamonds-King': {
    sfw: 'Make a funny face',
    nsfw: 'Kiss someone\'s hand',
    beer: 'Pour some in the King\'s cup'
  },

  // Clubs
  'clubs-Ace': {
    sfw: 'Do a plank for 20 seconds',
    nsfw: 'Give someone bedroom eyes',
    beer: 'Ace race!'
  },
  'clubs-2': {
    sfw: 'Jump up and down 5 times',
    nsfw: 'Truth: Most attractive outfit?',
    beer: 'You drink twice'
  },
  'clubs-3': {
    sfw: 'Pat your head and rub your belly',
    nsfw: 'Share your ideal romantic date',
    beer: 'Three sips'
  },
  'clubs-4': {
    sfw: 'Do 4 lunges',
    nsfw: 'Truth: Best kiss story?',
    beer: 'Floor is lava! Last person drinks'
  },
  'clubs-5': {
    sfw: 'Name 5 movies',
    nsfw: 'Give someone a compliment about their body',
    beer: 'Five fingers'
  },
  'clubs-6': {
    sfw: 'Do your best robot dance',
    nsfw: 'Truth: Most attractive personality?',
    beer: 'Six sips to give'
  },
  'clubs-7': {
    sfw: 'Tell us your favorite food',
    nsfw: 'Share your most romantic moment',
    beer: 'Drink if you\'ve kissed someone here'
  },
  'clubs-8': {
    sfw: 'Show us your best smile',
    nsfw: 'Truth: Most attractive voice?',
    beer: 'Eight sips to give'
  },
  'clubs-9': {
    sfw: 'Hop on one foot',
    nsfw: 'Give someone a flirty look',
    beer: 'Nine sips to take'
  },
  'clubs-10': {
    sfw: 'Tell us your favorite hobby',
    nsfw: 'Truth: Most romantic gesture?',
    beer: 'Drink if single'
  },
  'clubs-Jack': {
    sfw: 'Show us your best dance',
    nsfw: 'Share your ideal type',
    beer: 'Make a rule'
  },
  'clubs-Queen': {
    sfw: 'Tell us a funny story',
    nsfw: 'Truth: Most attractive smile?',
    beer: 'Queens drink'
  },
  'clubs-King': {
    sfw: 'Lead a group stretch',
    nsfw: 'Give someone a hug',
    beer: 'Pour some in the King\'s cup'
  },

  // Spades
  'spades-Ace': {
    sfw: 'Do 10 star jumps',
    nsfw: 'Truth: Most attractive quality?',
    beer: 'Everyone drinks'
  },
  'spades-2': {
    sfw: 'Tell us your favorite song',
    nsfw: 'Share your perfect date',
    beer: 'Give 2 sips'
  },
  'spades-3': {
    sfw: 'Do your best impression',
    nsfw: 'Truth: Best flirting technique?',
    beer: 'Take 3 sips'
  },
  'spades-4': {
    sfw: 'Show us a magic trick',
    nsfw: 'Share your smoothest move',
    beer: 'Categories: Start with a drink'
  },
  'spades-5': {
    sfw: 'Tell us your dream vacation',
    nsfw: 'Truth: Most attractive accent?',
    beer: 'Rhyme time'
  },
  'spades-6': {
    sfw: 'Make a paper airplane',
    nsfw: 'Share your ideal romantic evening',
    beer: 'Six sips to give'
  },
  'spades-7': {
    sfw: 'Do your best accent',
    nsfw: 'Truth: Most attractive trait?',
    beer: 'Drink if in a relationship'
  },
  'spades-8': {
    sfw: 'Tell us a joke',
    nsfw: 'Share your perfect romantic gesture',
    beer: 'Make a toast'
  },
  'spades-9': {
    sfw: 'Show us your best talent',
    nsfw: 'Truth: Most attractive hobby?',
    beer: 'Nine sips to give'
  },
  'spades-10': {
    sfw: 'Do a silly walk',
    nsfw: 'Give someone a compliment about their style',
    beer: 'Waterfall'
  },
  'spades-Jack': {
    sfw: 'Tell us your favorite book',
    nsfw: 'Truth: Most attractive feature here?',
    beer: 'Never have I ever'
  },
  'spades-Queen': {
    sfw: 'Show us your best pose',
    nsfw: 'Truth: Most attractive personality here?',
    beer: 'Queens drink'
  },
  'spades-King': {
    sfw: 'Lead everyone in a dance move',
    nsfw: 'Give someone a romantic compliment',
    beer: 'Pour some in the King\'s cup'
  },

  // Jokers
  'joker-red': {
    sfw: 'Everyone does 5 jumping jacks',
    nsfw: 'Everyone shares their ideal date',
    beer: 'Everyone finishes their drink'
  },
  'joker-black': {
    sfw: 'Choose someone to do the previous task',
    nsfw: 'Choose someone to answer a truth question',
    beer: 'Choose someone to finish their drink'
  }
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
        assignments: cardAssignments[id],
        imageUrl: `/cards/${suit}/${value}.png`
      });
    });
  });

  // Add jokers
  deck.push({
    id: 'joker-red',
    suit: 'joker',
    value: 'red',
    assignments: cardAssignments['joker-red'],
    imageUrl: '/cards/red_joker.png'
  });
  
  deck.push({
    id: 'joker-black',
    suit: 'joker',
    value: 'black',
    assignments: cardAssignments['joker-black'],
    imageUrl: '/cards/black_joker.png'
  });

  return deck;
};
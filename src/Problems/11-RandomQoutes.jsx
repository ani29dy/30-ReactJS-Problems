import React from "react";

const RandomQoutes = () => {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "Do what you can, with what you have, where you are.",
    "The secret of getting ahead is getting started.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Opportunities don't happen, you create them.",
    "Dream big and dare to fail.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "Believe you can and you’re halfway there.",
    "The harder the battle, the sweeter the victory.",
    "Success is getting what you want. Happiness is wanting what you get.",
    "The best way to predict the future is to create it.",
    "Failure is the condiment that gives success its flavor.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "We may encounter many defeats but we must not be defeated.",
    "Act as if what you do makes a difference. It does.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
    "In the middle of every difficulty lies opportunity.",
    "A journey of a thousand miles begins with a single step.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "If you want to lift yourself up, lift up someone else.",
    "Don't count the days, make the days count.",
    "It always seems impossible until it’s done.",
    "Quality is not an act, it is a habit.",
    "You miss 100% of the shots you don’t take.",
    "There is nothing impossible to they who will try.",
    "Act as if what you do makes a difference. It does.",
    "Courage is resistance to fear, mastery of fear, not absence of fear.",
    "If you can dream it, you can do it.",
    "To be the best, you must be able to handle the worst.",
    "Don’t wait. The time will never be just right.",
    "Everything you can imagine is real.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Turn your wounds into wisdom.",
    "Don’t let what you cannot do interfere with what you can do.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const qoute = quotes[randomIndex];
  return (
    <div>
      <h1>Qoute of The Day</h1>
      <h2>{qoute}</h2>
    </div>
  );
};

export default RandomQoutes;

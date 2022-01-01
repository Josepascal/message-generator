// store inspirational quotes
const messages = {
  inspirational: [
    "When you have a dream, you’ve got to grab it and never let go.",
    "Nothing is impossible. The word itself says I’m possible!",
    "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "You define your own life. Don’t let other people write your script."
  ],
  fitness: [
    "No pain, no gain. Shut up and train.",
    "Your body can stand almost anything. It’s your mind that you have to convince.",
    "Train insane or remain the same.",
    "Definition of a really good workout: when you hate doing it, but you love finishing it.",
    "Push yourself because no one else is going to do it for you."
  ],
  best: [
    "The best way to predict the future is to create it.",
    "Do right. Do your best. Treat others as you want to be treated.",
    "Life doesn't require that we be the best, only that we try our best.",
    "Expect the best. Prepare for the worst. Capitalize on what comes.",
    "The best cure for the body is a quiet mind."
  ]
};

// get a random number
const generateRandomNumber = num => {
  return Math.floor(Math.random() * num);
}

// store the final message
let messageOfDay = [];

// iterate through the object and select random messages
const randomMessage = () => {
  for (const message in messages){
    let randomIndex = generateRandomNumber(messages[message].length);
    
    switch (message){
      case "inspirational":
        messageOfDay.push(`Your inspirational message of the day is: ${messages[message][randomIndex]}`);
        break;
      case "fitness":
        messageOfDay.push(`Your fitness message of the day is: ${messages[message][randomIndex]}`);
        break;
      case "best":
        messageOfDay.push(`The best message for you today is: ${messages[message][randomIndex]}`);
        break;
      default:
        console.log("Not enough information.");
  
    }
  }
  return messageOfDay;
};

// log the finale message to the console
let finalMessage = randomMessage().join('\n');
console.log(finalMessage);
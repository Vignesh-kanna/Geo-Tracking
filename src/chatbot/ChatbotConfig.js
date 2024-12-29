// src/chatbot/ChatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";
import CustomActionProvider from "./CustomActionProvider";
import CustomMessageParser from "./CustomMessageParser";

const config = {
  botName: "GeoBot",
  initialMessages: [
    createChatBotMessage("Hello! How can I assist you today?"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  customComponents: {},

  // List of intents and responses
  state: {
    questionsAndAnswers: {
      "How can I find restaurants near me?": "Just share your location, and I'll show you a list of nearby restaurants, sorted by distance and ratings!",
      "What type of places can I search for?": "You can search for a variety of places, like restaurants, cafes, parks, ATMs, and more. Just let me know what you're looking for!",
      "How do I get directions to a location?": "Select the location you're interested in, and I'll provide step-by-step directions from your current spot.",
      "Are there any vegetarian restaurants around?": "Yes! I can show you vegetarian restaurants near you. Would you like them sorted by distance or customer rating?",
      "Can I find cafes that are open right now?": "Of course! I'll check for cafes nearby that are currently open and share the list with you.",
      "Which restaurant would you recommend near me?": "I can suggest some popular places with high ratings. Would you like a recommendation for casual dining, fine dining, or a quick bite?",
      "What’s the best place for coffee nearby?": "I’ve got a few top-rated coffee spots nearby! Would you prefer something cozy or more on-the-go?",
      "Can I filter locations by rating or price range?": "Yes, you can filter by rating, price range, and distance. Just let me know your preferences!",
      "How do I see places with outdoor seating?": "No problem! I’ll show you nearby spots with outdoor seating options. Would you like a list sorted by distance or rating?",
      "How far is the nearest ATM?": "The nearest ATM is just a 5-minute walk away. Would you like me to guide you there?",
      "Can you show places within a 10-minute drive?": "Sure! I can filter locations that are within a 10-minute drive from your current location.",
      "Is it safe to visit this area at night?": "For popular locations, I provide safety ratings based on user feedback. Here are some well-lit and frequented areas you might prefer for night visits.",
      "Are there wheelchair-accessible restaurants nearby?": "Yes, I can filter locations that offer wheelchair access. Just let me know what type of food or setting you’d like!",
    },
  },
  messageParser: CustomMessageParser,
  actionProvider: CustomActionProvider,
};

export default config;

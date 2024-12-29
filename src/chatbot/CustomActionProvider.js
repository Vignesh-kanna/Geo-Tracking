// src/chatbot/CustomActionProvider.js

import { createChatBotMessage } from "react-chatbot-kit";

class CustomActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleQuestion = (response) => {
    const message = this.createChatBotMessage(response);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleDefault = () => {
    const message = this.createChatBotMessage("I'm sorry, I didn't understand that.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default CustomActionProvider;

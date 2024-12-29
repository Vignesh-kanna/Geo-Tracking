// src/chatbot/CustomMessageParser.js
class CustomMessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      // Check if the message matches any question in the state
      const answer = this.state.questionsAndAnswers[message];
      if (answer) {
        this.actionProvider.handleQuestion(answer);
      } else {
        this.actionProvider.handleDefault(); // Fallback for unrecognized questions
      }
    }
  }
  
  export default CustomMessageParser;
  
const grammarRules = [
  {
    id: 1,
    rule: "Verb tenses: present simple",
    explanation: "The present simple tense is used to describe habits, general truths, and actions that happen regularly or repeatedly.",
    options: [
      { text: "I go to school every day.", correct: true },
      { text: "I am going to school every day.", correct: false }
    ]
  },
  {
    id: 2,
    rule: "Verb tenses: present continuous",
    explanation: "The present continuous tense is used to describe actions that are happening now or in the near future.",
    options: [
      { text: "I am studying for my exam right now.", correct: true },
      { text: "I study for my exam right now.", correct: false }
    ]
  },
  // Ajoutez plus de règles ici...
  {
    id: 100,
    rule: "Interrogative Adjectives",
    explanation: "Used to ask questions about nouns.",
    example: "Which book do you prefer?",
    options: [
      { text: "Which book do you prefer?", correct: true },
      { text: "Which book you prefer?", correct: false }
    ]
  }
];

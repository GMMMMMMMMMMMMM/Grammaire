const grammarRules = [
  {
    id: 1,
    rule: "Verb tenses: present simple",
    explanation: "The present simple tense is used to describe habits, general truths, and actions that happen regularly or repeatedly.",
    example: "I go to school every day.",
    options: [
      { text: "I go to school every day.", correct: true },
      { text: "I am going to school every day.", correct: false }
    ]
  },
  {
    id: 2,
    rule: "Verb tenses: present continuous",
    explanation: "The present continuous tense is used to describe actions that are happening now or in the near future.",
    example: "I am studying for my exam right now.",
    options: [
      { text: "I study for my exam right now.", correct: false },
      { text: "I am studying for my exam right now.", correct: true }
    ]
  },
  {
    id: 3,
    rule: "Articles: definite article (the)",
    explanation: "The definite article (the) is used to refer to specific nouns that have already been mentioned or are easily identifiable.",
    example: "The cat is on the mat.",
    options: [
      { text: "The cat is on the mat.", correct: true },
      { text: "A cat is on the mat.", correct: false }
    ]
  },
  {
    id: 4,
    rule: "Articles: indefinite articles (a, an)",
    explanation: "Indefinite articles (a, an) are used to refer to non-specific nouns.",
    example: "I saw a dog in the park.",
    options: [
      { text: "I saw a dog in the park.", correct: true },
      { text: "I saw the dog in the park.", correct: false }
    ]
  },
  {
    id: 5,
    rule: "Plural nouns",
    explanation: "Most nouns form the plural by adding -s or -es.",
    example: "Dogs, boxes",
    options: [
      { text: "Dogs", correct: true },
      { text: "Doges", correct: false }
    ]
  },
  {
    id: 6,
    rule: "Irregular plural nouns",
    explanation: "Some nouns have irregular plural forms.",
    example: "Children, mice",
    options: [
      { text: "Children", correct: true },
      { text: "Childs", correct: false }
    ]
  },
  {
    id: 7,
    rule: "Possessive nouns",
    explanation: "Possessive nouns show ownership by adding an apostrophe and sometimes an s.",
    example: "Sarah's book",
    options: [
      { text: "Sarah's book", correct: true },
      { text: "Sarah book", correct: false }
    ]
  },
  {
    id: 8,
    rule: "Subject-verb agreement",
    explanation: "Subjects and verbs must agree in number (singular or plural).",
    example: "She writes every day.",
    options: [
      { text: "She writes every day.", correct: true },
      { text: "She write every day.", correct: false }
    ]
  },
  {
    id: 9,
    rule: "Adjectives",
    explanation: "Adjectives describe or modify nouns.",
    example: "A tall building",
    options: [
      { text: "A tall building", correct: true },
      { text: "A building tall", correct: false }
    ]
  },
  {
    id: 10,
    rule: "Adverbs",
    explanation: "Adverbs modify verbs, adjectives, or other adverbs.",
    example: "She sings beautifully.",
    options: [
      { text: "She sings beautifully.", correct: true },
      { text: "She sings beautiful.", correct: false }
    ]
  },
  {
    id: 11,
    rule: "Comparative and superlative adjectives",
    explanation: "Comparative adjectives compare two things; superlative adjectives compare three or more things.",
    example: "Smarter, the smartest",
    options: [
      { text: "Smarter", correct: true },
      { text: "More smart", correct: false }
    ]
  },
  {
    id: 12,
    rule: "Prepositions of time",
    explanation: "Prepositions of time show the relationship of time between nouns and other words.",
    example: "At noon, on Monday",
    options: [
      { text: "At noon", correct: true },
      { text: "In noon", correct: false }
    ]
  },
  {
    id: 13,
    rule: "Prepositions of place",
    explanation: "Prepositions of place show the relationship of place between nouns and other words.",
    example: "In the box, on the table",
    options: [
      { text: "In the box", correct: true },
      { text: "At the box", correct: false }
    ]
  },
  {
    id: 14,
    rule: "Pronouns: subject pronouns",
    explanation: "Subject pronouns replace the subject of the sentence.",
    example: "He is my friend.",
    options: [
      { text: "He is my friend.", correct: true },
      { text: "Him is my friend.", correct: false }
    ]
  },
  {
    id: 15,
    rule: "Pronouns: object pronouns",
    explanation: "Object pronouns replace the object of the sentence.",
    example: "I gave him the book.",
    options: [
      { text: "I gave him the book.", correct: true },
      { text: "I gave he the book.", correct: false }
    ]
  },
  {
    id: 16,
    rule: "Pronouns: possessive pronouns",
    explanation: "Possessive pronouns show ownership.",
    example: "This book is mine.",
    options: [
      { text: "This book is mine.", correct: true },
      { text: "This book is my.", correct: false }
    ]
  },
  {
    id: 17,
    rule: "Conjunctions: coordinating conjunctions",
    explanation: "Coordinating conjunctions connect words, phrases, or clauses of equal importance.",
    example: "I like tea and coffee.",
    options: [
      { text: "I like tea and coffee.", correct: true },
      { text: "I like tea but coffee.", correct: false }
    ]
  },
  {
    id: 18,
    rule: "Conjunctions: subordinating conjunctions",
    explanation: "Subordinating conjunctions connect a dependent clause to an independent clause.",
    example: "I will go if it stops raining.",
    options: [
      { text: "I will go if it stops raining.", correct: true },
      { text: "I will go but it stops raining.", correct: false }
    ]
  },
  {
    id: 19,
    rule: "Conjunctions: correlative conjunctions",
    explanation: "Correlative conjunctions work in pairs to connect words, phrases, or clauses.",
    example: "Either you or I will go.",
    options: [
      { text: "Either you or I will go.", correct: true },
      { text: "Either you nor I will go.", correct: false }
    ]
  },
  {
    id: 20,
    rule: "Simple sentences",
    explanation: "A simple sentence consists of a single independent clause.",
    example: "She reads.",
    options: [
      { text: "She reads.", correct: true },
      { text: "She reading.", correct: false }
    ]
  },
  {
    id: 21,
    rule: "Compound sentences",
    explanation: "A compound sentence consists of two or more independent clauses joined by a coordinating conjunction or a semicolon.",
    example: "She reads, and he writes.",
    options: [
      { text: "She reads, and he writes.", correct: true },
      { text: "She reads, but he writes.", correct: false }
    ]
  },
  {
    id: 22,
    rule: "Complex sentences",
    explanation: "A complex sentence consists of one independent clause and at least one dependent clause.",
    example: "Although it was raining, we went out.",
    options: [
      { text: "Although it was raining, we went out.", correct: true },
      { text: "Although it was raining, but we went out.", correct: false }
    ]
  },
  {
    id: 23,
    rule: "Compound-complex sentences",
    explanation: "A compound-complex sentence consists of two or more independent clauses and at least one dependent clause.",
    example: "She reads, and he writes when he has time.",
    options: [
      { text: "She reads, and he writes when he has time.", correct: true },
      { text: "She reads, and he writes when he had time.", correct: false }
    ]
  },
  {
    id: 24,
    rule: "Direct and indirect speech",
    explanation: "Direct speech quotes the exact words spoken; indirect speech paraphrases what was said.",
    example: "He said, 'I am tired.' / He said that he was tired.",
    options: [
      { text: "He said that he was tired.", correct: true },
      { text: "He said, 'I am tired.'", correct: false }
    ]
  },
  {
    id: 25,
    rule: "Question formation: yes/no questions",
    explanation: "Yes/no questions are formed by placing the auxiliary verb before the subject.",
    example: "Are you coming?",
    options: [
      { text: "Are you coming?", correct: true },
      { text: "You are coming?", correct: false }
    ]
  },
  {
    id: 26,
    rule: "Question formation: WH- questions",
    explanation: "WH- questions are formed using question words like what, where, when, why, who, and how.",
    example: "Where are you going?",
    options: [
      { text: "Where are you going?", correct: true },
      { text: "You are going where?", correct: false }
    ]
  },
  {
    id: 27,
    rule: "Imperatives",
    explanation: "Imperative sentences give commands or make requests.",
    example: "Close the door.",
    options: [
      { text: "Close the door.", correct: true },
      { text: "Close you the door.", correct: false }
    ]
  },
  {
    id: 28,
    rule: "Modal verbs: can, could",
    explanation: "Modal verbs like 'can' and 'could' express ability, possibility, permission, or requests.",
    example: "Can you help me?",
    options: [
      { text: "Can you help me?", correct: true },
      { text: "Can you helping me?", correct: false }
    ]
  },
  {
    id: 29,
    rule: "Modal verbs: may, might",
    explanation: "Modal verbs like 'may' and 'might' express possibility or permission.",
    example: "You may leave now.",
    options: [
      { text: "You may leave now.", correct: true },
      { text: "You might leave now.", correct: false }
    ]
  },
  {
    id: 30,
    rule: "Modal verbs: shall, should",
    explanation: "Modal verbs like 'shall' and 'should' express suggestions, obligations, or future actions.",
    example: "You should eat more vegetables.",
    options: [
      { text: "You should eat more vegetables.", correct: true },
      { text: "You shall eat more vegetables.", correct: false }
    ]
  },
  {
    id: 31,
    rule: "Modal verbs: will, would",
    explanation: "Modal verbs like 'will' and 'would' express future actions, intentions, or polite requests.",
    example: "I will call you later.",
    options: [
      { text: "I will call you later.", correct: true },
      { text: "I would call you later.", correct: false }
    ]
  },
  {
    id: 32,
    rule: "Conditionals: zero conditional",
    explanation: "The zero conditional is used for general truths or laws of nature.",
    example: "If you heat water, it boils.",
    options: [
      { text: "If you heat water, it boils.", correct: true },
      { text: "If you heat water, it boil.", correct: false }
    ]
  },
  {
    id: 33,
    rule: "Conditionals: first conditional",
    explanation: "The first conditional is used for real or possible situations in the future.",
    example: "If it rains, we will stay inside.",
    options: [
      { text: "If it rains, we will stay inside.", correct: true },
      { text: "If it rains, we stay inside.", correct: false }
    ]
  },
  {
    id: 34,
    rule: "Conditionals: second conditional",
    explanation: "The second conditional is used for hypothetical or unlikely situations in the present or future.",
    example: "If I were rich, I would travel the world.",
    options: [
      { text: "If I were rich, I would travel the world.", correct: true },
      { text: "If I were rich, I will travel the world.", correct: false }
    ]
  },
  {
    id: 35,
    rule: "Conditionals: third conditional",
    explanation: "The third conditional is used for hypothetical situations in the past.",
    example: "If I had known, I would have told you.",
    options: [
      { text: "If I had known, I would have told you.", correct: true },
      { text: "If I had known, I will tell you.", correct: false }
    ]
  },
  {
    id: 36,
    rule: "Relative clauses: defining",
    explanation: "Defining relative clauses give essential information about the noun.",
    example: "The book that you gave me is interesting.",
    options: [
      { text: "The book that you gave me is interesting.", correct: true },
      { text: "The book which you gave me is interesting.", correct: false }
    ]
  },
  {
    id: 37,
    rule: "Relative clauses: non-defining",
    explanation: "Non-defining relative clauses give extra information about the noun.",
    example: "My brother, who lives in France, is visiting us.",
    options: [
      { text: "My brother, who lives in France, is visiting us.", correct: true },
      { text: "My brother who lives in France is visiting us.", correct: false }
    ]
  },
  {
    id: 38,
    rule: "Passive voice",
    explanation: "The passive voice is used when the focus is on the action, not who or what is performing the action.",
    example: "The cake was eaten by the children.",
    options: [
      { text: "The cake was eaten by the children.", correct: true },
      { text: "The children eaten the cake.", correct: false }
    ]
  },
  {
    id: 39,
    rule: "Reported speech",
    explanation: "Reported speech is used to report what someone else has said.",
    example: "She said that she was tired.",
    options: [
      { text: "She said that she was tired.", correct: true },
      { text: "She said she is tired.", correct: false }
    ]
  },
  {
    id: 40,
    rule: "Gerunds",
    explanation: "Gerunds are verbs that function as nouns by adding -ing.",
    example: "Swimming is fun.",
    options: [
      { text: "Swimming is fun.", correct: true },
      { text: "To swim is fun.", correct: false }
    ]
  },
  {
    id: 41,
    rule: "Infinitives",
    explanation: "Infinitives are the base form of the verb, usually preceded by 'to'.",
    example: "I want to learn.",
    options: [
      { text: "I want to learn.", correct: true },
      { text: "I want learning.", correct: false }
    ]
  },
  {
    id: 42,
    rule: "Phrasal verbs",
    explanation: "Phrasal verbs are verbs combined with prepositions or adverbs that create new meanings.",
    example: "She looked up the word.",
    options: [
      { text: "She looked up the word.", correct: true },
      { text: "She looked the word up.", correct: false }
    ]
  },
  {
    id: 43,
    rule: "Auxiliary verbs: be, do, have",
    explanation: "Auxiliary verbs are used with main verbs to form tenses, questions, and negatives.",
    example: "I am eating, Do you like it?, She has finished.",
    options: [
      { text: "I am eating.", correct: true },
      { text: "I eating.", correct: false }
    ]
  },
  {
    id: 44,
    rule: "Countable and uncountable nouns",
    explanation: "Countable nouns can be counted and have plural forms; uncountable nouns cannot be counted and do not have plural forms.",
    example: "Apples (countable), Water (uncountable)",
    options: [
      { text: "Apples (countable)", correct: true },
      { text: "Apple (uncountable)", correct: false }
    ]
  },
  {
    id: 45,
    rule: "Determiners: some, any",
    explanation: "Determiners like 'some' and 'any' are used to indicate an indefinite quantity.",
    example: "I have some friends. / Do you have any money?",
    options: [
      { text: "I have some friends.", correct: true },
      { text: "I have any friends.", correct: false }
    ]
  },
  {
    id: 46,
    rule: "Determiners: much, many",
    explanation: "'Much' is used with uncountable nouns, and 'many' is used with countable nouns.",
    example: "I don't have much time. / I have many books.",
    options: [
      { text: "I don't have much time.", correct: true },
      { text: "I don't have many time.", correct: false }
    ]
  },
  {
    id: 47,
    rule: "Determiners: few, little",
    explanation: "'Few' is used with countable nouns, and 'little' is used with uncountable nouns.",
    example: "Few people came to the party. / I have little water.",
    options: [
      { text: "Few people came to the party.", correct: true },
      { text: "Few water is left.", correct: false }
    ]
  },
  {
    id: 48,
    rule: "Demonstrative pronouns: this, that, these, those",
    explanation: "Demonstrative pronouns point to specific things.",
    example: "This is my book. / Those are your shoes.",
    options: [
      { text: "This is my book.", correct: true },
      { text: "This are my book.", correct: false }
    ]
  },
  {
    id: 49,
    rule: "Relative pronouns: who, which, that",
    explanation: "Relative pronouns introduce relative clauses.",
    example: "The person who called was my friend.",
    options: [
      { text: "The person who called was my friend.", correct: true },
      { text: "The person which called was my friend.", correct: false }
    ]
  },
  {
    id: 50,
    rule: "Conjunctions: and, but, or",
    explanation: "Conjunctions connect words, phrases, or clauses.",
    example: "I like apples and oranges.",
    options: [
      { text: "I like apples and oranges.", correct: true },
      { text: "I like apples but oranges.", correct: false }
    ]
  },
  {
    id: 51,
    rule: "Present Perfect Continuous",
    explanation: "Used to show that an action started in the past and has continued up until now.",
    example: "I have been working here for five years.",
    options: [
      { text: "I have been working here for five years.", correct: true },
      { text: "I have worked here for five years.", correct: false }
    ]
  },
  {
    id: 52,
    rule: "Past Perfect",
    explanation: "Used to show that an action was completed before another action in the past.",
    example: "She had finished her homework before she watched TV.",
    options: [
      { text: "She had finished her homework before she watched TV.", correct: true },
      { text: "She has finished her homework before she watched TV.", correct: false }
    ]
  },
  {
    id: 53,
    rule: "Past Perfect Continuous",
    explanation: "Used to show that an action started in the past and continued until another time in the past.",
    example: "I had been studying for two hours when he arrived.",
    options: [
      { text: "I had been studying for two hours when he arrived.", correct: true },
      { text: "I studied for two hours when he arrived.", correct: false }
    ]
  },
  {
    id: 54,
    rule: "Future Continuous",
    explanation: "Used to indicate that an action will be happening at a specific time in the future.",
    example: "I will be traveling to Paris this time next week.",
    options: [
      { text: "I will be traveling to Paris this time next week.", correct: true },
      { text: "I will travel to Paris this time next week.", correct: false }
    ]
  },
  {
    id: 55,
    rule: "Future Perfect",
    explanation: "Used to show that an action will have been completed by a certain future time.",
    example: "I will have finished my project by next Monday.",
    options: [
      { text: "I will have finished my project by next Monday.", correct: true },
      { text: "I will finish my project by next Monday.", correct: false }
    ]
  },
  {
    id: 56,
    rule: "Future Perfect Continuous",
    explanation: "Used to show that an action will have been continuing up until a certain future time.",
    example: "By next year, I will have been working here for ten years.",
    options: [
      { text: "By next year, I will have been working here for ten years.", correct: true },
      { text: "By next year, I will be working here for ten years.", correct: false }
    ]
  },
  {
    id: 57,
    rule: "Conditional Sentences: Zero Conditional",
    explanation: "Used to talk about general truths, scientific facts, or situations that are always true if something happens.",
    example: "If you heat water, it boils.",
    options: [
      { text: "If you heat water, it boils.", correct: true },
      { text: "If you heat water, it will boil.", correct: false }
    ]
  },
  {
    id: 58,
    rule: "Conditional Sentences: First Conditional",
    explanation: "Used to talk about real and possible situations in the future.",
    example: "If it rains, we will stay inside.",
    options: [
      { text: "If it rains, we will stay inside.", correct: true },
      { text: "If it rains, we stay inside.", correct: false }
    ]
  },
  {
    id: 59,
    rule: "Conditional Sentences: Second Conditional",
    explanation: "Used to talk about hypothetical or unlikely situations in the present or future.",
    example: "If I won the lottery, I would travel the world.",
    options: [
      { text: "If I won the lottery, I would travel the world.", correct: true },
      { text: "If I win the lottery, I would travel the world.", correct: false }
    ]
  },
  {
    id: 60,
    rule: "Conditional Sentences: Third Conditional",
    explanation: "Used to talk about hypothetical situations in the past.",
    example: "If I had known about the party, I would have gone.",
    options: [
      { text: "If I had known about the party, I would have gone.", correct: true },
      { text: "If I knew about the party, I would have gone.", correct: false }
    ]
  },
  {
    id: 61,
    rule: "Reported Speech: Statements",
    explanation: "Used to report what someone has said.",
    example: "She said that she was tired.",
    options: [
      { text: "She said that she was tired.", correct: true },
      { text: "She said that she is tired.", correct: false }
    ]
  },
  {
    id: 62,
    rule: "Reported Speech: Questions",
    explanation: "Used to report what someone has asked.",
    example: "He asked if I was coming.",
    options: [
      { text: "He asked if I was coming.", correct: true },
      { text: "He asked if I am coming.", correct: false }
    ]
  },
  {
    id: 63,
    rule: "Reported Speech: Requests",
    explanation: "Used to report what someone has requested.",
    example: "She asked me to close the door.",
    options: [
      { text: "She asked me to close the door.", correct: true },
      { text: "She asked me close the door.", correct: false }
    ]
  },
  {
    id: 64,
    rule: "Causative Verbs: Have",
    explanation: "Used to indicate that someone else does something for us.",
    example: "I had my hair cut.",
    options: [
      { text: "I had my hair cut.", correct: true },
      { text: "I had cut my hair.", correct: false }
    ]
  },
  {
    id: 65,
    rule: "Causative Verbs: Get",
    explanation: "Used to indicate that someone else does something for us.",
    example: "I got my car washed.",
    options: [
      { text: "I got my car washed.", correct: true },
      { text: "I got washed my car.", correct: false }
    ]
  },
  {
    id: 66,
    rule: "Relative Clauses: Defining",
    explanation: "Used to give essential information about the noun.",
    example: "The book that you gave me is interesting.",
    options: [
      { text: "The book that you gave me is interesting.", correct: true },
      { text: "The book you gave me is interesting.", correct: false }
    ]
  },
  {
    id: 67,
    rule: "Relative Clauses: Non-defining",
    explanation: "Used to give extra information about the noun.",
    example: "My brother, who lives in France, is visiting us.",
    options: [
      { text: "My brother, who lives in France, is visiting us.", correct: true },
      { text: "My brother who lives in France is visiting us.", correct: false }
    ]
  },
  {
    id: 68,
    rule: "Ellipsis",
    explanation: "Used to omit parts of a sentence when they are not necessary.",
    example: "She can play the piano, and he can too.",
    options: [
      { text: "She can play the piano, and he can too.", correct: true },
      { text: "She can play the piano, and he too.", correct: false }
    ]
  },
  {
    id: 69,
    rule: "Nominalization",
    explanation: "The process of converting verbs and adjectives into nouns.",
    example: "The analysis was detailed.",
    options: [
      { text: "The analysis was detailed.", correct: true },
      { text: "The analyzing was detailed.", correct: false }
    ]
  },
  {
    id: 70,
    rule: "Inversion",
    explanation: "Used to make questions, conditional sentences, and for emphasis.",
    example: "Never have I seen such beauty.",
    options: [
      { text: "Never have I seen such beauty.", correct: true },
      { text: "I never have seen such beauty.", correct: false }
    ]
  },
  {
    id: 71,
    rule: "Cleft Sentences: It-cleft",
    explanation: "Used to emphasize a particular part of the sentence.",
    example: "It was John who broke the window.",
    options: [
      { text: "It was John who broke the window.", correct: true },
      { text: "It was John which broke the window.", correct: false }
    ]
  },
  {
    id: 72,
    rule: "Cleft Sentences: Wh-cleft",
    explanation: "Used to emphasize a particular part of the sentence.",
    example: "What I need is a good rest.",
    options: [
      { text: "What I need is a good rest.", correct: true },
      { text: "That I need is a good rest.", correct: false }
    ]
  },
  {
    id: 73,
    rule: "Nominal Relative Clauses",
    explanation: "A type of clause that functions as a noun.",
    example: "What he said was interesting.",
    options: [
      { text: "What he said was interesting.", correct: true },
      { text: "That he said was interesting.", correct: false }
    ]
  },
  {
    id: 74,
    rule: "Fronting",
    explanation: "The placement of a sentence element at the beginning to emphasize it.",
    example: "Beautiful are the flowers in spring.",
    options: [
      { text: "Beautiful are the flowers in spring.", correct: true },
      { text: "The flowers in spring are beautiful.", correct: false }
    ]
  },
  {
    id: 75,
    rule: "Determiners: this, that, these, those",
    explanation: "Used to specify nouns.",
    example: "These are my friends.",
    options: [
      { text: "These are my friends.", correct: true },
      { text: "Those is my friends.", correct: false }
    ]
  },
  {
    id: 76,
    rule: "Determiners: some, any",
    explanation: "Used to refer to an indefinite quantity or number.",
    example: "I need some help.",
    options: [
      { text: "I need some help.", correct: true },
      { text: "I need any help.", correct: false }
    ]
  },
  {
    id: 77,
    rule: "Determiners: much, many",
    explanation: "Used to refer to a large quantity or number.",
    example: "There are many people here.",
    options: [
      { text: "There are many people here.", correct: true },
      { text: "There is much people here.", correct: false }
    ]
  },
  {
    id: 78,
    rule: "Determiners: few, little",
    explanation: "Used to refer to a small quantity or number.",
    example: "Few people attended the meeting.",
    options: [
      { text: "Few people attended the meeting.", correct: true },
      { text: "Little people attended the meeting.", correct: false }
    ]
  },
  {
    id: 79,
    rule: "Determiners: each, every",
    explanation: "Used to refer to individual members of a group.",
    example: "Each student has a book.",
    options: [
      { text: "Each student has a book.", correct: true },
      { text: "Every student have a book.", correct: false }
    ]
  },
  {
    id: 80,
    rule: "Determiners: all, both",
    explanation: "Used to refer to the whole group or both members of a pair.",
    example: "All students are present.",
    options: [
      { text: "All students are present.", correct: true },
      { text: "Both students is present.", correct: false }
    ]
  },
  {
    id: 81,
    rule: "Quantifiers: some, any, no",
    explanation: "Used to refer to an indefinite quantity or number.",
    example: "I have some money.",
    options: [
      { text: "I have some money.", correct: true },
      { text: "I have any money.", correct: false }
    ]
  },
  {
    id: 82,
    rule: "Quantifiers: much, many, a lot of",
    explanation: "Used to refer to a large quantity or number.",
    example: "There is a lot of water.",
    options: [
      { text: "There is a lot of water.", correct: true },
      { text: "There are a lot of water.", correct: false }
    ]
  },
  {
    id: 83,
    rule: "Quantifiers: few, little, fewer, less",
    explanation: "Used to refer to a small quantity or number.",
    example: "I have few friends.",
    options: [
      { text: "I have few friends.", correct: true },
      { text: "I have little friends.", correct: false }
    ]
  },
  {
    id: 84,
    rule: "Determiners: both, either, neither",
    explanation: "Used to refer to both members of a pair or one of the two.",
    example: "Neither option is suitable.",
    options: [
      { text: "Neither option is suitable.", correct: true },
      { text: "Neither options are suitable.", correct: false }
    ]
  },
  {
    id: 85,
    rule: "Articles: the, a, an",
    explanation: "Used to refer to specific or non-specific nouns.",
    example: "I saw a cat.",
    options: [
      { text: "I saw a cat.", correct: true },
      { text: "I saw an cat.", correct: false }
    ]
  },
  {
    id: 86,
    rule: "Modal verbs: must, have to, need to",
    explanation: "Used to express necessity or obligation.",
    example: "You must finish your work.",
    options: [
      { text: "You must finish your work.", correct: true },
      { text: "You have to finish your work.", correct: false }
    ]
  },
  {
    id: 87,
    rule: "Modal verbs: can, could, may, might",
    explanation: "Used to express ability, possibility, permission, or requests.",
    example: "Can you help me?",
    options: [
      { text: "Can you help me?", correct: true },
      { text: "Could you helping me?", correct: false }
    ]
  },
  {
    id: 88,
    rule: "Modal verbs: should, ought to, had better",
    explanation: "Used to give advice or suggestions.",
    example: "You should see a doctor.",
    options: [
      { text: "You should see a doctor.", correct: true },
      { text: "You ought to see a doctor.", correct: false }
    ]
  },
  {
    id: 89,
    rule: "Modal verbs: will, would",
    explanation: "Used to express future actions, intentions, or polite requests.",
    example: "I will call you later.",
    options: [
      { text: "I will call you later.", correct: true },
      { text: "I would call you later.", correct: false }
    ]
  },
  {
    id: 90,
    rule: "Adjective Order",
    explanation: "When multiple adjectives are used, they follow a specific order: opinion, size, age, shape, color, origin, material, purpose.",
    example: "A beautiful large old round wooden table.",
    options: [
      { text: "A beautiful large old round wooden table.", correct: true },
      { text: "A large old round beautiful wooden table.", correct: false }
    ]
  },
  {
    id: 91,
    rule: "Comparative Adjectives",
    explanation: "Used to compare two things, usually formed by adding -er or using more.",
    example: "She is taller than her sister.",
    options: [
      { text: "She is taller than her sister.", correct: true },
      { text: "She is more tall than her sister.", correct: false }
    ]
  },
  {
    id: 92,
    rule: "Superlative Adjectives",
    explanation: "Used to show the highest degree of a quality, usually formed by adding -est or using most.",
    example: "He is the tallest in his class.",
    options: [
      { text: "He is the tallest in his class.", correct: true },
      { text: "He is the most tall in his class.", correct: false }
    ]
  },
  {
    id: 93,
    rule: "Possessive Pronouns",
    explanation: "Used to show ownership.",
    example: "That book is mine.",
    options: [
      { text: "That book is mine.", correct: true },
      { text: "That book is my.", correct: false }
    ]
  },
  {
    id: 94,
    rule: "Reflexive Pronouns",
    explanation: "Used when the subject and the object of a sentence are the same.",
    example: "She cut herself.",
    options: [
      { text: "She cut herself.", correct: true },
      { text: "She cut her.", correct: false }
    ]
  },
  {
    id: 95,
    rule: "Relative Pronouns: who, whom, whose, which, that",
    explanation: "Used to introduce relative clauses.",
    example: "The person who called was my friend.",
    options: [
      { text: "The person who called was my friend.", correct: true },
      { text: "The person which called was my friend.", correct: false }
    ]
  },
  {
    id: 96,
    rule: "Indefinite Pronouns",
    explanation: "Used to refer to people or things without specifying who or what they are.",
    example: "Someone is at the door.",
    options: [
      { text: "Someone is at the door.", correct: true },
      { text: "Someone are at the door.", correct: false }
    ]
  },
  {
    id: 97,
    rule: "Interrogative Pronouns",
    explanation: "Used to ask questions.",
    example: "Who is coming to the party?",
    options: [
      { text: "Who is coming to the party?", correct: true },
      { text: "Who are coming to the party?", correct: false }
    ]
  },
  {
    id: 98,
    rule: "Demonstrative Pronouns",
    explanation: "Used to point to specific things.",
    example: "This is my book.",
    options: [
      { text: "This is my book.", correct: true },
      { text: "This my book.", correct: false }
    ]
  },
  {
    id: 99,
    rule: "Possessive Adjectives",
    explanation: "Used to show ownership.",
    example: "This is my car.",
    options: [
      { text: "This is my car.", correct: true },
      { text: "This is mine car.", correct: false }
    ]
  },
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

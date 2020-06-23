const qBank = [
  {
    question: "What is Thor's mother's name?",
    answers: [
      "Gamora",
      "Frigga",
      "Susan",
      "Friggete",
    ],
    correct: "Frigga",
    questionId: "029599",
  },
  {
    question: "What Actor plays Loki?",
    answers: ["Benedict cumberbatch", "Luke Hemsworth", "Idris Elba", "Tom Hiddleston"],
    correct: "Tom Hiddleston",
    questionId: "183467",
  },
  {
    question:
      "Thor (and his family) are based off gods from the ___ mythology",
    answers: ["Norse", "Greek", "Christian", "Egyptian"],
    correct: "Norse",
    questionId: "2679090",
  },
  {
    question: "What race is Loki?",
    answers: ["Asgardian", "Dark Elf", "Ice Giant", "Frost Giant"],
    correct: "Frost Giant",
    questionId: "33598798",
  },
];

export default (n = 4) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));

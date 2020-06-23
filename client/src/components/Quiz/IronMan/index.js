const qBank = [
  {
    question: "What is Tony Stark's father's name?",
    answers: [
      "Richard Branson",
      "Erik Selvig",
      "Howard Stark",
      "Anthony Stark",
    ],
    correct: "Howard Stark",
    questionId: "099099",
  },
  {
    question: "Who directed the first Iron Man",
    answers: ["Kevin Feige", "Sam Raimi", "Robert Downey Jr.", "John Favreau"],
    correct: "John Favreau",
    questionId: "183452",
  },
  {
    question:
      "What was the name of the missile being showcased in the opening scene?",
    answers: ["The coyote", "Jericho", "The Ex-Wife", "Razor Blade"],
    correct: "Jericho",
    questionId: "267908",
  },
  {
    question: "What is Obidiah Stain's villain name",
    answers: ["WarMonger", "Mountain Man", "Iron Giant", "Stainer"],
    correct: "WarMonger",
    questionId: "333247",
  }
];

export default (n = 4) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));

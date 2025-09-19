export default function Quiz() {
  const questionBank = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'London', 'Paris', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Which language is used for web apps?',
      options: ['PHP', 'Python', 'Javascript', 'All'],
      answer: 'All',
    },
    {
      question: 'What does JSX stand for?',
      options: [
        'JavaScript XML',
        'Java Syntax Extension',
        'Just a Simple Example',
        'None of the above',
      ],
      answer: 'JavaScript XML',
    },
  ];

  return (
    <div>
      <h2> Question 1</h2>
      <p className="question">{questionBank[0].question}</p>

      {questionBank[0].options.map(option => (
        <button className="option">{option}</button>
      ))}

      <div className="nav-buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

// src/pages/FAQ.jsx
import '../assets/css/FAQ.css';

function FAQ() {
  const faqs = [
    {
      question: "What is the dress code?",
      answer: "Traditional or formal wear is recommended.",
    },
    {
      question: "Can I bring a plus one?",
      answer: "Yes, but please mention in the registration form.",
    },
    {
      question: "Are kids allowed?",
      answer: "Yes, children are welcome!",
    },
    {
      question: "Will transportation be provided?",
      answer: "Shuttle service will be available from main hotels.",
    },
    {
      question: "Are gifts necessary?",
      answer: "Your presence is our present! Gifts are optional.",
    },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-table">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-row">
            <div className="faq-question">Q: {faq.question}</div>
            <div className="faq-answer">A: {faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

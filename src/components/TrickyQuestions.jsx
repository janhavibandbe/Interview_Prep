import React from 'react'

function TrickyQuestions({questions}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Tricky Interview Questions
      </h3>

      <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
        {questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrickyQuestions;
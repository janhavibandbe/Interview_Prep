import React from 'react'

function CodeSection({code}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Code Example
      </h3>

      <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm leading-6 dark:bg-gray-950">
        <code className="text-gray-800 dark:text-gray-200">
          {code}
        </code>
      </pre>
    </div>
  );
}

export default CodeSection;
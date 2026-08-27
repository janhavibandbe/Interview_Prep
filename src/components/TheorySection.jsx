import React from 'react'

function TheorySection({theory}) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Theory
      </h3>

      <p className="leading-7 text-gray-700 dark:text-gray-300">
        {theory}
      </p>
    </div>
  );
}

export default TheorySection;
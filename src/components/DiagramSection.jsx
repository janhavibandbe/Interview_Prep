import React from 'react'

function DiagramSection({diagram}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Diagram
      </h3>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <img
          src={diagram}
          alt="Concept diagram"
          className="mx-auto max-h-[500px] w-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
}

export default DiagramSection;
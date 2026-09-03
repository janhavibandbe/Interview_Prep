import React from 'react'

function ConceptTitle({name}) {
  return (
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
      {name}
    </h2>
  );
}

export default ConceptTitle;
import React from 'react';
import {Link} from 'react-router-dom';

function TopicCard({ topic }) {
  return (
    <Link
      to={`/topic/${topic.id}`}
      className="group flex min-h-15 items-center justify-between rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:border-blue-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500"
    >
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        {topic.name}
      </h2>
    </Link>
  );
}

export default TopicCard
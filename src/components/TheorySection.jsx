import React from 'react'

function TheorySection({theory}) {
  return (
    <div>
      <div className="leading-7 text-gray-700 dark:text-gray-300

          [&_h2]:mb-4
          [&_h2]:mt-8
          [&_h2]:text-2xl
          [&_h2]:font-bold
          [&_h2]:text-gray-900
          dark:[&_h2]:text-white

          [&_h3]:mb-3
          [&_h3]:mt-6
          [&_h3]:text-xl
          [&_h3]:font-semibold

          [&_p]:mb-4

          [&_pre]:my-5
          [&_pre]:overflow-x-auto
          [&_pre]:rounded-lg
          [&_pre]:bg-gray-900
          [&_pre]:dark:bg-gray-800
          [&_pre]:p-4
          [&_pre]:text-sm
          [&_pre]:text-gray-100

          [&_code]:font-mono
          
          [&_table]:w-full
          [&_table]:min-w-225
          [&_table]:border-collapse
          [&_table]:my-5

          [&_thead]:bg-gray-100
          dark:[&_thead]:bg-gray-800

          [&_th]:border
          [&_th]:border-gray-300
          [&_th]:px-2
          [&_th]:py-1
          [&_th]:text-left
          [&_th]:font-semibold
          [&_th]:text-gray-900
          dark:[&_th]:border-gray-600
          dark:[&_th]:text-white

          [&_td]:border
          [&_td]:border-gray-300
          [&_td]:px-2
          [&_td]:py-1
          dark:[&_td]:border-gray-600

          [&_tbody_tr]:hover:bg-gray-50
          dark:[&_tbody_tr]:hover:bg-gray-800

          [&_tbody_tr:nth-child(even)]:bg-gray-50
          dark:[&_tbody_tr:nth-child(even)]:bg-gray-800/50"
        dangerouslySetInnerHTML={{ __html: theory }}/>
    </div>
  );
}

export default TheorySection;
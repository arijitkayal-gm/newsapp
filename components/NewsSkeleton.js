import React from 'react'

const NewsSkeleton = () => {
  return (
     <div className="my-4 rounded-md shadow-lg shadow-black animate-pulse">
      <div className="relative bg-zinc-800 rounded-md overflow-hidden flex flex-col h-full">

        {/* Source Badge Placeholder */}
        <div className="absolute top-2 right-2 z-10">
          <div className="bg-blue-700 h-5 w-16 rounded-full" />
        </div>

        {/* Image Placeholder */}
        <div className="w-full h-48 bg-neutral-700" />

        {/* Card Body Placeholder */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="h-5 bg-neutral-600 rounded w-3/4 mb-2" />
          <div className="h-4 bg-neutral-700 rounded w-full mb-2" />
          <div className="h-4 bg-neutral-700 rounded w-5/6 mb-4" />

          <div className="mt-auto h-8 w-32 bg-neutral-700 rounded-md" />
        </div>

        {/* Footer Placeholder */}
        <div className="px-4 py-2 bg-neutral-900">
          <div className="h-4 w-1/2 bg-neutral-700 rounded" />
        </div>
      </div>
    </div>
  )
}

export default NewsSkeleton

import React from 'react';

const ShimmerCard = () => (
  <div className="flex flex-col gap-4 w-full mt-28">
    <div className="w-full aspect-video rounded-lg bg-gray-700 animate-pulse" />
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse" />
      <div className="flex-1 space-y-3">
        <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-gray-700 rounded animate-pulse w-1/2" />
      </div>
    </div>
  </div>
);

const ShimmerUI = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShimmerUI;
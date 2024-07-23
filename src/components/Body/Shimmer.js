const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-black">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="flex flex-col space-y-2">
          <div className="aspect-video bg-gray-800 rounded-lg animate-pulse"></div>
          <div className="flex space-x-2">
            <div className="w-10 h-10 bg-gray-800 rounded-full animate-pulse"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
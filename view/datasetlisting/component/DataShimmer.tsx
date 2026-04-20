const DataShimmer = ({ view }: { view: "grid" | "list" }) => {
  const items = Array.from({ length: 9 });

  if (view === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((_, i) => (
          <div
            key={i}
            className="p-4 border rounded-lg animate-pulse bg-gray-100 space-y-3"
          >
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 border rounded-lg animate-pulse bg-gray-100"
        >
          <div className="w-16 h-16 bg-gray-300 rounded"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataShimmer;

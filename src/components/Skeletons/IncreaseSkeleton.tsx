const IncreasePricesProductSkeleton = () => (
  <section className="mt-12" aria-busy="true">
    <div className="container mx-auto">
      {/* Heading */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-6 w-4 animate-pulse rounded bg-gray-300" />
        <div className="h-8 w-40 animate-pulse rounded bg-gray-300" />
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-stroke bg-white"
          >
            <div className="aspect-4/3 animate-pulse bg-gray-200" />
            <div className="space-y-3 p-4">
              <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
              <div className="flex justify-between pt-2">
                <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
                <div className="h-9 w-1/4 animate-pulse rounded-lg bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IncreasePricesProductSkeleton;

const IncreasePricesProductSkeleton = () => (
  <section className="mt-12" aria-busy="true">
    <div className="container mx-auto">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-dark">
        <span className="h-6 w-4 animate-pulse rounded bg-gray-200" />
        <span className="h-7 w-40 animate-pulse rounded bg-gray-200" />
      </h2>

      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-lg border border-stroke bg-headerBg p-6"
          >
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200" />
              <div className="space-y-2">
                <div className="h-4 w-32 rounded bg-gray-200" />
                <div className="h-3 w-16 rounded bg-gray-200" />
              </div>
            </div>

            <div className="mt-4 h-3 w-16 rounded bg-gray-200" />

            <div className="mt-2 flex items-center justify-between gap-4">
              <div className="h-6 w-28 rounded bg-gray-200" />
              <div className="h-8 w-24 rounded-full bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IncreasePricesProductSkeleton;

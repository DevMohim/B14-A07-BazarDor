const DetailsContentSkeleton = () => (
  <section className="-mt-10 bg-[#E1E8E1]" aria-busy="true">
    <div className="container mx-auto mt space-y-6 pt-10 py-20">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2">
        <div className="h-4 w-10 animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-4 animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-24 animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-4 animate-pulse rounded bg-gray-300" />
        <div className="h-4 w-32 animate-pulse rounded bg-gray-300" />
      </div>

      {/* Product summary */}
      <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-stroke bg-white p-8 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 animate-pulse rounded-xl bg-gray-200" />

          <div className="space-y-2">
            <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-64 max-w-full animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center space-y-2 rounded-lg bg-stroke px-5 py-4 md:w-40">
          <div className="h-4 w-20 animate-pulse rounded bg-gray-300" />
          <div className="h-9 w-24 animate-pulse rounded bg-gray-300" />
          <div className="h-4 w-20 animate-pulse rounded bg-gray-300" />
          <div className="h-4 w-12 animate-pulse rounded bg-gray-300" />
        </div>
      </div>

      {/* Price summary and market table */}
      <div className="overflow-x-auto rounded-xl border border-stroke bg-white p-8">
        <div className="mb-10">
          <div className="mb-4 h-7 w-48 animate-pulse rounded bg-gray-200" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="space-y-3 rounded-xl border-2 border-stroke p-4"
              >
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                <div className="h-7 w-32 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 h-7 w-48 animate-pulse rounded bg-gray-200" />

        <div className="min-w-[650px] overflow-hidden rounded-2xl border-2 border-stroke">
          {/* Table heading */}
          <div className="grid grid-cols-5 gap-4 border-b border-stroke p-3">
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className="h-4 w-20 animate-pulse rounded bg-gray-200"
              />
            ))}
          </div>

          {/* Table rows */}
          {Array.from({ length: 5 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-5 gap-4 p-3 ${
                rowIndex % 2 === 0 ? "bg-stroke" : "bg-white"
              }`}
            >
              {Array.from({ length: 5 }, (_, cellIndex) => (
                <div
                  key={cellIndex}
                  className="h-4 w-24 animate-pulse rounded bg-gray-300"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Category button */}
      <div className="h-10 w-36 animate-pulse rounded-lg bg-gray-300" />
    </div>
  </section>
);

export default DetailsContentSkeleton;

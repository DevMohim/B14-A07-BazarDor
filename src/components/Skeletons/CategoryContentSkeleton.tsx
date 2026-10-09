const CategoryPageSkeleton = () => (
  <div className="-mt-10 bg-[#E1E8E1]" aria-busy="true">
    <div className="container mx-auto space-y-4 pt-10 pb-20">
      {/* Category header */}
      <div className="flex items-center gap-2 rounded-2xl border border-stroke bg-white p-4">
        <div className="h-10 w-9 shrink-0 animate-pulse rounded-lg bg-gray-200" />
        <div className="space-y-2">
          <div className="h-7 w-40 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-64 animate-pulse rounded bg-gray-200" />
        </div>
      </div>

      {/* Sort control */}
      <div className="flex items-center justify-end gap-4 rounded-2xl border border-stroke bg-white p-4">
        <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
        <div className="h-8 w-36 animate-pulse rounded-lg bg-gray-200" />
      </div>

      {/* Product count and cards */}
      <div className="my-5">
        <div className="mb-4 h-4 w-56 animate-pulse rounded bg-gray-200" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  </div>
);

export default CategoryPageSkeleton;

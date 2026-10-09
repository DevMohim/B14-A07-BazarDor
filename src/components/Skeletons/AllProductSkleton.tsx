const ProductCardSkeleton = () => (
  <div
    aria-hidden="true"
    className="overflow-hidden rounded-xl border border-stroke bg-white"
  >
    <div className="aspect-4/3 animate-pulse bg-gray-200" />

    <div className="space-y-3 p-4">
      <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
      <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />

      <div className="flex items-center justify-between pt-2">
        <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
        <div className="h-9 w-1/4 animate-pulse rounded-lg bg-gray-200" />
      </div>
    </div>
  </div>
);

const AllProductsSkeleton = () => (
  <section className="mt-12" id="allProduct" aria-busy="true">
    <div className="container mx-auto">
      <div className="mb-2 h-8 w-32 animate-pulse rounded bg-gray-200" />
      <div className="mb-4 h-5 w-64 animate-pulse rounded bg-gray-200" />

      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>

    <div className="mt-10 h-12 w-full animate-pulse bg-gray-200" />
  </section>
);

export default AllProductsSkeleton;

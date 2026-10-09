const ProfilePageSkeleton = () => (
  <main className="-mt-10 bg-stroke" aria-busy="true">
    <div className="container mx-auto flex justify-center py-20">
      <div className="w-2xl space-y-6 p-6">
        {/* Page title and description */}
        <div className="space-y-2">
          <div className="h-8 w-48 animate-pulse rounded bg-gray-300" />
          <div className="h-4 w-64 animate-pulse rounded bg-gray-300" />
        </div>

        {/* User info and sign out */}
        <div className="flex items-center justify-between rounded-2xl border-2 border-stroke bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 animate-pulse rounded-lg bg-gray-200" />
            <div className="space-y-2">
              <div className="h-6 w-36 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
          <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-200" />
        </div>

        {/* Profile update form */}
        <div className="rounded-2xl border-2 border-stroke bg-white p-4">
          <div className="mb-5 h-6 w-16 animate-pulse rounded bg-gray-200" />
          <div className="space-y-3 p-4">
            <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
            <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200" />
            <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default ProfilePageSkeleton;

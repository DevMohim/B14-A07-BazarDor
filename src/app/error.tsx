"use client";

import Link from "next/link";

const ErrorPage = ({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stroke px-4">
      <div className="max-w-md text-center">
        <p className="text-6xl font-bold text-red-500">Oops!</p>

        <h1 className="mt-4 text-2xl font-bold text-dark">
          কিছু একটা সমস্যা হয়েছে
        </h1>

        <p className="mt-2 text-sm text-dark/60">
          দুঃখিত, পেজটি লোড করা যায়নি। আবার চেষ্টা করুন।
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="btn border-none bg-green text-white hover:opacity-90"
          >
            আবার চেষ্টা করুন
          </button>

          <Link
            href="/"
            className="btn border border-stroke bg-white text-dark hover:bg-stroke"
          >
            হোম পেজে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;

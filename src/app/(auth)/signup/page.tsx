import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <section className="bg-stroke min-h-screen -mt-6">
      <div className="container mx-auto flex min-h-screen justify-center items-center flex-col pt-10">
        <h1 className="text-dark font-bold text-2xl">অ্যাকাউন্ট তৈরি করুন</h1>
        <p className="text-dark/70 text-sm">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>

        <div className="mt-4 bg-white rounded-2xl p-5">
          <form>
            <fieldset className="fieldset bg-white rounded-2xl w-sm p-5">
              <label className="label text-sm text-dark font-semibold">
                নাম
              </label>
              <input
                type="text"
                className="input w-sm mb-2"
                placeholder="যেমন: রহিম উদ্দিন"
                autoComplete="name"
              />

              <label className="label text-sm text-dark font-semibold">
                ইমেইল
              </label>
              <input
                type="email"
                className="input w-sm mb-2"
                placeholder="you@example.com"
                autoComplete="email"
              />

              <label className="label text-sm text-dark font-semibold">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                className="input w-sm mb-2"
                placeholder="কমপক্ষে ৮ অক্ষর"
                autoComplete="new-password"
              />

              <label className="label text-sm text-dark font-semibold">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                type="password"
                className="input w-sm mb-2"
                placeholder="আবার লিখুন"
                autoComplete="new-password"
              />

              <button className="btn bg-green text-white mt-4" type="submit">
                অ্যাকাউন্ট তৈরি করুন
              </button>
            </fieldset>
          </form>

          <div className="flex items-center gap-3">
            <span className="flex-1 border-t-3 border-stroke" />
            <span className="text-sm text-dark/70">অথবা</span>
            <span className="flex-1 border-t-3 border-stroke" />
          </div>

          <div className="flex justify-center items-center mt-4">
            <p className="text-dark text-sm font-semibold">
              অ্যাকাউন্ট আছে?{" "}
              <span className="text-green cursor-pointer">সাইন ইন করুন</span>
            </p>
          </div>
        </div>

        <Link href='/' className="text-dark/50 text-sm mt-5 mb-16 hover:text-green transition duration-150">← হোম পেজে ফিরে যান</Link>
      </div>
    </section>
  );
};

export default SignUpPage;

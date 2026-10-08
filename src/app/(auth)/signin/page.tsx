import Link from "next/link";

const SignInPage = () => {
  return (
    <section className="bg-stroke min-h-screen -mt-6">
      <div className="container mx-auto flex min-h-screen justify-center items-center flex-col pt-10">
        <h1 className="text-dark font-bold text-2xl">সাইন ইন</h1>
        <p className="text-dark/70 text-sm">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>

        <div className="mt-4 bg-white rounded-2xl p-5">
          <form>
            <fieldset className="fieldset bg-white rounded-2xl w-sm p-5">
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

              <button className="btn bg-green text-white mt-4" type="submit">
                সাইন ইন
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
              অ্যাকাউন্ট নেই ?
              <Link href='/signup'>
                <span className="text-green cursor-pointer"> সাইন আপ করুন</span>
              </Link>
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="text-dark/50 text-sm mt-5 mb-16 hover:text-green transition duration-150"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </section>
  );
};

export default SignInPage;

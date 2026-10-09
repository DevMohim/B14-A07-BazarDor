"use client";
import { signIn } from "@/lib/auth-cilent";
import Link from "next/link";
import { FormEvent } from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      ...userData,
      callbackURL: "/",
    });

    if (data) {
      form.reset();
      toast.success("লগইন সফল! ");
    }
    if (error) {
      toast.error(error.message as string);
    }
  };

  const handleGoogleSignIn = async() => {
    await signIn.social({
      provider: "google",
      callbackURL: '/'
    });
  }
  const handleGithubSignIn = async() => {
    await signIn.social({
      provider: "github",
      callbackURL: '/'
    });
  }
  return (
    <section className="bg-stroke min-h-screen -mt-6">
      <div className="container mx-auto flex min-h-screen justify-center items-center flex-col pt-10">
        <h1 className="text-dark font-bold text-2xl">সাইন ইন</h1>
        <p className="text-dark/70 text-sm">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>

        <div className="mt-4 bg-white rounded-2xl p-5">
          <form onSubmit={onSubmit}>
            <fieldset className="fieldset bg-white rounded-2xl w-sm p-5">
              <label className="label text-sm text-dark font-semibold">
                ইমেইল
              </label>
              <input
                name="email"
                type="email"
                className="input w-sm mb-2"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />

              <label className="label text-sm text-dark font-semibold">
                পাসওয়ার্ড
              </label>
              <input
                name="password"
                type="password"
                className="input w-sm mb-2"
                placeholder="কমপক্ষে ৮ অক্ষর"
                autoComplete="new-password"
                required
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

          <div className="flex justify-center items-center gap-4 my-2">
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5] hover:bg-gray-300 transition duration-150 ease-in"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              onClick={handleGithubSignIn}
              className="btn bg-white text-black border-[#e5e5e5] hover:bg-gray-300 transition duration-150 ease-in"
            >
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <div className="flex justify-center items-center mt-4">
            <p className="text-dark text-sm font-semibold">
              অ্যাকাউন্ট নেই ?
              <Link href="/signup">
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

"use client";
import { signOut, useSession } from "@/lib/auth-cilent";
import Link from "next/link";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  
  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
         toast.success("সাইন আউট হয়েছে");
          router.push("/signin");
        },
      },
    });
  };
  return (
    <main className="bg-stroke -mt-10">
      <div className="container mx-auto flex justify-center py-20">
        <div className="p-6 space-y-6 w-2xl">
          {/* eyebrow text */}
          <div>
            <h1 className="text-dark text-2xl font-bold">আমার প্রোফাইল</h1>
            <p className="text-dark/70 text-sm">
              আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
            </p>
          </div>

          {/* name ans sign out */}
          <div className="bg-white rounded-2xl border-2 border-stroke flex flex-col lg:flex-row gap-4 justify-between items-center p-4">
            <div className="flex items-center gap-1">
              <div className="bg-green w-14 h-14 rounded-lg flex justify-center items-center mr-2">
                <h1 className="font-bold font-sans text-white px-2 py-0.5 ">
                  {session?.user.name.slice(0, 1)}
                </h1>
              </div>
              <div>
                <h1 className="font-semibold text-dark text-xl font-sans">
                  {session?.user.name}
                </h1>
                <p className="text-dark/70">{session?.user.email}</p>
              </div>
            </div>
            <div className="w-[75%] md:w-[50%] lg:w-[25%]">
              <button
                onClick={handleSignOut}
                className="text-red-600 cursor-pointer border border-red-600 px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white font-semibold transition duration-150 w-full"
              >
                ↩ সাইন আউট
              </button>
            </div>
          </div>

          {/* profile update */}
          <Link href='/update-info'>
            <button className="btn bg-green text-white font-semibold ">
              তথ্য হালনাগাদ করুন
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;

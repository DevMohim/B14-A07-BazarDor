"use client";
import { signOut, updateUser, useSession } from "@/lib/auth-cilent";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");

    if (typeof name !== "string" || !name.trim()) return;

    try {
      await updateUser({ name: name.trim() });
      form.reset();
      toast.success("প্রোফাইল আপডেট হয়েছে");
    } catch {
      toast.error("প্রোফাইল আপডেট করা যায়নি");
    }
  };

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
          <div className="bg-white rounded-2xl border-2 border-stroke flex justify-between items-center p-4">
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
            <div>
              <button
                onClick={handleSignOut}
                className="text-red-600 cursor-pointer border border-red-600 px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white font-semibold transition duration-150"
              >
                ↩ সাইন আউট
              </button>
            </div>
          </div>

          {/* profile update */}
          <div className="bg-white rounded-2xl border-2 border-stroke p-4">
            <h3 className="text-lg font-semibold text-dark mb-3">তথ্য</h3>
            <form onSubmit={onSubmit}>
              <fieldset className="fieldset  p-4">
                <label className="label text-sm text-dark font-medium">
                  নাম{" "}
                </label>
                <input type="text" name="name" className="input w-full" />

                <button type="submit" className="btn mt-4 bg-green text-white">
                  আপডেট
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;

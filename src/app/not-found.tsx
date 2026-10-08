import Link from 'next/link';

const notFoundPage = () => {
   return (
     <main className="flex min-h-screen -mt-10 items-center justify-center bg-stroke px-4">
       <div className="text-center mb-20">
         <p className="text-7xl font-bold text-green">404</p>

         <h1 className="mt-4 text-2xl font-bold text-dark">
           পেজটি খুঁজে পাওয়া যায়নি
         </h1>

         <p className="mt-2 text-sm text-dark/60">
           আপনি যে পেজটি খুঁজছেন, সেটি হয়তো সরানো হয়েছে বা ঠিকানাটি ভুল।
         </p>

         <Link
           href="/"
           className="btn mt-6 border-none bg-green text-white hover:opacity-90"
         >
           ← হোম পেজে ফিরে যান
         </Link>
       </div>
     </main>
   );
};

export default notFoundPage;
'use client';

import { updateUser } from '@/lib/auth-cilent';
import React, { FormEvent } from 'react';
import toast from 'react-hot-toast';


const UpdateInfopage = () => {
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
   
   return (
     <main className='mx-auto max-w-3xl'>
       <div className="bg-white rounded-2xl border-2 border-stroke p-4 mb-10">
         <h3 className="text-lg font-semibold text-dark mb-3">তথ্য</h3>
         <form onSubmit={onSubmit}>
           <fieldset className="fieldset  p-4">
             <label className="label text-sm text-dark font-medium">নাম </label>
             <input type="text" name="name" className="input w-full" />

             <button type="submit" className="btn mt-4 bg-green text-white">
               আপডেট
             </button>
           </fieldset>
         </form>
       </div>
     </main>
   );
};

export default UpdateInfopage;
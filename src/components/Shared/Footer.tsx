const Footer = () => {
  return (
    <footer className=" border-t-2 border-t-stroke py-5">
        <div className="bg-stroke w-full h-12 mt-10"></div>
      <div className="container mx-auto">
        <div className="container mx-auto flex justify-between items-center gap-4 mt-4">
          <p className="text-sm text-dark/70 font-semibold">
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </p>
          <p className="text-sm text-dark/70 font-semibold">
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

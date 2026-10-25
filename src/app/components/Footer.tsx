
const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  border-t-[1px] border-gray-200 mt-2 md:mt-5">
      <div className="mx-auto flex min-h-12 max-w-screen-2xl flex-col items-center justify-between gap-2 px-4 py-3 text-xs text-gray-600 sm:flex-row sm:px-6">
        {/* Left Side */}
        <p className="text-center sm:text-left">
          বাজার দর — প্রতিদিনের পণ্যের দাম এক নজরে।
        </p>

        {/* Right Side */}
        <p className="text-center sm:text-right">
          সকলের নিত্য সঙ্গী; বাজার দর এবার আপনার নিত্যদিনের সঙ্গী।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
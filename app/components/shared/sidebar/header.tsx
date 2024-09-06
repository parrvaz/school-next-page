import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 h-14 relative px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-center items-center mx-auto max-w-screen-xl">
          {/* <div className="absolute right text-white top-3 left-5"> */}
          <a href="https://semimgroup.ir" className="flex items-center">
            <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Semim Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Semim Group
            </span>
          </a>
        </div>

        <div className="absolute left text-white top-3 right-5">
          <a href="https://semimgroup.ir" className="flex items-center">
            <img
              src="/logoahmadi.png"
              className="mr-3 h-6 sm:h-9"
              alt="Semim Logo"
            />
            <span className="self-center text-xl  whitespace-nowrap dark:text-white">
              مدرسه شهید احمدی روشن
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

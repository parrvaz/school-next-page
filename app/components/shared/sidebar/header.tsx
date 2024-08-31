import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-center items-center mx-auto max-w-screen-xl">
          <a href="https://semimgroup.ir" className="flex items-center">
            <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Semim Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Semim
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

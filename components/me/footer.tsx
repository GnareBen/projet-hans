import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/home/logo.png"
              className="rounded-full"
              alt="Flowbite Logo"
              width={72}
              height={72}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              HAPPY DAY ENTERPRISES
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                N'Gatchi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Les delices de Kaylie
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Jaden event
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <a href="/" className="hover:underline">
            HAPPY DAY ENTERPRISES
          </a>
          . Tous droits reservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

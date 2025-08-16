function Footer() {
  return (
    <footer className="bg-second">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/ramo.png" className="h-12" alt="Floreria Madison Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Floreria Madison</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400 justify-center">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:underline">WhatsApp</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Floreria Madison</a>. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;

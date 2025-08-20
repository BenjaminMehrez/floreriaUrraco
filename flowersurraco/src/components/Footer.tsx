import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-second">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image width={50} height={50} src="/ramo.png" className="" alt="Floreria Madison Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Floreria Madison</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400 justify-center">
            <li>
              <Link href="/privacy-policy" className="hover:underline me-4 md:me-6">Política de privacidad</Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.instagram.com/madison.floreria/" className="hover:underline me-4 md:me-6">Instagram</Link>
            </li>
            <li>
              <Link target="_blank" href="#" className="hover:underline">WhatsApp</Link>
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

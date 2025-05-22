function Footer() {
  return (
    <footer className="bg-gray-300">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-1 items-center justify-center text-xl text-gray-800 sm:justify-start">
            <img src="/ramo.png" alt="ramo" className="w-12"/>
            <span>Floreria Madison</span>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

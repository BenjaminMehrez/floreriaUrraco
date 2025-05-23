function Banner() {
  return (
    <section className="banner flex justify-center">
      <header className="absolute top-8 left-8 sm:left-10 text-white">
        <h2 className="font-semibold text-xl sm:text-2xl">Floreria <span className="text-pink-500">Madison</span></h2>
      </header>
      <div className="max-w-5xl mx-auto text-white flex flex-col items-center justify-center gap-4 px-5">
        <h3 className="mt-10 text-sm sm:text-lg font-medium">
          Bienvenido a Floreria Madison
        </h3>
        <h4 className="max-w-3xl text-center text-3xl/10 sm:text-5xl/18 font-semibold">
          Hagamos que las hermosas flores sean parte de tu vida.
        </h4>
        <p className="max-w-3xl text-center mb-6">
          Explora un vibrante tapiz de flores y arreglos que añaden color,
          fragancia y elegancia a tu vida. Descubre la expresión floral perfecta
          para cada momento y ocasión.
        </p>
        <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-md font-bold text-white backdrop-blur-3xl gap-2 undefined">
            CONTACTANOS
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Banner;

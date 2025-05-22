function Banner() {
  return (
    <section className="banner flex justify-center">
      <header className="absolute top-8 left-8 sm:left-10 text-white">
        <h2 className="font-semibold text-xl">Floreria Madison</h2>
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
        <button className="btn sm:p-6 md:text-lg bg-pink-400 text-white border-none">
          CONTACTANOS
        </button>
      </div>
    </section>
  );
}

export default Banner;

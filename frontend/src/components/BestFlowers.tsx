import { bestFlowers } from "../data/flowers";

function BestFlowers() {
  return (
    <section className="bg-orange-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center w-full mb-10">
          <div>
            <h1 className="text-3xl font-medium title-font mb-2">
              Ramos Destacados
            </h1>
            <div className="mx-auto w-1/4 h-1 bg-primary mb-4" />
          </div>
          <p className="mt-2 text-lg text-center">
            Elegimos los ramos más bellos y delicados para sorprender en cada
            ocasión.
          </p>
        </div>
        <div className="flex justify-center w-full flex-wrap gap-10 mb-5">
          {bestFlowers.map((flower) => (
            <div
              key={flower.id}
              className={`group relative bg-cover bg-center h-[400px] w-[280px] rounded-lg`}
              style={{ backgroundImage: `url(${flower.image})` }}
            >
              <div className="absolute inset-0 bg-transparent from-black/100 via-transparent lg:from-black/0 lg:group-hover:from-black/100 bg-gradient-to-t rounded-lg transition duration-300"></div>

              <div className="relative p-4 sm:p-6 lg:p-8">
                <div className="mt-66 sm:mt-63 lg:mt-70">
                  <div className="translate-y-8 transform lg:opacity-0 transition-all lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {flower.name}
                    </p>
                    <p className="text-lg text-white font-bold">
                      {new Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 2,
                      }).format(flower.price)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestFlowers;

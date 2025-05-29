function Testimonials() {
  return (
    <section className="text-gray-800 bg-orange-100 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://randomuser.me/api/portraits/women/79.jpg"
              />
              <p className="leading-relaxed">
                Siempre que paso por la florería me atienden con una sonrisa. Te
                ayudan a elegir sin apurarte y los arreglos que hacen son una
                belleza. Se nota que trabajan con amor. Es mi lugar de confianza
                cuando quiero regalar algo especial.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                Laura C.
              </h2>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://randomuser.me/api/portraits/men/36.jpg"
              />
              <p className="leading-relaxed">
                Entré sin saber qué llevar y salí con un ramo espectacular. Me
                escucharon, me aconsejaron y armaron todo en el momento. El
                local tiene un aroma increíble y se respira tranquilidad.
                Volvería sin dudar.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                Marcelo F.
              </h2>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://randomuser.me/api/portraits/women/11.jpg"
              />
              <p className="leading-relaxed">
                Fuimos a buscar flores para nuestro civil y quedamos encantados.
                Nos atendieron como si fuéramos parte de la familia. Nos
                ayudaron a combinar los colores y todo quedó soñado. Mil gracias
                por tanto cariño y dedicación.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                Julia y Andrés
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

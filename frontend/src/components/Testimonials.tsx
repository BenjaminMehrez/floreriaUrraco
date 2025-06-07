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
                Necesitaba un ramo para un velorio con muy poco tiempo y me salvaron. Me atendieron súper bien por WhatsApp, entendieron lo que buscaba y lo entregaron a tiempo. Muy agradecida.
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
                Le mandé flores a mi novia por sorpresa y quedó encantada. El ramo era justo como en la foto y venía con una tarjetita hermosa. Me ayudaron a elegir y se notó el detalle en todo.
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
                Contratamos la florería para nuestro boda y quedó todo soñado. Desde el ramo de novia hasta los centros de mesa, todo impecable. Súper profesionales y atentos a cada detalle.
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

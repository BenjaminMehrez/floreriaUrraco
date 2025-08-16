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
                El lugar es un verdader vergel, tiene mucha variedad de plantas
                y macetas, de plástico, artesanales, decorativas, además es
                atendido con esmero por su dueño y sus colaboradores que saben
                mucho y explican con dedicación.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                Estela Suarez
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
                Muy lindo vivero ubicado en Godoy Cruz, tiene mucha variedad de
                plantas de exterior como de interior, suculentas, macetas, todo
                dentro de precios accesibles para el tamaño de las plantas. Buen
                asesoramiento y recomendaciones.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                Emiliano Romeo
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
                En realidad fuimos por pasta cicatrisante (luego de poda) y nos
                parecio FANTASTICO!!! Me enamore de la variedad y belleza de las
                plantas que tienen ademas de infinidad de cosas. Nos atendieron
                y asesoraron con muchisima amabilidad!!!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                Mabel Zelaya
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

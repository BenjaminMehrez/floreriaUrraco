function BestFlowers() {
  return (
    <section className="bg-pink-950">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col items-center w-full mb-10">
          <div>
            <h1 className="text-3xl font-medium title-font text-white mb-2">
              Ramos Destacados
            </h1>
            <div className="mx-auto w-1/4 h-1 bg-pink-500 mb-4" />
          </div>
          <p className="mt-2 text-lg text-gray-100">
            Elegimos los ramos más bellos y delicados para sorprender en cada
            ocasión.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="/img1.jpg"
                height={300}
                width={500}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="/img2.jpg"
                height={301}
                width={501}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="/img3.jpg"
                height={360}
                width={600}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="/img4.jpg"
                height={361}
                width={601}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="/img5.jpg"
                height={302}
                width={502}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg"
                src="/img6.jpg"
                height={303}
                width={503}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestFlowers;

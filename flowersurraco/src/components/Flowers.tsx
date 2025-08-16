'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, flowersByCategory } from "@/src/data/flowers";

function Flowers() {
  const [activeCategory, setActiveCategory] = useState("casamientos");

  return (
    <section className="bg-orange-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center w-full mb-10">
          <div>
            <h1 className="text-3xl font-medium text-center title-font mb-2">
              Flores para Cada Momento Especial
            </h1>
            <div className="mx-auto w-1/4 h-1 bg-primary mb-4" />
          </div>
          <p className="mt-2 text-lg text-center">
            Descubrí nuestros arreglos florales pensados para celebrar,
            acompañar y emocionar en cada ocasión: casamientos, cumpleaños,
            nacimientos y mucho más. Elegí la categoría que mejor se adapte a tu
            evento.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`mx-4 py-2 cursor-pointer transition-all duration-500 text-lg border-b-3 ${
                activeCategory === cat.id
                  ? "border-orange-500 text-orange-500"
                  : "text-gray-800 border-transparent"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center flex-wrap gap-10 w-full mb-5"
          >
            {(flowersByCategory as { [key: string]: any })[activeCategory]?.map(
              (flower: any, i: number) => (
                <motion.div
                  key={i}
                  className={`group relative bg-cover bg-center h-[400px] w-[280px] rounded-lg`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: flower.id * 0.05, duration: 0.3 }}
                  style={{ backgroundImage: `url(${flower.img})` }}
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
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Flowers;

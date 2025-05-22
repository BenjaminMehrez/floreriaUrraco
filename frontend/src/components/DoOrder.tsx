import { ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid";
import { Flower2, PackageCheckIcon } from "lucide-react";

function DoOrder() {
  return (
    <div className="px-8">
      <div className="flex flex-col items-center w-full mt-20">
        <div>
          <h1 className="text-3xl text-center font-medium title-font text-gray-800 mb-2">
            ¿Como hacer tu pedido en Floreria Madison?
          </h1>
          <div className="mx-auto w-1/5 h-1 bg-pink-500 mb-4" />
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-20 sm:w-24 h-20 sm:h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                <Flower2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  ELIGE TU RAMO O ARREGLO
                </h2>
                <p className="leading-relaxed">
                  Descubre en nuestro catálogo la combinación perfecta para cada
                  ocasión.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  CONTACTANOS POR MENSAJE
                </h2>
                <p className="leading-relaxed">
                  Envíanos un DM por Instagram o por WhatsApp. Consulta por
                  flores de estación y opciones personalizadas.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-20 sm:w-24 h-20 sm:h-24 bg-pink-100 text-pink-500 rounded-full inline-flex items-center justify-center">
                <PackageCheckIcon className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  COMPRA Y ENTREGA
                </h2>
                <p className="leading-relaxed">
                  Al confirmar tu pedido, te brindamos los datos de pago y
                  coordinamos la entrega a domicilio o retiro en tienda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DoOrder;

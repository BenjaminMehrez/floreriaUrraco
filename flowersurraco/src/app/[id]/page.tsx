import Footer from "@/src/components/Footer"
import { bestFlowers } from "@/src/data/flowers"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import NotFoundPage from "../not-found"

type tParams = Promise<{ id: string[] }>;


export async function generateMetadata({
  params
}: {
  params: tParams;
}): Promise<Metadata> {
  const { id } = await params
  const flower = bestFlowers.find(f => f.id === Number(id))

  return {
    title: flower?.name || "Flor",
    description: flower?.description || "Detalle de flor",
    openGraph: {
      images: [
        {
          url: flower?.image || "",
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return bestFlowers.map((flower) => ({
    id: flower.id.toString(),
  }))
  
}

async function FlowerDetail({ params }: { params: tParams }) {
  const { id } = await params
  const flower = bestFlowers.find(f => f.id === Number(id))

  if (!flower) return NotFoundPage()

  return (
    <div className="bg-orange-100 text-gray-600">
      <div className="container px-5 pt-10 mx-auto max-w-7xl">
        <Link href={'/'} className="font-semibold text-lg sm:text-xl cursor-pointer hover:underline">Volver al inicio</Link>
        <div className="my-12 lg:my-16 lg:mb-40 mx-auto flex flex-col items-center lg:flex-row bg-white rounded-lg max-w-[400px] lg:max-w-[1000px]">

          <div className="relative h-120 md:h-140 w-full aspect-[4/3] sm:max-w-[400px] md:max-w-[500px]">
            {flower?.image && (
              <Image
                alt={flower?.name}
                src={flower?.image}
                fill
                className="object-cover object-center rounded" 
              />
            )}
          </div>

          {/* Info */}
          <div className="p-8">
            {/* Título y precio */}
            <div>
              <h1 className="text-gray-900 text-3xl font-bold mb-4">{flower?.name}</h1>
              <span className="block text-2xl font-semibold text-orange-500 mb-4">
                $ {flower?.price?.toLocaleString("es-AR")}
              </span>
              <p className="leading-relaxed mb-6">Este hermoso ramo de gerberas combina tonos vibrantes y delicados, ideal para transmitir alegría y cariño en cualquier ocasión. Cada flor ha sido cuidadosamente seleccionada por su frescura y color, creando un arreglo que ilumina cualquier espacio.</p>
            </div>

            {/* Características */}
            <div className="">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Detalles del ramo</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Flores frescas seleccionadas a mano</li>
                <li>Incluye envoltorio premium</li>
                <li>Duración aproximada: 5-7 días</li>
                <li>Opción de tarjeta personalizada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default FlowerDetail
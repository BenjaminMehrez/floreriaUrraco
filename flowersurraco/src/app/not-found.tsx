import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen bg-[#faf8f6] p-6 text-center">
      <div className="w-full max-w-2xl">
        <Image
          src="/404-floreria.png"
          alt="Página no encontrada"
          width={1000}
          height={300}
          className="rounded-2xl shadow-md"
          priority
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-6 text-gray-800">Oops! Página no encontrada</h1>
      <p className="text-gray-600 mt-2">Parece que la página que buscas no existe.</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-2xl bg-orange-600 text-white px-6 py-3 font-semibold shadow hover:bg-orange-700 transition"
      >
        Volver al inicio
      </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
import Footer from "@/src/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Florería Madison",
  description:
    "Conocé cómo Florería Madison recopila, usa y protege tus datos personales cuando visitás floreriamadison.com.ar o utilizás nuestros formularios.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de Privacidad | Florería Madison",
    description:
      "Detalles sobre el tratamiento de datos personales, cookies, derechos ARCO y contacto de la responsable del tratamiento.",
    url: "https://www.floreriamadison.com.ar/privacy-policy",
    siteName: "Florería Madison",
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-orange-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-8">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Florería Madison</h1>
        <Link href="/" className="text-lg font-semibold hover:underline">Volver al inicio</Link>
        </div>
      </header>
      {/* Hero / Título */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Políticas y Privacidad</h2>
          <p className="text-gray-700">
            En Florería Madison nos tomamos muy en serio tu privacidad. Aquí
            encontrarás información sobre cómo usamos y protegemos tus datos.
          </p>
        </div>
      </section>
      {/* Contenido visual */}
      <section className="mb-20 max-w-3xl mx-auto px-4 py-10 space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Uso de datos</h3>
          <p className="text-gray-700">
            Utilizamos tus datos únicamente para procesar pedidos, responder consultas y enviarte información relevante.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Protección de datos</h3>
          <p className="text-gray-700">
            Implementamos medidas de seguridad para proteger tu información personal.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Contacto</h3>
          <p className="text-gray-700">
            Para consultas sobre nuestra política de privacidad, escríbenos a <a href="mailto:info@floreriamadison.com" className="text-green-700 underline">floreriamadison@gmail.com</a>.
          </p>
        </div>
      </section>
      <Footer />
    </main>

  );
}

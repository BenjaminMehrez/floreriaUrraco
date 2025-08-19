'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Toaster, toast } from "sonner";

type FormContact = {
  full_name: string;
  email: string;
  message: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormContact>();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (body: FormContact) => {
    try {
      setLoading(true);
      const res = await fetch("https://floreriamadison.com.ar/api/send", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      if (!res.ok) throw new Error("Error al enviar el correo");
      toast.success("Mensaje enviado con exito");
      reset(); // ✅ Limpia el formulario si todo salió bien
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <Toaster position="top-center" />
      <div className="container px-5 py-24 pb-30 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.4483528848426!2d-68.85389202524287!3d-32.90362993425322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090b5b4fb20d%3A0xc7613c595251d10a!2sVivero%20Jard%C3%ADn%20El%20Aljibe!5e0!3m2!1sen!2sus!4v1748010072377!5m2!1sen!2sus"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="font-semibold text-gray-900 tracking-widest">
                Vivero Jardín El Aljibe
              </h2>
              <p className="mt-1">
                Pascual Segura 1898, M5501 Godoy Cruz, Mendoza
              </p>
              <Link
                href={"https://maps.app.goo.gl/tAHmgDU1NnLbVA716"}
                target="_blank"
                className="mt-2 block font-medium hover:underline text-blue-500"
              >
                Ir a Google Maps
              </Link>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                floreriamadison@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">261-366-3336</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
            Contacto
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Consultanos por ramos personalizados, envíos a domicilio o cualquier
            otra duda que tengas.
          </p>
          <form onSubmit={handleSubmit(sendEmail)}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Nombre Completo
              </label>
              <input
                required
                type="text"
                id="name"
                {...register("full_name", { required: true })}
                name="full_name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.full_name && (
                <p className="text-red-500 block">{errors.full_name.message}</p>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Correo electrónico
              </label>
              <input
                required
                type="email"
                id="email"
                {...register("email", { required: true })}
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Mensaje
              </label>
              <textarea
                required
                id="message"
                {...register("message", { required: true })}
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <button className="w-full">
              {loading ? (
                <div className="btn2">
                  <div className="loading loading-sm"></div>
                </div>
              ) : (
                <div className="btn2">
                  <span className="spn2">Enviar mensaje</span>
                </div>
              )}
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            ¡Gracias por contactarte con nosotros! Te responderemos lo antes
            posible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

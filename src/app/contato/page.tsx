'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook, FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Entre em Contato
        </h1>

        {/* Informações de Perfil */}
        <section className="bg-white p-10 rounded-lg shadow-lg mb-12 transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2">
            Informações de Perfil
          </h2>
          <p className="text-gray-700 mb-6">
            Se você tiver alguma dúvida ou precisar de mais informações, não hesite em entrar em contato conosco.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Telefone */}
            <div className="flex items-center mb-6 md:mb-0 p-4 bg-gray-100 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-gray-200">
              <FaPhoneAlt className="text-blue-600 text-3xl mr-4" />
              <p className="text-gray-700 text-lg">
                <a href="tel:+551136827122">+55 (11) 3682-7122</a>
              </p>
            </div>

            {/* E-mail */}
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:bg-gray-200">
              <FaEnvelope className="text-blue-600 text-3xl mr-4" />
              <p className="text-gray-700 text-lg">
                <a href="mailto:contato@bmmonobloco.com.br">contato@bmmonobloco.com.br</a>
              </p>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.instagram.com/bm_monobloco/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size="2em" className="text-gray-400 hover:text-gray-300 transition-colors duration-300" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube size="2em" className="text-gray-400 hover:text-gray-300 transition-colors duration-300" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5511945420139&text=Ola%2C+Somos+a+Bm+Monobloco.%0AAssim+que+poss%C3%ADvel+retornaremos+a+sua+mensagem" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size="2em" className="text-gray-400 hover:text-gray-300 transition-colors duration-300" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size="2em" className="text-gray-400 hover:text-gray-300 transition-colors duration-300" />
            </a>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="bg-white p-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2">
            Envie-nos uma Mensagem
          </h2>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2 text-lg font-medium">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-300"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2 text-lg font-medium">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2 text-lg font-medium">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-shadow duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

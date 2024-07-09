'use client'

import { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Services from './components/Services'
import Footer from '../components/Footer'
import Image from 'next/image'
import Hero from './components/Hero'

const Home: NextPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Implementar lógica de envio do formulário aqui
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Oficina de Carros</title>
      </Head>
      <Header />
      <Hero />
      <main>
        {/* Seção de Boas-Vindas */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Adicione sua imagem da oficina e o texto aqui */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.img
                  src="/workshop.jpg"
                  alt="Oficina de Carros"
                  className="rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="text-center md:text-left">
                <motion.h1
                  className="text-5xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Bem-vindo à nossa Oficina de Carros
                </motion.h1>
                <motion.p
                  className="mt-4 text-xl text-gray-700"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et ante blandit sagittis. Maecenas vestibulum tellus et lorem aliquet ultricies. Integer sit amet mauris id metus gravida rutrum. Vivamus gravida, libero id condimentum varius, quam sem luctus lorem, vitae commodo velit odio eu nibh. Integer aliquam odio sit amet libero fermentum venenatis.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Sobre a Oficina */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Nossa Oficina</h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et ante blandit sagittis. Maecenas vestibulum tellus et lorem aliquet ultricies. Integer sit amet mauris id metus gravida rutrum. Vivamus gravida, libero id condimentum varius, quam sem luctus lorem, vitae commodo velit odio eu nibh. Integer aliquam odio sit amet libero fermentum venenatis.
            </p>
          </div>
        </section>

        {/* Seção: Nossos Serviços */}
        <Services />

        {/* Seção: Parceiros */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Parceiros</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex justify-center items-center">
                <Image src="/logo.png" alt="Oficina de Carros" width={200} height={50} />
                {/* <img src={partner1} alt="Parceiro 1" className="max-h-24" /> */}
              </div>
              <div className="flex justify-center items-center">
                <Image src="/logo.png" alt="Oficina de Carros" width={200} height={50} />
                {/* <img src={partner2} alt="Parceiro 2" className="max-h-24" /> */}
              </div>
              <div className="flex justify-center items-center">
                <Image src="/logo.png" alt="Oficina de Carros" width={200} height={50} />
                {/* <img srck={partner3} alt="Parceiro 3" className="max-h-24" /> */}
              </div>
              {/* Adicione mais divs conforme necessário para mais parceiros */}
            </div>
          </div>
        </section>

        {/* Seção: Formulário de Contato */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato Conosco</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensagem</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
                </div>
                <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </section>

        {/* Seção: Mapa de Localização */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nosso Endereço</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700">
                  Avenida Presidente - Av. Pref. Hirant Sanazar, 442
                  <br />
                  Umuarama, Osasco - SP, 06030-095, Brazil
                </p>
              </div>
              {/* Aqui você pode adicionar um mapa usando uma API de mapas, como Google Maps */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.045048192675!2d-46.79420778540678!3d-23.53741688469045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef588b0de2e05%3A0x108ab4f938d29cf4!2sAv.%20Pref.%20Hirant%20Sanazar%2C%20442%20-%20Umuarama%2C%20Osasco%20-%20SP%2C%2006030-095!5e0!3m2!1sen!2sbr!4v1626372597644!5m2!1sen!2sbr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    title="Mapa de Localização"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home

'use client'

import { useState } from 'react';
import { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Services from './components/Services'
import Footer from '../components/Footer'
import Hero from './components/Hero'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import Gallery from './components/Gallery'



import { FaGoogle, FaWaze } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import SendEmail from './components/SendEmail';

const Home: NextPage = () => {

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
                  Bm Monobloco
                </motion.h1>
                <motion.p
                  className="mt-4 text-xl text-gray-700"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  A Bm Monobloco nasceu em 2016, sempre com o pensamento e intuito de resolver problemas direito na geometria do veículo, não somos apenas uma oficina mecânica. Somos especialistas em Alinhamento técnico priorizando sempre uma melhor instabilidade aos veículos dos nossos clientes.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Missão a Oficina */}
        <section className="p-12 flex items-center justify-center">
          <div className="inset-0 bg-opacity-50 rounded-lg shadow-lg mb-12"></div>
          <motion.div
            className="text-center text-gray-600 bg-gray-50 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-lg mb-6">
              Promover serviços com mão de obra técnica profissional através de conhecimento
              sólido e dedicação. Procuramos a excelência na prestação de serviços com peças e
              mão de obra de primeira linha.
            </p>
          </motion.div>
        </section>


        {/* Seção: Youtube */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Veja Nosso Trabalho em Ação</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">Soldagem Profissional</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Assista ao vídeo para ver como nossa equipe realiza soldagem com precisão e qualidade.
                  Utilizamos equipamentos de ponta e técnicas avançadas para garantir a máxima durabilidade e
                  segurança em todos os nossos serviços de soldagem. Confie na nossa experiência para manter
                  seu veículo em perfeitas condições.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative w-full h-0" style={{ paddingTop: '90%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    title="Vídeo de Solda"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>






        <div className='flex items-center justify-center'>
          <Services />
        </div>

        <Gallery />



        {/* Seção: Formulário de Contato */}
       <SendEmail />

        {/* Seção: Mapa de Localização */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nosso Endereço</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Informações do Local */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-900">
                  <HiOutlineLocationMarker className="text-gray-900 mr-2" />
                  Visite-nos
                </h3>
                <p className="text-gray-700 mb-4">
                  Avenida Presidente - Av. Pref. Hirant Sanazar, 442
                  <br />
                  Umuarama, Osasco - SP, 06030-095, Brazil
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Av.+Pref.+Hirant+Sanazar%2C+442%2C+Umuarama%2C+Osasco+-+SP%2C+06030-095%2C+Brazil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
                  >
                    <FaGoogle className="mr-2" /> Ver no Google Maps
                  </a>
                  <a
                    href="https://waze.com/ul?ll=-23.5374168,-46.7942078&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaWaze size={20} className="mr-2" /> Ver no Waze
                  </a>
                </div>
              </div>
              {/* Mapa do Local */}
              <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.045048192675!2d-46.79420778540678!3d-23.53741688469045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef588b0de2e05%3A0x108ab4f938d29cf4!2sAv.%20Pref.%20Hirant%20Sanazar%2C%20442%20-%20Umuarama%2C%20Osasco%20-%20SP%2C%2006030-095!5e0!3m2!1sen!2sbr!4v1626372597644!5m2!1sen!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-105"
                    title="Mapa de Localização"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
      <WhatsAppIcon />
      <Footer />
    </div>
  )
}

export default Home

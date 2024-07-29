'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Introdução com Efeito de Entrada */}
        <section className="bg-white p-12 rounded-lg shadow-lg mb-12">
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Bem-vindos à Bm Monobloco
          </motion.h1>
          <p className="text-xl text-gray-700 text-center mb-6">
            Especialista em Alinhamento Técnico e Auto Center
          </p>
        </section>

        {/* Sobre a Bm Monobloco */}
        <section className="bg-white p-12 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Sobre Nós</h2>
          <p className="text-lg text-gray-700 mb-6">
            A Bm Monobloco nasceu em 2016, sempre com o pensamento e intuito de resolver problemas direito na geometria do veículo. Não somos apenas uma oficina mecânica, somos especialistas em Alinhamento Técnico, priorizando sempre uma melhor estabilidade aos veículos dos nossos clientes.
          </p>
          <p className="text-lg text-gray-700">
            Nosso atendimento é personalizado com eficiência, praticidade e atenção. Nossa missão é promover serviços com mão de obra técnica profissional através de conhecimento sólido e dedicação. Procuramos a excelência na prestação de serviços com peças e mão de obra de primeira linha.
          </p>
        </section>



        {/* Valores com Destaque */}
        <section className="bg-white p-12 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nossos Valores</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Disciplina</h3>
              <p className="text-gray-700">Comprometimento e organização em todos os aspectos do nosso trabalho.</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Execução</h3>
              <p className="text-gray-700">Eficiência e precisão em todos os serviços prestados.</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-2">Foco</h3>
              <p className="text-gray-700">Dedicação total ao atendimento e satisfação do cliente.</p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="bg-gray-50 p-12 rounded-lg shadow-lg mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
          <p className="text-lg text-gray-700 mb-4">Para mais informações ou dúvidas, entre em contato conosco pelos meios abaixo:</p>
          <div className="flex flex-col items-center md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="tel:+5511945420139" className="flex items-center bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3a1 1 0 011-1h4a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zM3 3h4v14H3V3zm14 0a1 1 0 011-1h4a1 1 0 011 1v14a1 1 0 01-1 1h-4a1 1 0 01-1-1V3zM17 3h4v14h-4V3z" />
              </svg>
              (11) 94542-0139
            </a>
            <a href="mailto:contato@bmmonobloco.com.br" className="flex items-center bg-green-600 text-white p-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v11a1 1 0 001 1h14a1 1 0 001-1V7a1 1 0 00-1-1H5a1 1 0 00-1 1zM3 7l9 6 9-6" />
              </svg>
              contato@bmmonobloco.com.br
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

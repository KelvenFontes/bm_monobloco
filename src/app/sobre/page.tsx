import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Sobre: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Sobre Nós - Oficina de Carros</title>
      </Head>
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Sobre Nós</h1>
          <p className="mt-4 text-lg text-gray-700">
            Somos uma oficina especializada em oferecer os melhores serviços para o seu veículo. Com anos de experiência e uma equipe dedicada, garantimos qualidade e confiança em cada serviço prestado.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Sobre

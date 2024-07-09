import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  { id: 1, title: 'Troca de Óleo', description: 'Troca de óleo rápida e eficiente.', image: '/trocaDeOleo.jpeg' },
  { id: 2, title: 'Balanceamento', description: 'Balanceamento e alinhamento das rodas.', image: '/balanceamento.jpeg' },
  { id: 3, title: 'Revisão', description: 'Revisão completa do seu veículo.', image: '/revisao.jpeg' },
]

const Services = () => {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900">Nossos Serviços</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Image src={service.image} alt={service.title} width={200} height={50} />
              {/* <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-4" /> */}
              <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

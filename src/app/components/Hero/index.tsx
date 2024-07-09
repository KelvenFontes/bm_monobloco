import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bem-vindo à nossa Oficina de Carros
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-center text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Oferecemos os melhores serviços para o seu carro.
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
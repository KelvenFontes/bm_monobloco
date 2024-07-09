import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
    <section id="contact" className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Entre em Contato
        </motion.h2>
        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ligue para nós ou visite nossa oficina para obter os melhores serviços.
        </motion.p>
        <motion.a
          href="tel:+551199999999"
          className="mt-8 inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          Ligue Agora
        </motion.a>
      </div>
    </section>
  )
}

export default CallToAction

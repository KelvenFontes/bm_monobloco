import { motion } from 'framer-motion'
import { FaTools, FaCar, FaWrench, FaCogs } from 'react-icons/fa';

const services = [
  { id: 1, title: 'Troca de Óleo', description: 'Troca de óleo rápida e eficiente.', image: '/trocaDeOleo.jpeg' },
  { id: 2, title: 'Balanceamento', description: 'Balanceamento e alinhamento das rodas.', image: '/balanceamento.jpeg' },
  { id: 3, title: 'Revisão', description: 'Revisão completa do seu veículo.', image: '/revisao.jpeg' },
]

const Services = () => {
  return (
    <section className = "bg-gray-50 p-12 rounded-lg shadow-lg mb-4 mt-4 w-[90%]">
       <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nossos Serviços</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         {/* Serviço 1 */}
         <motion.div
           className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.6 }}
         >
           <FaTools className="text-blue-500 text-5xl mb-4 mx-auto" />
           <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Alinhamento de Chassi</h3>
           <p className="text-gray-700 text-center">
             Alinhamento técnico de chassi para garantir a estabilidade do veículo e melhorar a dirigibilidade.
           </p>
         </motion.div>
         {/* Serviço 2 */}
         <motion.div
           className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.6 }}
         >
           <FaCar className="text-green-500 text-5xl mb-4 mx-auto" />
           <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Alinhamento de Longarinas</h3>
           <p className="text-gray-700 text-center">
             Serviço especializado em alinhamento de longarinas para corrigir a geometria e melhorar o desempenho do veículo.
           </p>
         </motion.div>
         {/* Serviço 3 */}
         <motion.div
           className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.6 }}
         >
           <FaWrench className="text-red-500 text-5xl mb-4 mx-auto" />
           <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Manutenção de Freios</h3>
           <p className="text-gray-700 text-center">
             Manutenção completa dos sistemas de freios para garantir a segurança e eficiência do seu veículo.
           </p>
         </motion.div>
         {/* Serviço 4 */}
         <motion.div
           className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.6 }}
         >
           <FaCogs className="text-yellow-500 text-5xl mb-4 mx-auto" />
           <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Solda Mig</h3>
           <p className="text-gray-700 text-center">
             Solda Mig de alta qualidade para reparos e manutenção de peças metálicas.
           </p>
         </motion.div>
         {/* Adicione mais blocos de serviço conforme necessário */}
       </div>
     </section>
    // <section id="services" className="py-12 bg-white">
    //   <div className="container mx-auto px-4">
    //     <h2 className="text-3xl font-bold text-center text-gray-900">Nossos Serviços</h2>
    //     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {services.map((service) => (
    //         <motion.div
    //           key={service.id}
    //           className="bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
    //           whileHover={{ scale: 1.05 }}
    //         >
    //           <Image src={service.image} alt={service.title} width={200} height={50} />
    //           {/* <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-4" /> */}
    //           <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
    //           <p className="mt-2 text-gray-700">{service.description}</p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  )
}

export default Services

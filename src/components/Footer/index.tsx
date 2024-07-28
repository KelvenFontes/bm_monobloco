import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook, FaPhoneAlt, FaLocationArrow, FaEnvelope, FaPaypal, FaCreditCard } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Grid layout para organizar as seções */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Redes Sociais */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Siga-nos</h3>
            <div className="flex space-x-4 mb-4">
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
            <div className="flex flex-col space-y-2">
              <a href="/sobre" className="text-gray-400 hover:text-white transition-colors duration-300">Sobre Nós</a>
              <a href="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors duration-300">Política de Privacidade</a>
              <a href="/termos-de-servico" className="text-gray-400 hover:text-white transition-colors duration-300">Termos de Serviço</a>
            </div>
          </div>
          {/* Horário de Funcionamento */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2"><IoMdTime className="inline mr-2" />Horário de Funcionamento</h3>
            <p>Segunda a Sexta: 08:00 - 18:00</p>
            <p>Sábado: 08:00 - 12:00</p>
          </div>
          {/* Endereço e Mapa */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2"><FaLocationArrow className="inline mr-2" />Nosso Endereço</h3>
            <p>Avenida Presidente - Av. Pref. Hirant Sanazar, 442</p>
            <p>Umuarama, Osasco - SP, 06030-095, Brazil</p>
          </div>
          {/* Telefone e Email */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2"><FaPhoneAlt className="inline mr-2" />Telefone</h3>
            <p>(11) 3682-712245</p>
            <h3 className="text-xl font-semibold mt-4 mb-2"><FaEnvelope className="inline mr-2" />Email</h3>
            <p>contato@bmmonobloco.com.br</p>
          </div>
        </div>
        {/* Formulário de Assinatura de Newsletter */}
        {/* <div className="bg-gray-700 p-4 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2">Assine Nossa Newsletter</h3>
          <form className="flex flex-col md:flex-row">
            <input type="email" placeholder="Seu email" className="p-2 mb-2 md:mb-0 md:mr-2 rounded-lg text-gray-900" />
            <button type="submit" className="bg-gray-600 p-2 rounded-lg hover:bg-gray-500 transition-colors duration-300">Inscreva-se</button>
          </form>
        </div> */}
        {/* Métodos de Pagamento */}
        <div className="flex space-x-4 mb-8">
          <FaPaypal size="2em" className="text-gray-400 hover:text-gray-300 transition-colors duration-300" />
          <FaCreditCard size="2em" className="text-gray-400 hover:text-gray-300 transition-colors duration-300" />
        </div>
      </div>
      {/* Seção de Copyright */}
      <div className="bg-gray-900 py-4 text-gray-500 text-sm text-center">
        &copy; {currentYear} Bm Monobloco. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer

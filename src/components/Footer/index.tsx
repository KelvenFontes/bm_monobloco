import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-600 text-white">
      <div className="container mx-auto px-4">
        {/* Primeira Seção: Redes Sociais, Sobre Nós, Política de Privacidade, etc. */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com/bm_monobloco/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-gray-400 transition-colors duration-300" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" className="hover:text-gray-400 transition-colors duration-300" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5511945420139&text=Ola%2C+Somos+a+Bm+Monobloco.%0AAssim+que+poss%C3%ADvel+retornaremos+a+sua+mensagem" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="hover:text-gray-400 transition-colors duration-300" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-gray-400 transition-colors duration-300" />
            </a>
            <a href="/sobre" className="text-gray-400 hover:text-white transition-colors duration-300">Sobre Nós</a>
            <a href="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors duration-300">Política de Privacidade</a>
            {/* Adicione mais links conforme necessário */}
          </div>
          {/* Segunda Seção: Horário de Funcionamento */}
          <div className="text-gray-400 text-sm">
            <p>Horário de Funcionamento:</p>
            <p>Segunda a Sexta: 08:00 - 18:00</p>
            {/* <p>Sábado: 08:00 - 12:00</p> */}
          </div>
        </div>
      </div>
      {/* Terceira Seção: Copyright e Ano */}
      <div className="bg-gray-900 py-8 text-gray-500 text-sm text-center mt-4">
        &copy; {currentYear} Oficina de Carros
      </div>
    </footer>
  )
}

export default Footer

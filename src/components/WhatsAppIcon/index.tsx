import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WhatsAppIcon = () => {
  return (
    <div className="fixed right-8 bottom-8 flex items-center justify-center">
      <a
        href="https://api.whatsapp.com/send?phone=5511945420139&text=Ola%2C+Somos+a+Bm+Monobloco.%0AAssim+que+poss%C3%ADvel+retornaremos+a+sua+mensagem"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-green-500 rounded-full px-4 py-3 hover:bg-green-600 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </div>
  )
}

export default WhatsAppIcon

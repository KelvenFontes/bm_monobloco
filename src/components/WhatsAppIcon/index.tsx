import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WhatsAppIcon = () => {
  return (
    <div className="fixed right-8 bottom-8 flex items-center justify-center">
      <a
        href="https://web.whatsapp.com/"
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

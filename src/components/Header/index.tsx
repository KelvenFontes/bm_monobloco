import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/logo.png" alt="Oficina de Carros" width={200} height={50} />
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="/sobre" className="hover:underline">
            Sobre
          </Link>
          <a href="/#services" className="hover:underline">Serviços</a>
          <a href="/contato" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import { useState } from "react";

const SendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [contactByEmail, setContactByEmail] = useState<boolean>(false);
  const [contactByPhone, setContactByPhone] = useState<boolean>(false);
  const [useWhatsApp, setUseWhatsApp] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactByEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactByEmail(e.target.checked);
  };

  const handleContactByPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactByPhone(e.target.checked);
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUseWhatsApp(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // const formData = new FormData(e.currentTarget);

    if (!contactByEmail && !contactByPhone) {
      setError('Selecione pelo menos um método de contato.');
      setLoading(false);
      setTimeout(() => setError(null), 10000);
      return;
    }


    if (contactByEmail && formData.email === '') {
      setError('Informe o seu e-mail.');
      setLoading(false);
      setTimeout(() => setError(null), 10000);
      return;
    }

    if (contactByPhone && !formData.phone) {
      setError('Informe o seu telefone.');
      setLoading(false);
      setTimeout(() => setError(null), 10000);
      return;
    }

    if (!formData.message) {
      setError('Escreva a sua mensagem.');
      setLoading(false);
      setTimeout(() => setError(null), 10000);
      return;
    }

    if (!formData.name) {
      setError('Informe o seu nome.');
      setLoading(false);
      setTimeout(() => setError(null), 10000);
      return;
    }

    if (contactByEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Informe um endereço de e-mail válido.');
      setLoading(false);
      setTimeout(() => setError(null), 10000);
      return;
    }

    // const data = {
    //   name: formData.get('name')?.toString() || '',
    //   email: contactByEmail ? formData.get('email')?.toString() || '' : '',
    //   phone: contactByPhone ? formData.get('phone')?.toString() || '' : '',
    //   message: formData.get('message')?.toString() || '',
    //   contactByEmail,
    //   contactByPhone,
    //   useWhatsApp,
    // };

    const data = {
      name: formData.name,
      email: contactByEmail ? formData.email : '',
      phone: contactByPhone ? formData.phone : '',
      message: formData.message,
      contactByEmail,
      contactByPhone,
      useWhatsApp,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        if (contactByEmail && contactByPhone) {
          setSuccess('Mensagem enviada com sucesso! Você será contatado por e-mail e telefone.');
        } else if (contactByEmail) {
          setSuccess('Mensagem enviada com sucesso! Você será contatado por e-mail.');
        } else if (contactByPhone) {
          setSuccess('Mensagem enviada com sucesso! Você será contatado por telefone.');
        }

        // Limpar os campos e os estados
        setFormData({ name: '', email: '', phone: '', message: '' });
        setContactByEmail(false);
        setContactByPhone(false);
        setUseWhatsApp(false);



        setTimeout(() => setSuccess(null), 10000);
      } else {
        throw new Error('Falha ao enviar a mensagem.');
      }
    } catch (err) {
      setError((err as Error).message);
      setTimeout(() => setError(null), 10000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 bg-gray-100" id="contact">
    <div className="container mx-auto px-4">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato Conosco</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Método de Contato Preferido</label>
            <div>
              <input
                type="checkbox"
                id="contactByEmail"
                name="contactByEmail"
                checked={contactByEmail}
                onChange={handleContactByEmailChange}
              />
              <label htmlFor="contactByEmail" className="ml-2 text-gray-700">Email</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="contactByPhone"
                name="contactByPhone"
                checked={contactByPhone}
                onChange={handleContactByPhoneChange}
              />
              <label htmlFor="contactByPhone" className="ml-2 text-gray-700">Telefone</label>
            </div>
          </div>
          {contactByEmail && (
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:border-indigo-500"
                required={contactByEmail}
              />
            </div>
          )}
          {contactByPhone && (
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:border-indigo-500"
                required={contactByPhone}
              />
              <div className="mt-2">
                <input
                  type="checkbox"
                  id="useWhatsApp"
                  name="useWhatsApp"
                  checked={useWhatsApp}
                  onChange={handleWhatsAppChange}
                  disabled={!contactByPhone}
                />
                <label htmlFor="useWhatsApp" className="ml-2 text-gray-700">WhatsApp</label>
              </div>
            </div>
          )}
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
        </form>
      </div>
    </div>
  </section>
  );
};

export default SendEmail;

import nodemailer from 'nodemailer';

// Configura o transporte para o Zoho Mail
const transporter = nodemailer.createTransport({
  service: 'Zoho',
  host: 'smtp.zoho.com',
  port: 587,
  secure: false, // True para port 465, false para port 587
  auth: {
    user: 'kelven.fontes@blindjobs.com.br',
    pass: 'Kelven08@', // Use a senha do aplicativo se necessário
  },
  tls: {
    rejectUnauthorized: false, // Desativa verificação de certificado (não recomendado para produção)
  },
  connectionTimeout: 10000, // Tempo limite de conexão em milissegundos
  socketTimeout: 10000, // Tempo limite do socket em milissegundos
});

// Envia o e-mail
transporter.sendMail({
  from: 'kelven.fontes@blindjobs.com.br',
  to: 'kelvenbentofontes@gmail.com', // Substitua pelo endereço do destinatário
  subject: 'esse é seu email kelvinho',
  text: 'Este é um teste de envio de e-mail usando o Zoho Mail.',
  html: '<p>Este é um teste de envio de e-mail usando o Zoho Mail.</p>',
}, (error, info) => {
  if (error) {
    console.error('Erro ao enviar e-mail:', error);
  } else {
    console.log('E-mail enviado:', info.response);
  }
});

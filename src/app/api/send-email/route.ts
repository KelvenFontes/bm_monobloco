// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
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

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, contactByEmail, contactByPhone, useWhatsApp } = await request.json();

    console.log('Enviando e-mail:', { name, email, phone, message, contactByEmail, contactByPhone, useWhatsApp });

    const adminMailOptions = {
      from: 'kelven.fontes@blindjobs.com.br',
      to: 'kelven.fontes@blindjobs.com.br', // Substitua pelo seu endereço de email
      subject: 'Nova mensagem de contato',
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone} ${useWhatsApp ? '(WhatsApp)' : ''}\nMétodo de Contato Preferido: ${contactByEmail ? 'Email' : ''} ${contactByPhone ? 'Telefone' : ''}\n\nMensagem:\n${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>E-mail:</strong> ${email}</p>
             <p><strong>Telefone:</strong> ${phone} ${useWhatsApp ? '(WhatsApp)' : ''}</p>
             <p><strong>Método de Contato Preferido:</strong> ${contactByEmail ? 'Email' : ''} ${contactByPhone ? 'Telefone' : ''}</p>
             <p><strong>Mensagem:</strong><br>${message}</p>`,
    };

    const userMailOptions = contactByEmail ? {
      from: 'kelven.fontes@blindjobs.com.br',
      to: email,
      subject: 'Obrigado por entrar em contato',
      text: `Olá ${name},\n\nRecebemos sua mensagem e entraremos em contato em breve.\n\nObrigado!\n\nMensagem:\n${message}`,
      html: `<p>Olá ${name},</p><p>Recebemos sua mensagem e entraremos em contato em breve.</p><p>Obrigado!</p><p><strong>Mensagem:</strong><br>${message}</p>`,
    } : null;

    // Envia o email para você com todas as informações do usuário
    await transporter.sendMail(adminMailOptions);

    // Envia o email para o usuário (se fornecido)
    if (userMailOptions) {
      await transporter.sendMail(userMailOptions);
    }

    return NextResponse.json({ message: 'Email enviado com sucesso.' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar email.' }, { status: 500 });
  }
}

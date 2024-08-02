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

    let phoneDisplay = phone || 'Não informado';
    if (useWhatsApp && phone) {
      phoneDisplay = `<span>${phone} <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width: 20px; height: 20px; vertical-align: middle;" /></span>`;
    }

    const adminMailOptions = {
      from: 'kelven.fontes@blindjobs.com.br',
      to: 'kelven.fontes@blindjobs.com.br', // Substitua pelo seu endereço de email
      subject: 'Nova mensagem de contato',
      text: `
Nome: ${name}
E-mail: ${contactByEmail ? email : 'Não informado'}
Telefone: ${contactByPhone ? phone : 'Não informado'} ${useWhatsApp ? '(WhatsApp)' : ''}
Método de Contato Preferido: ${contactByEmail ? 'Email' : ''} ${contactByPhone ? 'Telefone' : ''}

Mensagem:
${message}`,
      html: `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9; }
    h1 { font-size: 24px; color: #333; }
    p { font-size: 16px; line-height: 1.5; margin: 10px 0; }
    .info { border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 10px; }
    .info p { margin: 5px 0; }
    .info img { vertical-align: middle; }
    .footer { font-size: 14px; color: #666; text-align: center; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Nova Mensagem de Contato</h1>
    <div class="info">
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${contactByEmail ? email : 'Não informado'}</p>
      <p><strong>Telefone:</strong> ${contactByPhone ? phoneDisplay : 'Não informado'}</p>
      <p><strong>Método de Contato Preferido:</strong> ${contactByEmail ? 'Email' : ''} ${contactByPhone ? 'Telefone' : ''}</p>
    </div>
    <p><strong>Mensagem:</strong><br>${message}</p>
    <p><img src="https://bm-monobloco.vercel.app/logo.png" alt="Logo da Bm Monobloco" style="width: 200px; height: auto; display: block; margin: 20px auto;" /></p>
  </div>
</body>
</html>`,
    };

    const userMailOptions = contactByEmail ? {
      from: 'kelven.fontes@blindjobs.com.br',
      to: email,
      subject: 'Obrigado por entrar em contato!',
      text: `Olá ${name},\n\nAgradecemos por entrar em contato com a Bm Monobloco!\n\nRecebemos sua mensagem e nossa equipe estará avaliando e retornará a você o mais breve possível.\n\nAgradecemos pelo seu interesse e confiança em nossos serviços.\n\nAtenciosamente,\nBm Monobloco\n\nMensagem:\n${message}`,
      html: `<p>Olá ${name},</p>
             <p>Agradecemos por entrar em contato com a <strong>Bm Monobloco</strong>!</p>
             <p>Recebemos sua mensagem e nossa equipe estará avaliando e retornará a você o mais breve possível.</p>
             <p>Agradecemos pelo seu interesse e confiança em nossos serviços.</p>
             <p>Atenciosamente,<br>Bm Monobloco</p>
             <p><strong>Mensagem:</strong><br>${message}</p>
             <p><img src="https://bm-monobloco.vercel.app/logo.png" alt="Logo da Bm Monobloco" style="width: 200px; height: auto; display: block; margin: 20px auto;" /></p>`,
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

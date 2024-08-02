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
      phoneDisplay = `<span>${phone} <img src="https://bm-monobloco.vercel.app/whatsappicon.png" alt="WhatsApp" style="width: 20px; height: 20px; vertical-align: middle;" /></span>`;
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
    body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
    .header { text-align: center; border-bottom: 3px solid #007bff; padding-bottom: 10px; margin-bottom: 20px; }
    .header img { width: 150px; height: auto; }
    .title { font-size: 24px; color: #007bff; margin-bottom: 10px; }
    .info { margin-bottom: 20px; }
    .info p { margin: 5px 0; }
    .info strong { color: #333; }
    .footer { font-size: 14px; color: #666; text-align: center; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">

    <div class="title">Nova Mensagem de Contato</div>
    <div class="info">
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${contactByEmail ? email : 'Não informado'}</p>
      <p><strong>Telefone:</strong> ${contactByPhone ? phoneDisplay : 'Não informado'}</p>
      <p><strong>Método de Contato Preferido:</strong> ${contactByEmail ? 'Email' : ''} ${contactByPhone ? 'Telefone' : ''}</p>
    </div>
    <p><strong>Mensagem:</strong><br>${message}</p>
    <div class="footer">
      <p>Equipe Bm Monobloco</p>
      <p><img src="https://bm-monobloco.vercel.app/logo.png" alt="Logo da Bm Monobloco" style="width: 200px; height: auto; display: block; margin: 20px auto;" /></p>
    </div>
  </div>
</body>
</html>`,
    };

    const userMailOptions = contactByEmail ? {
      from: 'kelven.fontes@blindjobs.com.br',
      to: email,
      subject: 'Obrigado por entrar em contato!',
      text: `Olá ${name},\n\nAgradecemos por entrar em contato com a Bm Monobloco!\n\nRecebemos sua mensagem e nossa equipe estará avaliando e retornará a você o mais breve possível.\n\nMensagem:\n${message}\n\nAgradecemos pelo seu interesse e confiança em nossos serviços.\n\nAtenciosamente,\nBm Monobloco`,
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

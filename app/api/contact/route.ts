import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const emailContent = `
      Nova mensagem de contato do site Eletric Serviços Engenharia
      
      Nome: ${name}
      Email: ${email}
      Telefone: ${phone}
      
      Mensagem:
      ${message}
    `;

    console.log('Email Content:', emailContent);

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Erro ao processar formulário' },
      { status: 500 }
    );
  }
}

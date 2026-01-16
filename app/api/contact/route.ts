import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Dados inválidos" },
        { status: 400 }
      );
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "E-mail inválido" },
        { status: 400 }
      );
    }

    // Aqui você pode integrar com um provedor de e-mail (Resend, SMTP)
    // usando variáveis de ambiente. Neste boilerplate, apenas registramos
    // no log do servidor.
    console.log("Contato AvaliA:", {
      name,
      email,
      message,
      date: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Erro ao processar contato:", e);
    return NextResponse.json(
      { ok: false, error: "Erro inesperado" },
      { status: 500 }
    );
  }
}


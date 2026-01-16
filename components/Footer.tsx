import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16 bg-gray-50">
      <Container>
        <div className="py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <img
              src="/logo.svg"
              alt="AvaliA"
              className="h-7 mb-3"
              width={112}
              height={28}
            />
            <p className="text-sm text-gray-600">
              Evolua suas fotos com análise técnica, feedback educativo e nota
              visual.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-gray-900">Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="/#como-funciona"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="/#beneficios"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="/#planos"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="/suporte"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Suporte
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-privacidade"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/termos-de-uso"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-gray-900">Contato</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>atendimento@avalia.app</li>
              <li>+55 (11) 99999-9999</li>
              <li>Seg–Sex, 9h–18h (BRT)</li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-gray-200 text-xs text-gray-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} AvaliA. Todos os direitos reservados.</p>
          <p>Construído com Next.js e hospedado na Vercel.</p>
        </div>
      </Container>
    </footer>
  );
}


import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Suporte",
  description: "FAQs, canais e formulário de contato do AvaliA.",
};

export default function SuportePage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-bold text-gray-900">Suporte</h1>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Encontre respostas rápidas e fale com nossa equipe.
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <section aria-labelledby="faq-title">
            <h2 id="faq-title" className="text-xl font-semibold text-gray-900">
              Perguntas frequentes
            </h2>
            <ul className="mt-4 space-y-4 text-gray-800">
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Como funciona a avaliação?</strong>
                <br />
                <span className="text-gray-700">
                  A IA analisa nitidez, luz, enquadramento e composição; em
                  segundos, você recebe nota e feedback.
                </span>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Há plano gratuito?</strong>
                <br />
                <span className="text-gray-700">
                  Existem opções acessíveis e alternativas limitadas gratuitas
                  para começar.
                </span>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">
                  Quantas fotos posso enviar?
                </strong>
                <br />
                <span className="text-gray-700">
                  Depende do plano: do Básico ao Completo, os limites variam por
                  mês.
                </span>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">
                  Quais os horários de atendimento?
                </strong>
                <br />
                <span className="text-gray-700">
                  Seg–Sex, 9h–18h (BRT).
                </span>
              </li>
            </ul>
          </section>

          <section aria-labelledby="contato-title">
            <h2
              id="contato-title"
              className="text-xl font-semibold text-gray-900"
            >
              Fale com a gente
            </h2>
            <div className="mt-4">
              <ContactForm />
            </div>
            <div className="mt-6 text-sm text-gray-700 space-y-2">
              <p>
                <strong>E-mail:</strong> atendimento@avalia.app
              </p>
              <p>
                <strong>Telefone:</strong> +55 (11) 99999-9999
              </p>
              <p>
                <strong>Horário:</strong> Seg–Sex, 9h–18h (BRT)
              </p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}


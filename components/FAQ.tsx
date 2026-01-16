import Container from "./Container";

export default function FAQ() {
  const faqs = [
    {
      q: "Como o app funciona?",
      a: "Você envia a foto pelo app e, com base em critérios fotográficos, a IA analisa luz, enquadramento, composição e edição. Em segundos, você recebe elogios, sugestões de melhoria e dicas práticas.",
    },
    {
      q: "Preciso ser aluno para usar?",
      a: "Não. O app é para qualquer pessoa que deseja melhorar suas fotos, mesmo sem ter feito cursos.",
    },
    {
      q: "O app serve para qualquer tipo de foto?",
      a: "Sim. Selfies, paisagem, retratos, comida, pets e objetos. O app identifica o tipo de imagem e traz orientações específicas.",
    },
    {
      q: "Preciso de um celular específico?",
      a: "Não. Funciona com fotos feitas em qualquer modelo. O foco está na técnica e composição.",
    },
    {
      q: "O app dá nota nas fotos?",
      a: "Sim, mas o objetivo é a evolução contínua. A nota vem acompanhada de uma análise clara e educativa.",
    },
    {
      q: "É gratuito?",
      a: "Há planos acessíveis e opções limitadas gratuitas para começar.",
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Tire suas dúvidas sobre o AvaliA e como ele pode ajudar você a
            melhorar suas fotos.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 p-5 bg-white hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900">{faq.q}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


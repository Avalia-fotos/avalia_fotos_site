import Container from "./Container";

export default function Benefits() {
  const items = [
    {
      title: "Análise técnica automática",
      desc: "Avaliação baseada em critérios profissionais para luz, composição e enquadramento.",
    },
    {
      title: "Feedback educativo",
      desc: "Pontos positivos, o que melhorar e sugestões práticas em linguagem clara.",
    },
    {
      title: "Nota visual",
      desc: "Pontuação final justificada por múltiplos critérios técnicos e estéticos.",
    },
    {
      title: "Histórico e evolução",
      desc: "Acompanhe suas avaliações anteriores e compare resultados ao longo do tempo.",
    },
    {
      title: "Interface intuitiva",
      desc: "Experiência pensada para aprender a cada análise, sem complicações.",
    },
  ];

  return (
    <section id="beneficios" className="py-16 bg-gray-50">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Benefícios e diferenciais
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Mais que uma nota: o AvaliA ensina, orienta e acompanha sua evolução
            fotográfica.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


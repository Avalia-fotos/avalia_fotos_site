import Container from "./Container";

export default function HowItWorks() {
  const steps = [
    {
      title: "Acesse o app",
      text: "Entre no AvaliA e inicie uma nova avaliação.",
    },
    {
      title: "Escolha uma imagem",
      text: "Selecione a foto do rolo de câmera ou galeria.",
    },
    {
      title: "Peça para avaliar",
      text: "A IA analisa critérios fotográficos profissionais automaticamente.",
    },
    {
      title: "Receba o resultado",
      text: "Veja nota visual e feedback com pontos fortes e a melhorar.",
    },
  ];

  return (
    <section id="como-funciona" className="py-16">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Como funciona</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            A IA do AvaliA detecta e avalia nitidez, iluminação, enquadramento e
            composição com base em critérios fotográficos. Em seguida, entrega
            observações detalhadas e uma nota final.
          </p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={index}
              className="rounded-lg border border-gray-200 p-5 bg-white hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-semibold text-brand-600">
                Passo {index + 1}
              </div>
              <h3 className="mt-2 font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}


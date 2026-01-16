import Container from "./Container";

type Plan = {
  name: string;
  price: string;
  cadence: "/mês" | "/ano";
  features: string[];
  highlight?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Básico",
    price: "R$19,90",
    cadence: "/mês",
    features: [
      "Acesso à ferramenta AvaliA",
      "30 avaliações por mês (1 por dia)",
      "Grupo exclusivo no WhatsApp",
    ],
  },
  {
    name: "Completo",
    price: "R$39,90",
    cadence: "/mês",
    features: [
      "Acesso à ferramenta AvaliA",
      "120 avaliações por mês (4 por dia)",
      "Grupo exclusivo no WhatsApp",
      "Concursos fotográficos: foto do dia, semana, mês e ano",
      "Presentes exclusivos para ganhadores (mês/ano)",
    ],
    highlight: true,
  },
  {
    name: "Completo Anual",
    price: "R$197",
    cadence: "/ano",
    features: [
      "Tudo do plano Completo mensal",
      "Desconto aproximado de 45%",
      "Pacote com 15 Filtros de Edição do AvaliA",
      "Resgate de créditos para avaliações extras",
    ],
    badge: "Mais recomendado",
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-16">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Planos e preços</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Escolha o plano ideal e comece agora mesmo. Valores e benefícios
            baseados na oferta atual do AvaliA.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border bg-white p-6 ${
                plan.highlight
                  ? "ring-2 ring-brand-600 border-brand-600"
                  : "border-gray-200"
              } hover:shadow-lg transition-shadow`}
            >
              {plan.badge && (
                <div className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-base font-semibold text-gray-500 ml-1">
                  {plan.cadence}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-600 mr-2">•</span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/suporte"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700 transition-colors"
              >
                Escolher plano
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-gray-500 text-center">
          Observação: ofertas promocionais podem variar ao longo do tempo.
          Verifique as condições vigentes no momento da compra.
        </p>
      </Container>
    </section>
  );
}


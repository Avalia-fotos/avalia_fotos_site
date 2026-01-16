import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-transparent">
      <Container>
        <div className="py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              O aplicativo mais completo para avaliar suas fotos com IA
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Receba uma análise técnica sincera e em segundos: nitidez,
              iluminação, enquadramento e composição. Ganhe uma nota visual e um
              feedback educativo com pontos fortes e sugestões práticas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#planos"
                className="inline-flex items-center justify-center rounded-md bg-brand-600 px-6 py-3 text-white font-semibold hover:bg-brand-700 transition-colors"
              >
                Começar agora
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Como funciona
              </a>
            </div>
          </div>
          <div aria-hidden="true" className="relative">
            <div className="rounded-xl ring-1 ring-black/5 shadow-lg bg-gradient-to-br from-brand-500 to-brand-700 aspect-video flex items-center justify-center">
              <span className="text-white text-2xl font-bold">AvaliA</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


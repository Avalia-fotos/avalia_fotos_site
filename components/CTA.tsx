import Container from "./Container";

export default function CTA() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-2xl bg-brand-600 px-8 py-10 text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Avalie suas fotos hoje mesmo
          </h2>
          <p className="mt-2 text-brand-50 max-w-2xl leading-relaxed">
            Comece a receber feedback técnico e prático para evoluir em cada
            clique.
          </p>
          <div className="mt-6">
            <a
              href="#planos"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-semibold text-brand-700 hover:bg-gray-50 transition-colors"
            >
              Ver planos
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}


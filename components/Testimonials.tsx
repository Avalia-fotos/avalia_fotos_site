import Container from "./Container";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana",
      role: "Estudante",
      quote:
        "O feedback foi direto ao ponto e já melhorei minhas fotos no mesmo dia.",
    },
    {
      name: "Lucas",
      role: "Iniciante",
      quote:
        "A nota visual, junto com as dicas, deixa claro o que treinar.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Depoimentos</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Veja o que nossos usuários dizem sobre o AvaliA.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className="rounded-xl bg-white p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <p className="text-gray-800 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-3 text-sm text-gray-600">
                — {testimonial.name}, {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}


import Container from "@/components/Container";

export const metadata = {
  title: "Política de Privacidade",
  description:
    "Como coletamos, armazenamos, protegemos e usamos seus dados e imagens no AvaliA.",
};

export default function PoliticaPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-bold text-gray-900">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-gray-700">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <section className="prose max-w-none mt-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Esta Política de Privacidade descreve como o AvaliA (&ldquo;nós&rdquo;,
            &ldquo;nosso&rdquo;) coleta, usa, divulga e protege dados pessoais,
            incluindo imagens/fotos enviadas por usuários.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            1. Dados que coletamos
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Coletamos os seguintes tipos de dados:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Imagens/fotos enviadas para avaliação</li>
            <li>
              Metadados técnicos (ex.: tamanho, formato, dimensões das imagens)
            </li>
            <li>
              Dados de uso (interações, data/hora, recursos acessados no app)
            </li>
            <li>
              Informações de conta (nome, e-mail) quando fornecidas pelo usuário
            </li>
            <li>
              Informações de pagamento processadas por provedores terceiros (não
              armazenamos dados completos de cartão)
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            2. Finalidades do tratamento
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Utilizamos os dados para:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              Analisar imagens via IA e gerar feedback técnico e educativo
            </li>
            <li>Operar, manter e melhorar o serviço</li>
            <li>Oferecer suporte ao usuário</li>
            <li>Cumprir obrigações legais</li>
            <li>Prevenir fraude e abuso</li>
            <li>
              Análises estatísticas em forma agregada e anonimizada
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            3. Base legal
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tratamos dados com fundamento em: execução de contrato, legítimo
            interesse (melhorias e segurança), cumprimento legal e consentimento
            quando aplicável.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            4. Armazenamento e retenção
          </h2>
          <p className="text-gray-700 leading-relaxed">
            As imagens podem ser armazenadas temporariamente para processamento
            e auditoria de qualidade. Retemos dados pelo período necessário às
            finalidades declaradas e conforme exigências legais. Você pode
            solicitar exclusão conforme item 8.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            5. Segurança
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Adotamos medidas técnicas e organizacionais adequadas (criptografia
            em trânsito, controles de acesso, registros de auditoria) para
            proteger seus dados contra acesso, alteração, divulgação ou
            destruição não autorizados.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            6. Compartilhamento
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Não vendemos dados pessoais. Podemos compartilhar com: provedores de
            infraestrutura, processamento de pagamento, analytics, suporte, e
            conforme exigido por lei. Compartilhamentos ocorrem sob contratos e
            obrigações de confidencialidade.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            7. Transferências internacionais
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Seus dados podem ser processados fora do seu país por provedores em
            conformidade com salvaguardas adequadas (ex.: cláusulas contratuais
            padrão).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            8. Seus direitos
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dependendo da jurisdição, você pode ter direitos de acesso, correção,
            portabilidade, oposição, limitação do tratamento e exclusão.
            Solicitações: atendimento@avalia.app.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            9. Privacidade de crianças e adolescentes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            O AvaliA não se destina a menores de 13 anos. Para usuários entre 13
            e 18 anos, recomenda-se consentimento/ciência dos responsáveis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            10. Cookies e tecnologias similares
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Utilizamos cookies essenciais e de desempenho para autenticação,
            segurança e métricas agregadas. Você pode gerenciá-los nas
            configurações do navegador.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            11. Retenção de registros e logs
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Mantemos logs de aplicação por período limitado para segurança,
            suporte e melhorias.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            12. Contato do DPO/Encarregado
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Encarregado: dpo@avalia.app.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            13. Atualizações desta política
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Podemos atualizar esta Política. Publicaremos a versão vigente com a
            data de atualização acima.
          </p>
        </section>
      </Container>
    </div>
  );
}


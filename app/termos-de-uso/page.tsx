import Container from "@/components/Container";

export const metadata = {
  title: "Termos de Uso",
  description:
    "Direitos, responsabilidades e limitações de uso do AvaliA.",
};

export default function TermosPage() {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-3xl font-bold text-gray-900">Termos de Uso</h1>
        <p className="mt-2 text-gray-700">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <section className="prose max-w-none mt-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Aceitação</h2>
          <p className="text-gray-700 leading-relaxed">
            Ao acessar ou usar o AvaliA, você concorda com estes Termos. Se não
            concordar, não utilize o serviço.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Serviço</h2>
          <p className="text-gray-700 leading-relaxed">
            O AvaliA fornece avaliação de fotos com IA, incluindo nota visual e
            feedback técnico. Recursos podem variar conforme o plano escolhido.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            3. Registro e conta
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Você deve fornecer informações verdadeiras e manter credenciais
            seguras. Você é responsável por atividades realizadas em sua conta.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            4. Conteúdo do usuário
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Você detém os direitos sobre suas imagens. Ao enviá-las, concede
            licença limitada e não exclusiva para processá-las com a finalidade
            de avaliação, melhoria do serviço e suporte. Você declara ter os
            direitos necessários sobre as imagens enviadas.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            5. Uso aceitável
          </h2>
          <p className="text-gray-700 leading-relaxed">
            É proibido enviar conteúdo ilegal, difamatório, ofensivo,
            discriminatório, com nudez explícita, violento ou que viole direitos
            de terceiros. É vedado tentar burlar limites de uso, engenharia
            reversa ou uso automatizado não autorizado.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            6. Assinaturas e pagamentos
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Planos podem ser cobrados mensalmente ou anualmente. Impostos e taxas
            podem se aplicar. Pagamentos são processados por terceiros.
            Cancelamentos se aplicam ao ciclo vigente conforme a política da
            loja/plataforma.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Isenções</h2>
          <p className="text-gray-700 leading-relaxed">
            As análises são geradas por modelos de IA e podem conter
            imprecisões. As recomendações têm caráter informativo e educacional;
            uso por sua conta e risco.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            8. Limitação de responsabilidade
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Na extensão máxima permitida por lei, o AvaliA não será responsável
            por perdas indiretas, incidentais, consequenciais, lucros cessantes
            ou perda de dados decorrentes do uso do serviço.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">9. Rescisão</h2>
          <p className="text-gray-700 leading-relaxed">
            Podemos suspender ou encerrar o acesso em caso de violação destes
            Termos, risco à segurança, fraude ou exigência legal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            10. Propriedade intelectual
          </h2>
          <p className="text-gray-700 leading-relaxed">
            As marcas, logotipos, interface e código do AvaliA são protegidos por
            direitos autorais e outras leis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">11. Privacidade</h2>
          <p className="text-gray-700 leading-relaxed">
            O uso do serviço é regido também pela Política de Privacidade.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">12. Alterações</h2>
          <p className="text-gray-700 leading-relaxed">
            Podemos alterar estes Termos a qualquer momento. O uso contínuo após
            alterações implica aceitação.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">13. Contato</h2>
          <p className="text-gray-700 leading-relaxed">
            Para questões sobre estes Termos, entre em contato:
            atendimento@avalia.app
          </p>
        </section>
      </Container>
    </div>
  );
}


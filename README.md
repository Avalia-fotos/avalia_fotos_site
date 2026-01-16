# AvaliA — Site Institucional

Site institucional do aplicativo **AvaliA**, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 📋 Sobre o Projeto

O AvaliA é um aplicativo que avalia fotos dos usuários usando inteligência artificial. Ele analisa elementos como nitidez, iluminação, enquadramento e composição, gera uma nota visual e devolve feedback detalhado com pontos positivos, pontos a melhorar e sugestões práticas.

Este site institucional apresenta o aplicativo, seus benefícios, planos e oferece suporte aos usuários.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📦 Requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

## 🔧 Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd avalia_fotos_site
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
avalia_fotos_site/
├── app/
│   ├── layout.tsx                    # Layout raiz com Header/Footer
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Estilos globais Tailwind
│   ├── suporte/
│   │   └── page.tsx                  # Página de suporte
│   ├── politica-de-privacidade/
│   │   └── page.tsx                  # Política de privacidade
│   ├── termos-de-uso/
│   │   └── page.tsx                  # Termos de uso
│   └── api/
│       └── contact/
│           └── route.ts              # API route para formulário
├── components/
│   ├── Header.tsx                    # Cabeçalho com navegação
│   ├── Footer.tsx                    # Rodapé com links
│   ├── Container.tsx                 # Container wrapper responsivo
│   ├── Hero.tsx                      # Banner principal da home
│   ├── HowItWorks.tsx                # Seção "Como funciona"
│   ├── Benefits.tsx                  # Seção de benefícios
│   ├── Pricing.tsx                   # Seção de planos e preços
│   ├── Testimonials.tsx               # Depoimentos
│   ├── FAQ.tsx                        # FAQs
│   ├── CTA.tsx                       # Chamada para ação
│   └── ContactForm.tsx               # Formulário de contato
├── lib/
│   └── utils.ts                      # Funções utilitárias
├── public/
│   └── logo.svg                      # Logo do AvaliA
└── README.md
```

## 🌐 Deploy na Vercel

O projeto está pronto para deploy na Vercel. Siga os passos:

### Opção 1: Deploy via CLI

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Execute o deploy:
```bash
vercel
```

3. Siga as instruções no terminal.

### Opção 2: Deploy via Dashboard

1. Acesse [vercel.com](https://vercel.com) e faça login.

2. Clique em "Add New Project".

3. Conecte seu repositório Git (GitHub, GitLab ou Bitbucket).

4. A Vercel detectará automaticamente o Next.js e configurará o projeto.

5. Clique em "Deploy".

### Variáveis de Ambiente (Opcional)

Se você quiser integrar um serviço de email para o formulário de contato, adicione as variáveis de ambiente no dashboard da Vercel:

- Para Resend: `RESEND_API_KEY`
- Para SMTP: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🎨 Personalização

### Logo

Substitua o arquivo `public/logo.svg` pelo seu logo personalizado.

### Cores

As cores da marca podem ser ajustadas em `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    50: "#eef7ff",
    100: "#d8ecff",
    500: "#2563eb",  // Cor primária
    600: "#1d4ed8",
    // ...
  },
}
```

### Conteúdo

- **Planos e preços**: Edite `components/Pricing.tsx`
- **FAQs**: Edite `components/FAQ.tsx` e `app/suporte/page.tsx`
- **Informações de contato**: Edite `components/Footer.tsx` e `app/suporte/page.tsx`

### Imagens

Adicione as seguintes imagens na pasta `public/`:

- `og-image.png` (1200x630px) - Imagem para Open Graph
- `icon-192.png` (192x192px) - Ícone do site

## 📧 Formulário de Contato

O formulário de contato está configurado para registrar mensagens no console do servidor. Para enviar emails reais:

1. Integre um serviço como [Resend](https://resend.com) ou configure SMTP
2. Atualize `app/api/contact/route.ts` com a lógica de envio
3. Adicione as variáveis de ambiente necessárias

## 🔒 Política de Privacidade e Termos de Uso

As páginas legais estão incluídas com textos padrão. **Recomenda-se revisar e adaptar** os textos conforme necessário com um advogado, especialmente se o aplicativo coletar dados sensíveis ou operar em jurisdições específicas.

## ♿ Acessibilidade

O site foi desenvolvido seguindo boas práticas de acessibilidade:

- Semântica HTML correta
- ARIA labels onde necessário
- Navegação por teclado
- Contraste adequado
- Focus states visíveis

## 📱 Responsividade

O site é totalmente responsivo e foi testado em:

- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🐛 Troubleshooting

### Erro ao instalar dependências

Certifique-se de estar usando Node.js 18 ou superior:
```bash
node --version
```

### Erro de build

Limpe o cache e reinstale:
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📄 Licença

Este projeto é privado e proprietário do AvaliA.

## 🤝 Suporte

Para suporte, entre em contato:
- Email: atendimento@avalia.app
- Telefone: +55 (11) 99999-9999
- Horário: Seg–Sex, 9h–18h (BRT)

---

**Desenvolvido com ❤️ usando Next.js e hospedado na Vercel**


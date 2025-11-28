# LegendIA - Frontend

Interface web desenvolvida em React para a plataforma LegendIA, um sistema de transcrição automática de vídeos e áudios com legendas em tempo real, criado em parceria com a Associação do Amor Inclusivo (AAI).

## Sobre o Projeto

O LegendIA é uma ferramenta de acessibilidade que utiliza inteligência artificial para gerar legendas automáticas em vídeos e áudios, promovendo a inclusão de pessoas com deficiência auditiva. Este frontend oferece uma interface intuitiva e responsiva para upload, processamento e visualização de mídia com legendas sincronizadas.

## Funcionalidades

- **Página Institucional**: Apresentação da Associação do Amor Inclusivo
- **Upload de Mídia**: Suporte para arquivos de vídeo e áudio
- **Transcrição Automática**: Integração com API backend para processamento
- **Player com Legendas**: Visualização de legendas sincronizadas em tempo real
- **Interface Responsiva**: Design adaptável para diferentes dispositivos
- **Navegação Intuitiva**: Alternância simples entre páginas

## Tecnologias Utilizadas

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **React DOM 19.2.0** - Renderização de componentes React
- **React Scripts 5.0.1** - Scripts e configuração do Create React App
- **CSS3** - Estilização customizada
- **Google Fonts (Poppins)** - Tipografia moderna

## Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Backend LegendIA rodando em `http://127.0.0.1:5000`

### Passo a Passo

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd legenda-pro-frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o backend**
   - Certifique-se de que o backend está rodando em `http://127.0.0.1:5000`
   - O endpoint de transcrição deve estar disponível em `/transcrever`

4. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

5. **Acesse a aplicação**
   - Abra seu navegador em [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

```
legenda-pro-frontend/
├── public/
│   ├── index.html          # Template HTML principal
│   ├── manifest.json       # Configurações PWA
│   ├── favicon.ico         # Ícone da aplicação
│   └── robots.txt          # Configurações para crawlers
├── src/
│   ├── assets/             # Imagens e recursos
│   │   ├── logo_amor_inclusivo.png
│   │   └── 1.png          # Imagem hero
│   ├── App.js              # Componente principal e roteamento
│   ├── App.css             # Estilos globais
│   ├── HomePage.js         # Página institucional da AAI
│   ├── ToolPage.js         # Página da ferramenta de transcrição
│   └── index.js            # Ponto de entrada da aplicação
├── package.json            # Dependências e scripts
├── .gitignore             # Arquivos ignorados pelo Git
└── README.md              # Documentação
```

## Componentes Principais

### App.js
Componente raiz que gerencia:
- Estado global da aplicação
- Navegação entre páginas (Home/Tool)
- Header fixo com logo e botões de navegação

### HomePage.js
Página institucional contendo:
- Seção hero com logo da AAI
- História da organização
- Missão, visão e valores
- Carrossel de ações
- Footer com informações de contato e doação

### ToolPage.js
Ferramenta de transcrição com:
- Upload de arquivos de mídia
- Preview do arquivo selecionado
- Integração com API de transcrição
- Player de vídeo com legendas sincronizadas
- Estados de loading e erro

## Fluxo de Uso

1. **Página Inicial**: Usuário conhece a AAI e sua missão
2. **Navegação**: Clica em "Ir para a IA" no header
3. **Upload**: Seleciona arquivo de vídeo ou áudio
4. **Transcrição**: Clica em "Transcrever" e aguarda processamento
5. **Visualização**: Assiste ao vídeo com legendas sincronizadas
6. **Novo Arquivo**: Pode transcrever outro arquivo ou voltar ao início

## Integração com Backend

### Endpoint de Transcrição

```javascript
POST http://127.0.0.1:5000/transcrever
Content-Type: multipart/form-data

Body:
{
  video: File
}

Response:
{
  segmentos: [
    {
      start: 0.0,
      end: 2.5,
      text: "Texto da legenda"
    },
    ...
  ]
}
```

### Tratamento de Erros

A aplicação trata os seguintes cenários:
- Arquivo não selecionado
- Erro de conexão com backend
- Resposta de erro do servidor
- Arquivo em formato inválido

## Customização

### Cores Principais

```css
--primary-color: #c90606;      /* Vermelho principal */
--primary-hover: #a10505;      /* Vermelho hover */
--background: rgb(240, 242, 212); /* Bege claro */
--text-dark: #333;             /* Texto escuro */
--white: #ffffff;              /* Branco */
```

### Fontes

- **Principal**: Poppins (Google Fonts)
- **Pesos**: 400 (Regular), 500 (Medium), 700 (Bold)

## Responsividade

O design é totalmente responsivo com breakpoints em:
- **Desktop**: > 768px (3 colunas)
- **Tablet/Mobile**: ≤ 768px (1 coluna)

## Performance

### Otimizações Implementadas

- Lazy loading de imagens
- Componentes funcionais com Hooks
- CSS otimizado sem bibliotecas pesadas
- Build otimizado com minificação
- Code splitting automático

## Segurança

### Considerações

- Validação de tipos de arquivo no cliente
- Sanitização de URLs de vídeo
- Sem armazenamento local de arquivos sensíveis
- CORS configurado para ambiente de desenvolvimento

### Configuração de Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

```bash
REACT_APP_API_URL=http://seu-backend.com
```

Atualize a URL da API em `ToolPage.js`:

```javascript
const response = await fetch(`${process.env.REACT_APP_API_URL}/transcrever`, {
  // ...
});
```

## Troubleshooting

### Problemas Comuns

**1. Erro de CORS**
```
Access to fetch at 'http://127.0.0.1:5000/transcrever' has been blocked by CORS policy
```
**Solução**: Configure CORS no backend Flask

**2. Vídeo não carrega**
```
Failed to load resource: net::ERR_FILE_NOT_FOUND
```
**Solução**: Verifique o formato do arquivo e o tamanho

**3. Legendas não aparecem**
```
currentSegment is undefined
```
**Solução**: Verifique o formato da resposta da API

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Diretrizes de Código

- Use componentes funcionais com Hooks
- Mantenha componentes pequenos e reutilizáveis
- Siga o padrão de nomenclatura camelCase
- Comente código complexo
- Teste em diferentes navegadores

## Licença

Este projeto foi desenvolvido em parceria com a **Associação do Amor Inclusivo (AAI)** e está disponível para uso educacional e social.


💙 **Desenvolvido com amor e tecnologia para promover a inclusão social**

⚽ **LegendIA** - Quebrando barreiras através da tecnologia

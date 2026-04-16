# 🎬 LegendIA — Frontend

> Interface web desenvolvida em React para a plataforma **LegendIA**: ferramenta de acessibilidade que usa Inteligência Artificial para gerar legendas automáticas e sincronizadas em vídeos e áudios. Projeto criado em parceria com a [Associação do Amor Inclusivo (AAI)](https://www.amorinclusivo.org.br/).

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Responsivo-1572B6?style=flat&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-Educacional%20%2F%20Social-blueviolet?style=flat)

---

## 💡 Contexto e motivação

O LegendIA nasceu da necessidade de tornar conteúdos em vídeo e áudio acessíveis para pessoas com deficiência auditiva. Em parceria com a AAI, desenvolvemos uma plataforma que permite que qualquer pessoa faça upload de um arquivo de mídia e receba de volta legendas sincronizadas, geradas automaticamente por IA — sem necessidade de conhecimento técnico.

---

## ✨ Funcionalidades

- **Página institucional** — apresentação da AAI, sua missão, história e como apoiar
- **Upload de mídia** — suporte a arquivos de vídeo e áudio
- **Transcrição automática** — integração com a API backend (Flask + Whisper/ASR)
- **Player com legendas sincronizadas** — visualização em tempo real das legendas no vídeo
- **Design responsivo** — funciona em desktop, tablet e mobile

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | React 19.2 |
| Linguagem | JavaScript (ES6+) |
| Estilização | CSS3 customizado, Google Fonts (Poppins) |
| Build tool | Create React App (React Scripts 5.0.1) |

---

## ⚙️ Como executar localmente

### Pré-requisitos

- Node.js 14+
- npm ou yarn
- [Backend LegendIA](https://github.com/DanielRodrigues-prog) rodando em `http://127.0.0.1:5000`

### 1. Clone o repositório

```bash
git clone https://github.com/DanielRodrigues-prog/LegendIA-FRONTEND.git
cd LegendIA-FRONTEND
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
# Edite o .env com a URL do seu backend
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm start
```

Acesse `http://localhost:3000` no navegador.

---

## 🔧 Variáveis de ambiente

Crie um arquivo `.env` na raiz com base no `.env.example`:

```env
REACT_APP_API_URL=http://127.0.0.1:5000
```

---

## 📁 Estrutura do projeto

```
LegendIA-FRONTEND/
├── public/
│   ├── index.html          # Template HTML principal
│   ├── manifest.json       # Configurações PWA
│   └── favicon.ico
├── src/
│   ├── assets/             # Imagens e recursos estáticos
│   ├── App.js              # Componente raiz e roteamento entre páginas
│   ├── App.css             # Estilos globais
│   ├── HomePage.js         # Página institucional da AAI
│   ├── ToolPage.js         # Ferramenta de transcrição com IA
│   └── index.js            # Ponto de entrada
├── .env.example            # Exemplo de variáveis de ambiente
├── package.json
└── .gitignore
```

---

## 🔌 Integração com o backend

A ferramenta se comunica com a API backend via `POST /transcrever`:

**Request:**
```
Content-Type: multipart/form-data
Body: video (file)
```

**Response:**
```json
{
  "segmentos": [
    { "start": 0.0, "end": 2.5, "text": "Texto da legenda" },
    { "start": 2.5, "end": 5.0, "text": "Continuação da legenda" }
  ]
}
```

---

## 🐛 Problemas comuns

**Erro de CORS ao chamar o backend:**
Configure `flask-cors` no backend:
```python
from flask_cors import CORS
CORS(app)
```

**Vídeo não carrega ou legendas não aparecem:**
Verifique se o formato do arquivo é suportado (`.mp4`, `.webm`, `.ogg` para vídeo; `.mp3`, `.wav` para áudio) e se o backend está rodando na porta correta.

---

## 🤝 Como contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona minha feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Projeto desenvolvido em parceria com a **Associação do Amor Inclusivo (AAI)** para fins educacionais e de inclusão social.

---

## 👤 Autor

**Daniel Rodrigues**
- GitHub: [@DanielRodrigues-prog](https://github.com/DanielRodrigues-prog)
- LinkedIn: [daniel-rodrigues-10305b239](https://www.linkedin.com/in/daniel-rodrigues-10305b239/)

---

*Desenvolvido com tecnologia para quebrar barreiras e promover a inclusão social. 💙*

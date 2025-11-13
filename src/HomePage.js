import React from 'react';
import logoAmorInclusivo from './assets/logo_amor_inclusivo.png';

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <img 
          src={logoAmorInclusivo} 
          alt="Logo Amor Inclusivo" 
          className="hero-logo" 
        />
        <h2>Quem Somos</h2>
        <p className="sub-text">
          Conheça a Associação do Amor Inclusivo (AAI)
        </p>
      </section>

      <section className="content-section">
        <h3>Nossa História</h3>
        <p>
          A Associação do Amor Inclusivo (AAI) é uma ONG comprometida com a inclusão e o acolhimento de pessoas surdas na comunidade de Sorocaba. Fundada em dezembro de 2017, a AAI surgiu do sonho de Maria Ângela Oliveira, que, após anos de dedicação ao ensino de uma jovem surda em sua casa, decidiu expandir sua missão e criar uma organização dedicada a promover a inserção social e educacional de surdos.
        </p>
        <p>
          A AAI é um espaço vibrante onde são oferecidas diversas atividades educacionais e culturais. O programa inclui aulas de Português, Matemática, Língua Brasileira de Sinais (Libras), Música, Artesanato e muito mais. A AAI acredita que a verdadeira inclusão vai além da aceitação passiva; é necessário criar um ambiente onde todos possam se expressar e sentir-se valorizados.
        </p>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <h4>🎯 Nossa Missão</h4>
          <p>
            Promover a educação e a inclusão social de pessoas com deficiência auditiva, 
            visual ou múltipla, criando oportunidades para seu desenvolvimento e 
            integração na sociedade.
          </p>
        </div>
        <div className="mission-card">
          <h4>👁️ Nossa Visão</h4>
          <p>
            A Associação do Amor Inclusivo, oferece a alfabetização em Língua Portuguesa e 
            Língua Brasileira de Sinais e Oficinas às pessoas com deficiência, qualificando-se 
            por sua visão prospectiva na oferta de produtos e serviços.
          </p>
        </div>
        <div className="mission-card">
          <h4>❤️ Valores</h4>
          <p>
            A instituição trabalha norteada pelo compromisso ético e pelo atendimento 
            de qualidade, assegurando as ferramentas para sedimentação de melhor 
            qualidade de vida, autonomia e esperança de um futuro mais digno.
          </p>
        </div>
      </section>

      <section className="carousel-section">
        <h3>Nossas Ações</h3>
        <div className="carousel-mockup">
          <div className="carousel-card-mockup">(Oficinas)</div>
          <div className="carousel-card-mockup">(Palestras)</div>
          <div className="carousel-card-mockup">(Eventos)</div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Contato</h4>
            <p>E-mail: aainclusivo@gmail.com</p>
            <p>Telefone: (15) 99774-1042</p>
            <p>Endereço: R. Padre Luiz, 652 - Centro, Sorocaba - SP</p>
          </div>
          <div className="footer-col">
            <h4>Como Ajudar</h4>
            <div className="pix-info">
              <strong>Ajude com qualquer valor!</strong>
              <span>PIX (CNPJ): 29.760.257/0001-23</span>
            </div>
          </div>
          <div className="footer-col">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/associacaoamorinclusivo" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://www.instagram.com/amorinclusivo/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://www.youtube.com/@associacaodoamorinclusivo" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
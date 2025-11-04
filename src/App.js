// src/App.js

import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  // --- Estados da Aplicação ---
  const [fileUrl, setFileUrl] = useState(null);
  const [segments, setSegments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // --- Estados do Player ---
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  // --- Função de Seleção de Arquivo ---
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileUrl(URL.createObjectURL(file));
      setSegments([]); // Limpa legendas antigas
      setError(null);
    }
  };

  // --- Função de Transcrição ---
  const handleTranscribe = async () => {
    if (!selectedFile) {
      setError("Por favor, escolha um arquivo primeiro.");
      return;
    }
    setIsLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('video', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:5000/transcrever', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Ocorreu um erro no servidor.");
      }
      const data = await response.json();
      setSegments(data.segmentos); // Corrigido
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Funções do Player ---
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleGoBack = () => {
    setFileUrl(null);
    setSelectedFile(null);
    setSegments([]);
    setError(null);
  };

  // Encontra a legenda atual
  const currentSegment = segments.find(
    (segment) => currentTime >= segment.start && currentTime <= segment.end
  );

  // --- RENDERIZAÇÃO ---
  return (
    <div className="App">
      {/* --- CABEÇALHO (Sempre visível) --- */}
      <header className="main-header">
        <div className="logo">LegendIA</div>
        <nav>
          <button className="nav-button">Entrar</button>
        </nav>
      </header>

      {/* --- CONTEÚDO PRINCIPAL (Muda dinamicamente) --- */}
      <main>
        {/*
          Se a transcrição terminou (segments.length > 0),
          mostre o Player. Senão, mostre a área de Upload.
        */}
        {segments.length > 0 ? (
          
          /* --- SEÇÃO DO PLAYER (Quando o vídeo está pronto) --- */
          <section className="player-section">
            <button className="back-button-main" onClick={handleGoBack}>
              &larr; Transcrever outro vídeo
            </button>
            <div className="video-wrapper-responsive">
              <video 
                src={fileUrl} 
                controls  /* O controls JÁ INCLUI o botão de tela cheia */
                ref={videoRef}
                onTimeUpdate={handleTimeUpdate}
                autoPlay /* Começa a tocar sozinho */
              />
              {currentSegment && (
                <div className="video-subtitle-overlay-player">
                  {currentSegment.text}
                </div>
              )}
            </div>
          </section>

        ) : (

          /* --- SEÇÃO DE UPLOAD (A tela inicial) --- */
          <section className="hero-section">
            <h2>Transcrição de Vídeos com IA</h2>
            <p>Envie seu vídeo ou áudio e deixe nossa IA fazer o trabalho pesado.</p>

            <div className="upload-container-dash">
              <input 
                id="file-upload" 
                type="file" 
                onChange={handleFileChange} 
                accept="video/*,audio/*"
              />
              <label htmlFor="file-upload" className="custom-file-upload-dash">
                Escolher Arquivo
              </label>
              <span id="file-name-dash">
                {selectedFile ? selectedFile.name : "Nenhum arquivo selecionado"}
              </span>
            </div>

            <button 
              className="transcribe-button-dash" 
              onClick={handleTranscribe}
              disabled={isLoading || !selectedFile}
            >
              {isLoading ? "Transcrevendo..." : "Transcrever"}
            </button>

            {error && <div className="error-message">{error}</div>}
            {isLoading && <div className="loading-spinner">Carregando...</div>}
          </section>

        )}

        {/* --- SEÇÕES FALSAS (Sempre visíveis) --- */}
        <section className="carousel-section">
          <h3>Meus Projetos Recentes</h3>
          <div className="carousel-mockup">
            <div className="carousel-card-mockup">(Projeto 1)</div>
            <div className="carousel-card-mockup">(Projeto 2)</div>
            <div className="carousel-card-mockup">(Projeto 3)</div>
          </div>
        </section>

        <section className="carousel-section">
          <h3>Lista de Favoritos</h3>
          <div className="carousel-mockup">
            <div className="carousel-card-mockup">(Favorito 1)</div>
            <div className="carousel-card-mockup">(Favorito 2)</div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
import React, { useState, useRef } from 'react';

function ToolPage() {
  const [fileUrl, setFileUrl] = useState(null);
  const [segments, setSegments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileUrl(URL.createObjectURL(file));
      setSegments([]);
      setError(null);
    }
  };

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
      setSegments(data.segmentos);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const currentSegment = segments.find(
    (segment) => currentTime >= segment.start && currentTime <= segment.end
  );

  return (
    <>
      {segments.length > 0 ? (

        <section className="player-section">
          <h2>LegendIA</h2>
          <div className="video-wrapper-responsive">
            <video 
              src={fileUrl} 
              controls
              ref={videoRef}
              onTimeUpdate={handleTimeUpdate}
              autoPlay
            />
            {currentSegment && (
              <div className="video-subtitle-overlay-player">
                {currentSegment.text}
              </div>
            )}
          </div>
          
          <button 
            className="transcribe-button-dash" 
            style={{marginTop: '20px'}}
            onClick={() => {
              setFileUrl(null);
              setSelectedFile(null);
              setSegments([]);
            }}
          >
            Transcrever Outro
          </button>
        </section>

      ) : (

        <section className="hero-section tool-page-hero">
          <h2>LegendIA</h2>
          <p>Envie seu vídeo ou áudio e veja a mágica.</p>

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

          {fileUrl && (
            <div className="video-wrapper-responsive" style={{margin: '20px auto', backgroundColor: '#000'}}>
              <video src={fileUrl} controls style={{maxHeight: '40vh'}} />
            </div>
          )}

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
    </>
  );
}

export default ToolPage;
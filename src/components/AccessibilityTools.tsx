import { useEffect, useRef } from 'react';

export function AccessibilityTools() {
  const vlibrasContainerRef = useRef<HTMLDivElement>(null);
  const vlibrasInitialized = useRef(false);

  useEffect(() => {
    // ---------------- Sienna Accessibility ----------------
    const siennaScript = document.createElement('script');
    siennaScript.src =
      'https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js';
    siennaScript.defer = true;
    document.body.appendChild(siennaScript);

    // ---------------- VLibras ----------------
    if (!vlibrasInitialized.current && vlibrasContainerRef.current) {
      vlibrasInitialized.current = true;

      const vlibrasDiv = document.createElement('div');
      vlibrasDiv.setAttribute('vw', '');
      vlibrasDiv.className = 'enabled';

      vlibrasDiv.innerHTML = `
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      `;

      document.body.appendChild(vlibrasDiv);

      const vLibrasScript = document.createElement('script');
      vLibrasScript.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';

      vLibrasScript.onload = () => {
        setTimeout(() => {
          if (window.VLibras) {
            new window.VLibras.Widget('https://vlibras.gov.br/app');
            console.log('✅ VLibras inicializado com sucesso!');
          } else {
            console.error('❌ VLibras não foi carregado corretamente');
          }
        }, 1000);
      };

      vLibrasScript.onerror = () => {
        console.error('❌ Erro ao carregar o script do VLibras');
      };

      document.body.appendChild(vLibrasScript);
    }

    // ---------------- TTS (Text To Speech) ----------------

    const ttsButton = document.createElement('button');
    ttsButton.innerText = '🔊';

    ttsButton.style.position = 'fixed';
    ttsButton.style.bottom = '90px'; // fica um pouco acima do VLibras
    ttsButton.style.left = '20px'; 
    ttsButton.style.padding = '12px 16px';
    ttsButton.style.borderRadius = '10px';
    ttsButton.style.border = 'none';
    ttsButton.style.background = '#2563eb';
    ttsButton.style.color = '#fff';
    ttsButton.style.fontSize = '14px';
    ttsButton.style.cursor = 'pointer';
    ttsButton.style.zIndex = '9999';
    ttsButton.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';

    document.body.appendChild(ttsButton);

    let isSpeaking = false;

    function speakText(text: string) {
      if (!('speechSynthesis' in window)) {
        alert('Seu navegador não suporta leitura em voz alta.');
        return;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 1;
      utterance.pitch = 1;

      window.speechSynthesis.speak(utterance);

      isSpeaking = true;
      ttsButton.innerText = '⏹ Parar leitura';

      utterance.onend = () => {
        isSpeaking = false;
        ttsButton.innerText = '🔊 Ler texto';
      };
    }

    function stopSpeech() {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      ttsButton.innerText = '🔊 Ler texto';
    }

    function getSelectedText() {
      const selection = window.getSelection();
      return selection ? selection.toString().trim() : '';
    }

    // Ao clicar no botão
    ttsButton.onclick = () => {
      if (isSpeaking) {
        stopSpeech();
        return;
      }

      const selectedText = getSelectedText();

      if (!selectedText) {
        alert('Selecione um texto para leitura.');
        return;
      }

      speakText(selectedText);
    };

    // Leitura automática ao selecionar texto (opcional)
    document.addEventListener('mouseup', () => {
      const selectedText = getSelectedText();
      if (selectedText.length > 3) {
        speakText(selectedText);
      }
    });

    // Cleanup
    return () => {
      if (siennaScript.parentNode) {
        siennaScript.parentNode.removeChild(siennaScript);
      }

      if (ttsButton.parentNode) {
        ttsButton.parentNode.removeChild(ttsButton);
      }
    };
  }, []);

  return <div ref={vlibrasContainerRef} style={{ display: 'none' }} />;
}

// Tipagem VLibras
declare global {
  interface Window {
    VLibras: {
      Widget: new (url: string) => void;
    };
  }
}

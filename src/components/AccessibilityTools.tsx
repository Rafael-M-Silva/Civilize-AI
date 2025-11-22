import { useEffect, useRef } from 'react';

export function AccessibilityTools() {
  const vlibrasContainerRef = useRef<HTMLDivElement>(null);
  const vlibrasInitialized = useRef(false);

  useEffect(() => {
    // Carregar Sienna Accessibility
    const siennaScript = document.createElement('script');
    siennaScript.src = 'https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js';
    siennaScript.defer = true;
    document.body.appendChild(siennaScript);

    // Inicializar VLibras apenas uma vez
    if (!vlibrasInitialized.current && vlibrasContainerRef.current) {
      vlibrasInitialized.current = true;

      // Criar a estrutura HTML do VLibras diretamente no DOM
      const vlibrasDiv = document.createElement('div');
      vlibrasDiv.setAttribute('vw', '');
      vlibrasDiv.className = 'enabled';
      
      // Adicionar estrutura interna
      vlibrasDiv.innerHTML = `
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      `;
      
      // Adicionar ao body
      document.body.appendChild(vlibrasDiv);

      // Carregar o script do VLibras
      const vLibrasScript = document.createElement('script');
      vLibrasScript.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
      vLibrasScript.onload = () => {
        // Inicializar o VLibras quando o script carregar
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

    // Cleanup do Sienna apenas (VLibras fica carregado)
    return () => {
      if (siennaScript.parentNode) {
        siennaScript.parentNode.removeChild(siennaScript);
      }
    };
  }, []);

  // Retornar apenas um elemento de referência invisível
  return <div ref={vlibrasContainerRef} style={{ display: 'none' }} />;
}

// Adicionar tipagem para o Window com VLibras
declare global {
  interface Window {
    VLibras: {
      Widget: new (url: string) => void;
    };
  }
}

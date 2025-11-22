import { useCallback, useRef } from 'react';

// Estado global para compartilhar o índice do som entre todos os componentes
let globalSoundIndex = 0;

export function usePopSound() {
  const playPopSound = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Criar um oscilador para o som de "pop"
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // 4 variantes de som diferentes
      const soundVariants = [
        // Variante 1: Som original (grave e suave)
        { startFreq: 400, endFreq: 150, volume: 0.03 },
        // Variante 2: Som médio-grave (um pouco mais alto)
        { startFreq: 500, endFreq: 180, volume: 0.025 },
        // Variante 3: Som médio (equilibrado)
        { startFreq: 350, endFreq: 130, volume: 0.035 },
        // Variante 4: Som grave profundo (mais baixo)
        { startFreq: 300, endFreq: 120, volume: 0.03 },
      ];
      
      // Pegar a variante atual e avançar para a próxima
      const currentVariant = soundVariants[globalSoundIndex];
      globalSoundIndex = (globalSoundIndex + 1) % soundVariants.length;
      
      // Configurar frequência com a variante atual
      oscillator.frequency.setValueAtTime(currentVariant.startFreq, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(currentVariant.endFreq, audioContext.currentTime + 0.1);
      
      // Configurar volume da variante atual
      gainNode.gain.setValueAtTime(currentVariant.volume, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      // Tipo de onda para um som mais suave
      oscillator.type = 'sine';
      
      // Tocar o som
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
      
      // Limpar após tocar
      setTimeout(() => {
        audioContext.close();
      }, 150);
    } catch (error) {
      // Silenciosamente falhar se o áudio não estiver disponível
      console.warn('Audio not available:', error);
    }
  }, []);

  return { playPopSound };
}
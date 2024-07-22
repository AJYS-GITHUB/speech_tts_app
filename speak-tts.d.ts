declare module 'speak-tts' {
    interface SpeechOptions {
      volume?: number;
      lang?: string;
      rate?: number;
      pitch?: number;
      voice?: string;
      splitSentences?: boolean;
      listeners?: {
        onvoiceschanged?: (voices: any[]) => void;
      };
    }
  
    interface SpeakOptions {
      text: string;
      queue?: boolean;
      listeners?: {
        onstart?: () => void;
        onend?: () => void;
        onresume?: () => void;
        onboundary?: (event: any) => void;
      };
    }
  
    interface Voice {
      name: string;
      lang: string;
    }
  
    class Speech {
      init(options: SpeechOptions): Promise<{ voices: Voice[] }>;
      speak(options: SpeakOptions): void;
      hasBrowserSupport(): boolean;
      setVoice(name: string): void;
      pause():void;
      cancel():void;
    }
  
    export default Speech;
  }
  
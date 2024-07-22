import { Component, Input } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent {
  speech: any;
  @Input() textSelected: string | undefined = '';

  constructor() {
    this.speech = new Speech();
    this.speech
      .init({
        volume: 1,
        lang: 'es-ES',
        rate: 1.2,
        pitch: 1,
        voice: 'Microsoft Pablo - Spanish (Spain)',
        splitSentences: true,
      })
      .then((data: any) => {
        // console.log('Síntesis de voz inicializada:', data);
      })
      .catch((e: any) => {
        console.error(
          'Ocurrió un error durante la inicialización de la síntesis de voz:',
          e
        );
      });
  }

  ClickButton() {
    if (this.textSelected) {
      this.speech.cancel();
      this.speech.speak({
        text: this.textSelected,
      });
    }
  }

  CancelSpeaker(){
    this.speech.cancel();
  }
}

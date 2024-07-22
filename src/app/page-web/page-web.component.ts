import { Component, ViewChild } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

import Speech from 'speak-tts';

@Component({
  selector: 'app-page-web',
  templateUrl: './page-web.component.html',
  styleUrls: ['./page-web.component.css'],
})
export class PageWebComponent {
  @ViewChild(CustomButtonComponent) customButton?: CustomButtonComponent;

  selectedText: string | undefined = '';
  showButton: boolean = false;

  buttonPosition = { x: 0, y: 0 };

  SelectText(event: MouseEvent) {
    this.selectedText = window.getSelection()?.toString();
    if (this.selectedText) {
      this.buttonPosition.x = event.clientX;
      this.buttonPosition.y = event.clientY;
      this.showButton = true;
    } else {
      this.customButton?.CancelSpeaker();
      this.showButton = false;
      // this.speech.cancel();
    }
  }
}

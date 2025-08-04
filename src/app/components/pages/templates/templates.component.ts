import { Component } from '@angular/core';
import { FpHangar } from '@faepoint/fp-uilib';

@Component({
  selector: 'app-templates',
  imports: [FpHangar],
  templateUrl: './templates.component.html'
})
export class TemplatesComponent {
  openLink(url: string) {
    window.open(url, '_blank')!.focus();
  }
}

import { Component } from '@angular/core';
import { FpHangar } from '@faepoint/fp-uilib';

@Component({
  selector: 'app-portfolio',
  imports: [FpHangar],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent {
  openLink(url: string) {
    window.open(url, '_blank')!.focus();
  }
}

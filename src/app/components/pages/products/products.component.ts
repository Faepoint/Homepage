import { Component } from '@angular/core';
import { FpHangar } from '@faepoint/fp-uilib';

@Component({
  selector: 'app-products',
  imports: [FpHangar],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  openLink(url: string) {
    window.open(url, '_blank')!.focus();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FpButton } from '@faepoint/fp-uilib';

@Component({
  selector: 'app-not-found',
  imports: [FpButton],
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}

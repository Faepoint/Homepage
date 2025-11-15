import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FpFooter } from '@faepoint/fp-uilib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FpFooter],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

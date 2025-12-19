import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FpFooter, FpPopMenu } from '@faepoint/fp-uilib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FpFooter, FpPopMenu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

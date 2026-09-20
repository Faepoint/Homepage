import { NgTemplateOutlet } from '@angular/common';
import { afterNextRender, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FpAnchorDirective, FpFooter, FpPopMenu } from '@faepoint/fp-uilib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FpFooter, FpPopMenu, NgTemplateOutlet, FpAnchorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMobile = signal(false);

  constructor() {
    afterNextRender(() => {
      this.isMobile.set(window.innerWidth <= 768);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile.set(window.innerWidth <= 768);
  }
}

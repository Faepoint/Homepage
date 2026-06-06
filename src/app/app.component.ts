import { NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FpAnchorDirective, FpFooter, FpPopMenu } from '@faepoint/fp-uilib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FpFooter, FpPopMenu, NgTemplateOutlet, FpAnchorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isMobile = signal(false);

  ngOnInit(): void {
    this.isMobile.set(window.innerWidth <= 768);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile.set(window.innerWidth <= 768);
  }
}

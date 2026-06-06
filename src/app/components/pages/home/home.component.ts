import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FpButton, FpHangar, FpHeroPanel, FpModal, FpTypewriterService } from '@faepoint/fp-uilib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FpHeroPanel, FpButton, FpModal, FpHangar],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  typedHeader: Observable<string>;

  constructor(
    private typeWriter: FpTypewriterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.typedHeader = this.typeWriter.create(
      ['Software', 'Websites', 'Technology', 'Freelancing', 'Consulting', 'Brainstorming', 'Small Business', 'Bespoke'],
      true,
      100
    );
  }

  openLink(url: string) {
    window.open(url, '_blank')!.focus();
  }

  navigatePortfolio() {
    this.router.navigate(['/portfolio']);
  }

  navigateProducts() {
    this.router.navigate(['/products']);
  }
}

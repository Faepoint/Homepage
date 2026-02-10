import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FpButton, FpHeroPanel, FpModal, FpTypewriterService } from '@faepoint/fp-uilib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FpHeroPanel, FpButton, FpModal, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  typedHeader: Observable<string>;

  constructor(
    private typeWriter: FpTypewriterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.typedHeader = this.typeWriter.create(['Software', 'Websites', 'Hosting', 'Consulting'], true);
  }

  navigatePortfolio() {
    this.router.navigate(['/portfolio']);
  }

  navigateProducts() {
    this.router.navigate(['/products']);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FpButton, FpHeroPanel, FpTypewriterService } from '@faepoint/fp-uilib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FpHeroPanel, FpButton],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  typedHeader: Observable<string>;

  constructor(private typeWriter: FpTypewriterService, private router: Router) {}

  ngOnInit(): void {
    this.typedHeader = this.typeWriter.create(['Software', 'Websites', 'Hosting', 'Consulting'], true);
  }

  navigatePortfolio() {
    this.router.navigate(['/portfolio']);
  }
}

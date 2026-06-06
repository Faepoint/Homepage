import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FpSegmentedControl } from '@faepoint/fp-uilib';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, FpSegmentedControl],
  templateUrl: './pricing.component.html',
  styleUrl: 'pricing.component.css'
})
export class PricingComponent {
  selected = signal<'A' | 'B'>('A');
}

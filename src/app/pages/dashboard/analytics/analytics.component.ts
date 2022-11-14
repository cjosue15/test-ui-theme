import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      analytics works!
    </p>
  `,
  styles: [
  ]
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

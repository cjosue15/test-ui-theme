import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      ecommerce works!
    </p>
  `,
  styles: [
  ]
})
export class EcommerceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

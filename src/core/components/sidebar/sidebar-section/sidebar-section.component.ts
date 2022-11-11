import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INavSection } from '@core/models';

@Component({
  selector: '[sidebar-section]',
  standalone: true,
  imports: [CommonModule],
  template: `<span>{{ sectionName }}</span>`,
  styles: [
    `
      span {
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.5;
        letter-spacing: 0.01rem;
        color: #676d7d;
        margin: 30px 0 10px 30px;
        display: block;
      }
    `,
  ],
})
export class SidebarSectionComponent implements OnInit {
  @Input() sectionName: string;
  constructor() {
    this.sectionName = '';
  }

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsCoreModule } from '@core/icons';

@Component({
  selector: '[sidebar-section]',
  standalone: true,
  imports: [CommonModule, IconsCoreModule],
  template: `
    <ng-container>
      <span>{{ sectionName }}</span>
      <i-feather name="more-horizontal"></i-feather>
    </ng-container>
  `,
  styles: [
    `
      :host {
        color: #676d7d;

        i-feather,
        span {
          margin: 30px 0 10px 30px;
        }

        i-feather {
          width: 18px;
          height: 18px;
          display: none;
        }

        span {
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: 0.01rem;
          display: block;
        }
      }
    `,
  ],
  host: {
    class: 'navigation__section',
  },
})
export class SidebarSectionComponent implements OnInit {
  @Input() sectionName: string;

  constructor() {
    this.sectionName = '';
  }

  ngOnInit(): void {}
}

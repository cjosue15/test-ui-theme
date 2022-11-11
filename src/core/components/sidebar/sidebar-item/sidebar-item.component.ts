import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  inject,
} from '@angular/core';
import { INavItem } from '@core/models';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { IconsCoreModule } from '@core/icons';
import { filter } from 'rxjs/operators';

@Component({
  selector: '[sidebar-item]',
  standalone: true,
  imports: [CommonModule, RouterModule, IconsCoreModule],
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  host: {
    class: 'navigation__link',
    '(click)': 'toggleExpanded($event)',
    '[class.has__children]': 'item.children?.length',
    '[class.navigation__link-expanded]': 'expanded',
  },
})
export class SidebarItemComponent implements OnInit {
  @Input() item: INavItem;

  @Output() onSelectedItem: EventEmitter<void>;

  expanded: boolean;

  private _router = inject(Router);

  constructor() {
    this.item = {
      iconName: '',
      title: '',
    };
    this.expanded = false;
    this.onSelectedItem = new EventEmitter();
  }

  ngOnInit(): void {
    this._router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((route: NavigationEnd) => {
        if (this._confirmUrlInChildren(this.item, route.url)) {
          if (this.expanded) return;
          this.expanded = true;
        } else {
          if (!this.expanded) return;
          this.expanded = false;
        }
      });
  }

  toggleExpanded(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    // this.onSelectedItem.emit();
    if (this.item.children?.length) {
      this.expanded = !this.expanded;
    }
    console.log(this.expanded);
  }

  private _confirmUrlInChildren(parent: INavItem, url: string): boolean {
    const children = parent.children;

    // Return false if parent don't have any children
    if (!children) return false;

    // Loop all the children
    for (const child of children) {
      // If children has child (Sub to sub item url)
      if (child.children) {
        // Call function again with child
        if (this._confirmUrlInChildren(child, url)) return true;
      }

      // If child.url is same as provided url
      if (child.route && (child.route === url || url.includes(child.route)))
        return true;
    }

    return false;
  }
}

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IconsCoreModule } from '@core/icons';
import { ConfigService } from '@core/services/core';
import { SidebarService } from '@core/services/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IconsCoreModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private _expanded: boolean;

  @Input() isMobile: boolean;

  constructor(
    private _configService: ConfigService,
    private _sidebarService: SidebarService
  ) {
    this._expanded = true;
    this.isMobile = false;
  }

  ngOnInit(): void {
    const sidebarOptions = this._configService.config?.layout.sidebar;
    if (sidebarOptions) this._expanded = sidebarOptions.collapsed;
  }

  toggleSidebar(): void {
    console.log(this.isMobile);
    if (!this.isMobile) {
      this._expanded = !this._expanded;
      this._configService.setconfig({
        layout: { sidebar: { collapsed: this._expanded } },
      });
    } else {
      this._sidebarService.sidebarIsOpenInMobile = true;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '@core/components/header';
import { SidebarComponent } from '@core/components/sidebar';
import { IConfig } from '@core/models';
import { ConfigService } from '@core/services/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  config!: IConfig | null;

  isMobile: boolean;

  constructor(
    private _configService: ConfigService,
    private _breakpointObserver: BreakpointObserver
  ) {
    this.config = null;
    this.isMobile = false;
  }

  ngOnInit(): void {
    this._configService.configObservable$.subscribe((config) => {
      this.config = config;
      console.log(config);
    });

    this._breakpointObserver
      .observe(['(min-width: 1200px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport width is 500px or greater!');
          this.isMobile = false;
        } else {
          console.log('Viewport width is less than 500px!');
          this.isMobile = true;
        }
      });
  }
}

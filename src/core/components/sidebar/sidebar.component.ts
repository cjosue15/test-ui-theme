import { CommonModule } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SidebarItemComponent,
  SidebarSectionComponent,
} from '@core/components/sidebar';
import { INavSection } from '@core/models';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarItemComponent,
    SidebarSectionComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menu: INavSection[];

  @ViewChildren(SidebarItemComponent)
  sidebarItems!: QueryList<SidebarItemComponent>;

  constructor() {
    this.menu = [
      {
        sectionItems: [
          {
            title: 'Dashboards',
            iconName: 'home',
            children: [
              {
                title: 'Analytics',
                iconName: 'sub page  1',
                children: [
                  {
                    title: 'test',
                    iconName: 'circle',
                    route: '/',
                  },
                ],
              },
              {
                title: 'eCommerce',
                iconName: 'sub page 2',
                route: '/dashboard/ecommerce',
              },
            ],
          },
        ],
      },
      {
        sectionName: 'APP & PAGES',
        sectionItems: [
          {
            title: 'Email',
            iconName: 'mail',
          },
          {
            title: 'Chat',
            iconName: 'message-square',
          },
          {
            title: 'Todo',
            iconName: 'check-square',
          },
          {
            title: 'Calendar',
            iconName: 'calendar',
          },
          {
            title: 'Pages',
            iconName: 'file-text',
            children: [
              {
                title: 'Authentication',
              },
            ],
          },
          {
            title: 'Email',
            iconName: 'mail',
          },
          {
            title: 'Chat',
            iconName: 'message-square',
          },
          {
            title: 'Todo',
            iconName: 'check-square',
          },
          {
            title: 'Calendar',
            iconName: 'calendar',
          },
          {
            title: 'Pages',
            iconName: 'file-text',
            children: [
              {
                title: 'Authentication',
              },
            ],
          },
        ],
      },
      // {
      //   sectionName: 'APP & PAGES',
      //   sectionItems: [
      //     {
      //       title: 'Email',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Chat',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Todo',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Calendar',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Pages',
      //       iconName: 'pages',
      //       children: [
      //         {
      //           title: 'Authentication',
      //           iconName: 'test',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Email',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Chat',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Todo',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Calendar',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Pages',
      //       iconName: 'pages',
      //       children: [
      //         {
      //           title: 'Authentication',
      //           iconName: 'test',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   sectionName: 'APP & PAGES',
      //   sectionItems: [
      //     {
      //       title: 'Email',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Chat',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Todo',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Calendar',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Pages',
      //       iconName: 'pages',
      //       children: [
      //         {
      //           title: 'Authentication',
      //           iconName: 'test',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Email',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Chat',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Todo',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Calendar',
      //       iconName: 'pages',
      //     },
      //     {
      //       title: 'Pages',
      //       iconName: 'pages',
      //       children: [
      //         {
      //           title: 'Authentication',
      //           iconName: 'test',
      //         },
      //       ],
      //     },
      //   ],
      // },
    ];
  }

  ngOnInit(): void {}

  itemSelected(index: number): void {
    console.log(index);
    this.sidebarItems.toArray().forEach((sidebarItem) => {
      if (sidebarItem.expanded) {
        sidebarItem.expanded = false;
      }
    });
  }
}

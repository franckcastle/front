import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-home', class: '' },
    { path: '/user', title: 'Tableaux des employées',  icon:'pe-7s-id', class: '' },
    { path: '/table', title: 'Tableux des strucrure',  icon:'pe-7s-culture', class: '' },
    { path: '/typography', title: 'Tableaux des groupes',  icon:'pe-7s-users', class: '' },
    { path: '/icons', title: 'Page affectation',  icon:'pe-7s-add-user', class: '' },
    
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

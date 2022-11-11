import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bord',  icon: 'dashboard', class: '' },
    { path: '/jobs', title: 'Metiers',  icon:'category', class: '' },
    { path: '/regulations', title: 'Reglementations',  icon:'loyalty', class: ''  },
    { path: '/trendings', title: 'Tendances',  icon:'library_books', class: '' },
    { path: '/infos', title: 'Comment obtenir ?',  icon:'announcement', class: '' },
    { path: '/complaints', title: 'Plaintes',  icon:'notifications', class: ''},
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: ''},
    { path: '/faq', title: 'FAQ',  icon:'question_mark', class: '' },
    { path: '/competions', title: 'Concours',  icon:'folder_open', class: '' },
    { path: '/users', title: 'Utilisateurs',  icon:'people', class: '' },

];

export const HIDE_ROUTES: RouteInfo[] = [
  { path: '/regulations/:id', title: 'Détail Règlementation',  icon: '', class: '' },
  { path: '/regulation/add', title: 'Ajouter une Règlementation',  icon: '', class: '' },
  { path: '/infos/:id', title: 'Comment obtenir ??',  icon: '', class: '' },
  { path: '/info/add', title: 'Ajouter une information',  icon: '', class: '' },
  { path: '/trendings/:id', title: 'Détail Tendance ',  icon: '', class: '' },
  { path: '/trending/add', title: 'Ajouter une tendance',  icon: '', class: '' },
  { path: '/complaints/:id', title: 'Détail de la Plainte ',  icon: '', class: '' },
  { path: '/user/add', title: 'Ajouter un utilisateur',  icon: '', class: '' },
  { path: '/competion/add', title: 'Ajouter un concours',  icon: '', class: '' },
  { path: '/competions/:id', title: 'Détail compétition',  icon: '', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
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

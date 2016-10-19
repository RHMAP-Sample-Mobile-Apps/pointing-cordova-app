import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { SelectPage } from '../pages/select/select';
import { CreatePage } from '../pages/create/create';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Create', component: CreatePage },
      { title: 'Sessions', component: ListPage },
      { title: 'Select', component: SelectPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

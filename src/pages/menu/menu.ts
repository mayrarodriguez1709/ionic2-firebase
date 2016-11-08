import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { DashboardPage } from '../dashboard/dashboard';
import { EntryCategoriesPage } from '../entry-categories/entry-categories';
import { ExitCategoriesPage } from '../exit-categories/exit-categories';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public navCtrl: NavController,
    public platform: Platform) {
      
      this.initializeApp();

      this.pages = [
        { title: 'Principal', component: DashboardPage },
        { title: 'Ingresos', component: EntryCategoriesPage },
        { title: 'Egresos', component: ExitCategoriesPage }
      ];
    }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
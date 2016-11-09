import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { EntryCategoriesPage } from '../pages/entry-categories/entry-categories';
import { ExitCategoriesPage } from '../pages/exit-categories/exit-categories';
import { EntryModalPage } from '../pages/entry-modal/entry-modal';
import { ExitModalPage } from '../pages/exit-modal/exit-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    DashboardPage,
    EntryCategoriesPage,
    ExitCategoriesPage,
    EntryModalPage,
    ExitModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    DashboardPage,
    EntryCategoriesPage,
    ExitCategoriesPage,
    EntryModalPage,
    ExitModalPage
  ],
  providers: []
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { EntryCategoriesPage } from '../pages/entry-categories/entry-categories';
import { ExitCategoriesPage } from '../pages/exit-categories/exit-categories';
import { EntryModalPage } from '../pages/entry-modal/entry-modal';
import { ExitModalPage } from '../pages/exit-modal/exit-modal';
import { DynamicFormsComponent } from '../components/dynamic-forms/dynamic-forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    DashboardPage,
    EntryCategoriesPage,
    ExitCategoriesPage,
    EntryModalPage,
    ExitModalPage,
    DynamicFormsComponent
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
    ExitModalPage,
    DynamicFormsComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';

import { ExitCategoriesService } from '../../providers/exit-categories/exit-categories.service';
import { ExitModalPage } from '../exit-modal/exit-modal';

@Component({
  selector: 'page-exit-categories',
  templateUrl: 'exit-categories.html',
  providers: [ ExitCategoriesService ]
})
export class ExitCategoriesPage {

  public exitCategories: any;

  constructor(
      public navCtrl: NavController,
      public platform: Platform,
      private httpExitCategories: ExitCategoriesService,
      public modalCtrl: ModalController) {
      
      this.platform.ready().then(() => {        
        this.getExitCategories();      
      });
  }


  ionViewDidLoad() {
    console.log('Hello ExitCategoriesPage Page');
  }

  getExitCategories(){
    this.httpExitCategories.getExitCategories()
    .then(
        res => this.showExitCategories(res)        
    )
    .catch(
        error => console.log(error)
    ); 
  }

  showExitCategories(res){
    this.exitCategories = res;
    console.log(this.exitCategories)
  }

  openModal(){
    let exitCategories = this.exitCategories;
    let modal = this.modalCtrl.create(ExitModalPage, { exitCategories });
    modal.present();
  }

}


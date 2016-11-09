import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-exit-modal',
  templateUrl: 'exit-modal.html'
})
export class ExitModalPage {

  exit: any;
  exitCategories: any;
  
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public params: NavParams) {
      
      this.exitCategories = params.get('exitCategories');

      this.exit = {
        date: "12-05-2016"
      }
    }

  ionViewDidLoad() {
    console.log('Hello ExitModalPage Page');
  }
  
  dismiss(){
    this.viewCtrl.dismiss();
  }
}

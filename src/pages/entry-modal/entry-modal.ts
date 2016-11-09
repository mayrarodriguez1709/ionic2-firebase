import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-entry-modal',
  templateUrl: 'entry-modal.html'
})
export class EntryModalPage {

  entry: any;
  entryCategories: any;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public params: NavParams) {
    
    this.entryCategories = params.get('entryCategories');
    //console.log(this.entryCategories)

    this.entry = {
      date: "12-05-2016"
    }
  }

  ionViewDidLoad() {
    console.log('Hello EntryModalPage Page');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}

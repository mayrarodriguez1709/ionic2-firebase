import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-entry-modal',
  templateUrl: 'entry-modal.html'
})
export class EntryModalPage {

  entry: any;
  entryCategories: any;

  customForm: any[] = [];

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public params: NavParams) {
    
    //this.entryCategories = params.get('entryCategories');
    console.log("this.entryCategories")
    //console.log(this.entryCategories)

    this.entry = {
      idCategory: 1,
      amount : 0,
      date : null,
      description: ""
    }

    this.customForm = [
      {
        name: 'categories',
        type: 'select',
        label: 'Categorías',
        options: [
          {
            "value":1,
            "label": "Salario",
          },
          {
            "value":2,
            "label": "Honorarios"
          },
          {
            "value":3,
            "label": "Extras"
          },
          {
            "value":4,
            "label": "Regalos"
          },
          {
            "value":5,
            "label": "Prestamos o adelantos"
          },
          {
            "value":6,
            "label": "Otros ingresos"
          }
        ]
      },
      {
        name: 'amount',
        type: 'text',
        value: '',
        label: 'Monto'
      },
      {
        name: 'date',
        type: 'date',
        value: '',
        label: 'Fecha'
      },
      {
        name: 'description',
        type: 'text',
        value: '',
        label: 'Descripción'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('Hello EntryModalPage Page');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  save(object) {
      console.log("Sending entry to backend")
  }
}

import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { HttpService } from '../../providers/http.service';

@Component({
  selector: 'page-exit-categories',
  templateUrl: 'exit-categories.html',
  providers: [HttpService]
})
export class ExitCategoriesPage {

  public exitCategories: any;

  constructor(
      public navCtrl: NavController,
      public platform: Platform,
      private http: HttpService) {
      
      this.platform.ready().then(() => {        
        this.getExitCategories();      
      });
  }


  ionViewDidLoad() {
    console.log('Hello ExitCategoriesPage Page');
  }

  getExitCategories(){
    let getExitCategoriesUrl = 'exitCategories';
    this.http.getRequest(getExitCategoriesUrl)
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

}


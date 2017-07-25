import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myArray = ['This', 'is', 'my', 'first', 'ngFor'];

  constructor(public navCtrl: NavController) {

  }


}

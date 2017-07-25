import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myImage: string;
  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  captureImage() {
    let options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.myImage = imageData;
    }, err => {
      console.log('error: ', err);
    });
  }


}

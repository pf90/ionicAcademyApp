import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech'; // ionic plugin add cordova-plugin-tts

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Values for our plugin and form
  speakingText = '';
  speakingLocale = 'en-GB';
  speakingRate = 160;

  constructor(public navCtrl: NavController, public tts: TextToSpeech) { }

  speak() {
    // Construct the values for the Speach Plugin
    let options = {
      text: this.speakingText,
      locale: this.speakingLocale,
      rate: this.speakingRate / 100
    };

    // Let the plugin speak!
    this.tts.speak(options)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
}

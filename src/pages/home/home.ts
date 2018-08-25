import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mode = 'demo';
  xs = [];
  code = '<ion-slides pager [slidesPerView]="3" *ngSwitchCase="\'demo\'">\n' +
    '  <ion-slide *ngFor="let x of xs">\n' +
    '    <img src="assets/imgs/logo.png">\n' +
    '    <p>The {{ x + 1 }} / {{ xs.length }} image</p>\n' +
    '  </ion-slide>\n' +
    '</ion-slides>';

  constructor(public navCtrl: NavController) {
    this.xs = [];
    for (let i = 0; i < 20; i++) {
      this.xs.push(i)
    }
  }

}

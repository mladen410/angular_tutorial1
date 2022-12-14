import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';

  postTexts = [
    "Beschreibung 1",
    "Beschreibung 2",
    "Beschreibung 3"
  ];

  postPics = [
    "assets/img/1.png",
    "assets/img/2.png",
    "assets/img/3.png"
  ];

  buttonClicked(){
    alert('Hallo, wie geht es dir?');
  };
}

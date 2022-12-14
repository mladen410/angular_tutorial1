import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {

  names = ["Sarah", "John", "Ali"];
  images = [ "assets/img/1.png",
  "assets/img/2.png",
  "assets/img/3.png"];
  description = ["Ist sehr nett", "Ziemlich ruhier Typ", "Ich weiß alles"];

}

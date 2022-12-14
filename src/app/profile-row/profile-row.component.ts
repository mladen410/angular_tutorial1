import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent {
@Input() name: string = 'Max Mustermann';
@Input() text: string = 'Ich suche neue Freunde';
@Input() img: string = 'assets/img/1.png';
@Input() canFollow: boolean=true;

constructor(public fs:FriendService){

}

}

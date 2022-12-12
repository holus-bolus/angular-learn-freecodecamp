import {Component, Input} from '@angular/core';
import {RoomsList} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  @Input() rooms: RoomsList[] = [];

  constructor() {
  }

  ngOnInit(): void{

  }
}

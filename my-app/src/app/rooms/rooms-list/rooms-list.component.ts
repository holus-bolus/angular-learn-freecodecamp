import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {RoomsList} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomsListComponent {
  @Input() rooms: RoomsList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomsList>();
  private title: any;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue;
    }
  }

  ngOnInit(): void {

  }

  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room);
  }
}

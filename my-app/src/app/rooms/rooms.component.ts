import {Component, OnInit} from '@angular/core';
import {Room, RoomsList} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 150;

  constructor() {
  }

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomsList [] = [
    {roomNumber:1,
      roomType: 'Deluxe room',
      amenities: 'Air conditioner',
      price: 500,
      photos: 'https://luskinconferencecenter.ucla.edu/wp-content/uploads/2018/10/suite-image.jpg',
      checkIntime: new Date('11-November-2021'),
      checkoutTime: new Date('12-November-2021')
    },
    {roomNumber:2,
      roomType: 'Deluxe room',
      amenities: 'Air conditioner',
      price: 500,
      photos: 'https://www.caesars.com/content/dam/empire/enterprise-sales-promotions/caesar-suites/lvm/rio-super-suite.jpg.transform/card-img/image.jpg',
      checkIntime: new Date('11-November-2021'),
      checkoutTime: new Date('12-November-2021')
    },
  ]

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}

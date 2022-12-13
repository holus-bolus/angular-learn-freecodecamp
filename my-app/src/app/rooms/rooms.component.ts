import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {Room, RoomsList} from "./rooms";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 150;

  constructor() {
  }

  hideRooms = false;
  selectedRoom!: RoomsList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomsList [] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe room',
        amenities: 'Air conditioner',
        price: 500,
        photos: 'https://luskinconferencecenter.ucla.edu/wp-content/uploads/2018/10/suite-image.jpg',
        checkIntime: new Date('11-November-2021'),
        checkoutTime: new Date('12-November-2021'),
        rating: 4.6
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe room',
        amenities: 'Air conditioner, free wi-fi, bathroom',
        price: 800,
        photos: 'https://www.caesars.com/content/dam/empire/enterprise-sales-promotions/caesar-suites/lvm/rio-super-suite.jpg.transform/card-img/image.jpg',
        checkIntime: new Date('11-November-2021'),
        checkoutTime: new Date('12-November-2021'),
        rating: 4.8
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air conditioner, free wi-fi, bathroom, kitchen, TV',
        price: 1200,
        photos: 'https://www.caesars.com/content/dam/empire/enterprise-sales-promotions/caesar-suites/lvm/rio-super-suite.jpg.transform/card-img/image.jpg',
        checkIntime: new Date('11-November-2021'),
        checkoutTime: new Date('12-November-2021'),
        rating: 5
      },
    ]
  }

  ngDoCheck() {
    console.log('on changes is called');
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {
    this.headerComponent.title = 'Rooms View';
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms list';
  }

  selectRoom(room: RoomsList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomsList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, free wi-fi, bathroom',
      price: 500,
      photos: 'https://luskinconferencecenter.ucla.edu/wp-content/uploads/2018/10/suite-image.jpg',
      checkIntime: new Date('11-November-2021'),
      checkoutTime: new Date('12-November-2021'),
      rating: 4.5
    }
  }
}

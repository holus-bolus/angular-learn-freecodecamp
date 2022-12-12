export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;

}


export interface RoomsList {
  roomNumber:number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
    checkIntime:Date;
    checkoutTime:Date;
    rating:number;
}

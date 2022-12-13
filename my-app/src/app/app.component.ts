import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'my-app';

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInint() {
this.name.nativeElement.innerText = 'Hilton Hotel';
  }

  ngAfterViewInit(): void {
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  //
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
  //
  // ngOnInit() {
  //
  // }
}

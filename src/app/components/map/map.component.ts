import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

	lat: number = 1;
  lng: number = 1;
  constructor() { }

  ngOnInit() {
  	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
        	this.lat = position.coords.latitude;
        	this.lng = position.coords.longitude;
        }, ()=>{
        	alert("Geolocation not supported");
        });
    } else {
        alert('Location detection not supported');
    }
  }

}

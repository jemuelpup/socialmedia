import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-display-slider',
  templateUrl: './product-display-slider.component.html',
  styleUrls: ['./product-display-slider.component.scss']
})
export class ProductDisplaySliderComponent implements OnInit {

	sliderImages: {}[];

  constructor() { }

  ngOnInit() {
  	this.sliderImages = [{},{},{}];
  }

}

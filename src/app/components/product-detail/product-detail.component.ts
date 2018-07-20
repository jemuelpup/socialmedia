import { Component, OnInit } from '@angular/core';
import { faHeart,faMapMarkerAlt,faThumbtack,faComments,faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as star } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

	productRank: {}[];	
	comments: {}[];
  constructor() { }

  ngOnInit() {
  	this.productRank = [1,1,1,0,0];
  	this.comments = [{},{}];
  }

}

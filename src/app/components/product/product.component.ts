import { Component, OnInit, Input } from '@angular/core';
import { faHeart,faMapMarkerAlt,faThumbtack,faComments,faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	@Input ('product') public product;

  productRank: {}[];

  constructor() {
    // console.log(this.product)
  }

  ngOnInit() {
    this.productRank = [];
    for(let i = 0; i< this.product.rank; i++){
      this.productRank.push({});
    }
  }

  getProductDetails(product){
  	// console.log(product.id)
  	// console.log("product clicked")
  }

}

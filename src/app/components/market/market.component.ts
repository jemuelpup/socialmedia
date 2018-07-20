import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

	products: {}[];

  constructor() { }

  ngOnInit() {
  	this.products = [];
  	for(let i = 0; i<10; i++){
  		this.products.push({
	  		id: "productIdHere",
	  		name: "Product Title"+i,
	  		image: "../../assets/images/products/product01.jpg",
	  		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	  		price: 400,
	  		oldPrice: 500,
	  		rank: 5,
	  		likes: 0,
	  		discountPercentage: 20
	  	});
  	}
  }

}

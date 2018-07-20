import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	postArray: {}[];

  constructor() { }

  ngOnInit() {
  	this.postArray = [
  	{
  		postOwnerThumbnail: "../../assets/images/profile-pic.png",
  		postOwner: "Jemuel Elimanco",
  		postOwnerComment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta adipisci autem deleniti eligendi.",
  		postTitle: "Card title",
  		postImage: "../../assets/images/img01.jpg",
  		postDesc: "Some quick example text to build on the card title and make up the bulk of the card's content."
  	},
  	{
  		postOwnerThumbnail: "../../assets/images/profile-pic.png",
  		postOwner: "Jemuel Elimanco",
  		postOwnerComment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta adipisci autem deleniti eligendi.",
  		postTitle: "Card title",
  		postImage: "../../assets/images/img01.jpg",
  		postDesc: "Some quick example text to build on the card title and make up the bulk of the card's content."
  	}
  	];// this variable must be ovservable

  }

}

import { Component, OnInit } from '@angular/core';
import { faHeart,faComments } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

	productRank: {}[];

  constructor() { }

  ngOnInit() {
  	this.productRank = [1,1,1,0,0];
  }

}

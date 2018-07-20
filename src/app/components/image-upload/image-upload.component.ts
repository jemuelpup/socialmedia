import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { BackendService } from '../../services/backend.service'



@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

	phpUploadURL: string = "http://localhost/angular2/backend/genericfolder/upload.php";

	selectedFile = null;

  constructor(
  	private http: HttpClient,
  	private backend: BackendService
  ) { }

  ngOnInit() {
  }

  onFileSelected(e){
  	this.selectedFile = <File>e.target.files[0];
  }

  uploadImage(){
  	const formData = new FormData();
  	
  	if(this.selectedFile){
  		formData.append('file',this.selectedFile,this.selectedFile.name);
  		this.http.post(this.phpUploadURL,formData,{
  			reportProgress: true,
  			observe: "events"
  		})
  		.subscribe(events=>{
  			if(events.type === HttpEventType.UploadProgress){
	  			console.log("Upload progress "+Math.round(events.loaded/events.total*100)+"%");
	  		}
	  		else if(events.type === HttpEventType.Response){
	  			console.log("gumana");
	  			console.log(event);
	  		}
  		},err=>{
  			console.log('Error',err);
  		});
  	}
  	else{
  		console.log("walang pinili");
  	}
  }

}

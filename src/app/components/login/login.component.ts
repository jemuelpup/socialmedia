import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';



import { Observable} from 'rxjs';
import { tap,map } from 'rxjs/operators';

import { auth } from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	productList;
	user: Observable<firebase.User>;
	authenticated: boolean = false;

  constructor(
  	public backend: BackendService,
  	private authService: AuthenticationService,
  	private router: Router
  ) {

  }

  ngOnInit() {
		// this.backend.testGetData("getitems").subscribe(
  //     observer=>{
  //     	console.log(observer);
  //     }
  //   );
  }
  loginTest(){

  }
  login(){
  	let uname = "";
  	let pw = "";
  	this.authService.login(uname, pw).subscribe(
  		success => this.router.navigate(['/home']),
  		error => alert(error)
  	);
  }
  onSubmit(loginCredential){
    let credential = loginCredential.value;
    this.authService.login(credential.username, credential.password).subscribe(
      success => this.router.navigate(['/home']),
      error => alert(error)
    );
  	// console.log(loginCredential.value.username);
  }
 //  login(){
	// 	this.afu.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	// 	console.log(this.user)
	// 	this.authenticated = true;
	// }
	// logout(){
	// 	this.afu.auth.signOut();
	// 	this.authenticated = false;
	// }


}

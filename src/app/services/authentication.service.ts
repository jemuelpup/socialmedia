import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	public user: Observable<firebase.User>;

  constructor(
  	public afAuth: AngularFireAuth
  ) {
  	this.user = afAuth.authState;
  }

  loginWithGoogle(){
  	this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
	login(email, password): Observable<any>{
		return Observable.fromPromise(
			this.afAuth.auth.signInWithEmailAndPassword(email, password)
		);
	}
	logout(){
		this.afAuth.auth.signOut();
	}
	isAuthenticated(): Observable<boolean>{
		return this.user.map(user=> user && user.uid !== undefined);
	}
}

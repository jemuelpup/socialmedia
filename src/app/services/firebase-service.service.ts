import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

	user: Observable<firebase.User>;
	itemRef: AngularFireObject<any>;
	items: AngularFireList<any>;

  constructor(
  	private afdb: AngularFireDatabase
  ) {
  }

  getFirebaseData(request: string){
  	return this.afdb.list(request).snapshotChanges();
  }

  pushFirebaseData(basePath: string, object: {}){
  	this.afdb.list(basePath).push(object);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

	user: Observable<firebase.User>;
  itemRef: AngularFireObject<any>;
  openChatwork: string;

  constructor(
    private afdb: AngularFireDatabase
  ) {
  }

  // get the data from the database
  getConversation(conversationName: string): Observable<{}[]>{
  	return this.afdb.list(conversationName).snapshotChanges().pipe(
      map(a=>{ // mapping of the whole data
        return a.map(data=>{ // mapping of each data
          return data.payload.val()
        })
      })
    );
  }

  observeChanges(conversationName: string): Observable<{}[]>{
    return this.afdb.list(conversationName).auditTrail().pipe(
      map(a=>{
         return a;
      })
    );
  }

  // insert data in the database
 	sendMessage(sender: string,receiver: string,message: string){
 		console.log(sender,receiver,message);
 		this.afdb.list(receiver).push({
 			senderID:sender,
      msg:message
    });
 	}


  getFirebaseData(request: string){
    return this.afdb.list(request).snapshotChanges();
  }

  pushFirebaseData(basePath: string, object: {}){
    this.afdb.list(basePath).push(object);
  }
}

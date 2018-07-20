import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
	public chatlistOpened: boolean = true;

  getChatlistState(){
  	return this.chatlistOpened;
  }
}

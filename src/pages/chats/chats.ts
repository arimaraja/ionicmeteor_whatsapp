import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Chat, MessageType } from '../../models';

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  chats : Observable<Chat[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.chats = this.findChats();
  }

  private findChats():Observable <Chat[]> {
  	return Observable.of( [
  			{
  				_id: '0',
  				title:'Eldane mohan',
  				picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
  				lastMessage: {
  					content: 'Am on the way',
  					createdAt: moment().subtract(1, 'hours').toDate(),
  					type: MessageType.TEXT
  				}
  			},
  			{
  				_id: '1',
  				title:'Belando gewru',
  				picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
  				lastMessage: {
  					content: 'Rageum oarahd',
  					createdAt: moment().subtract(4, 'days').toDate(),
  					type: MessageType.TEXT
  				}
  			},
  			{
  				_id: '2',
  				title:'Sogtheab Rogear',
  				picture: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
  				lastMessage: {
  					content: 'Coffee !!! ok',
  					createdAt: moment().subtract(2, 'weeks').toDate(),
  					type: MessageType.TEXT
  				}
  			},
  			{
  				_id: '3',
  				title:'Logeare ldane',
  				picture: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
  				lastMessage: {
  					content: 'How ru ?',
  					createdAt: moment().subtract(3, 'days').toDate(),
  					type: MessageType.TEXT
  				}
  			},
  			{
  				_id: '4',
  				title:'Meadre kare',
  				picture: 'https://randomuser.me/api/portraits/thumb/men/5.jpg',
  				lastMessage: {
  					content: 'are way',
  					createdAt: moment().subtract(2, 'weeks').toDate(),
  					type: MessageType.TEXT
  				}
  			}  			
  		  ]
  		);
  }


  removeChat (chat: Chat ): void {
	this.chats = this.chats.map( (chatsArray: Chat[]) => {
		const chatIndex = chatsArray.indexOf(chat);

		if ( chatIndex != -1 ) {
			chatsArray.splice(chatIndex, 1);
		}
		return chatsArray;
	});
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

}

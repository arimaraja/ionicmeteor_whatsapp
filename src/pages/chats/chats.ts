import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs';
//import * as moment from 'moment';
import { Chat } from 'api/models';

import { Chats, Messages } from 'api/collections';

import { MessagesPage } from '../messages/messages';
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
export class ChatsPage implements OnInit {
  chats;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	//this.chats = this.findChats();
  }

  InitChatDataStructure () {
    this.chats = Chats
        .find({})
        .mergeMap( (chats:  Chat[])=>{
            console.log("Inpt Chats ",chats);
            return ( 
                  Observable.combineLatest(
                    ...chats.map( (chat: Chat) => {
                     console.log("def chat id ", chat._id);
                     console.log("Combine", Messages.find({chatID: chat._id})); 
                   return (
                     Messages
                       .find({chatId: chat._id})
                       .startWith(null)
                       .map(messages => {
                         if (messages) chat.lastMessage = messages[0];
                         return chat;
                       })
                     )
                   }
                )
              )
            )
          }
        );    
  }

  ngOnInit() {
    this.InitChatDataStructure();
  }

  //Ok action message display
  showMessages(chat): void {
    this.navCtrl.push(MessagesPage,{chat});
  }

  removeChat(chat: Chat ): void {
    Chats.remove({_id: chat._id}).subscribe( () => {
    });

    this.InitChatDataStructure(); 
  }

/*
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
*/  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

}

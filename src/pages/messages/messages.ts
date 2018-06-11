import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import chat object
import { Chat, Message } from 'api/models';
import { Observable } from 'rxjs';
import { Messages } from 'api/collections';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage implements OnInit{
  selectedChat: Chat = {
  	_id:"g5wSPqE4NkrjqEoJG",
  	title:"Sundara",
  	picture:"https://randomuser.me/api/portraits/thumb/men/1.jpg",
  	lastMessage:{}
  };
  title : string;
  picture : string;
  messages: Observable<Message[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	var inpChat : Chat;

  	inpChat = <Chat> navParams.get('chat');

  	if (inpChat) {
  		this.selectedChat = inpChat; 
	  	this.title = this.selectedChat.title;
	  	this.picture = this.selectedChat.picture;
  	} else {
/*
  		console.log("ChatId Type "+ typeof(this.selectedChat._id));
  		this.selectedChat._id = "g5wSPqE4NkrjqEoJG";
  		this.title = "Sundara";
  		this.picture = "https://randomuser.me/api/portraits/thumb/men/1.jpg";
*/
  	}

  	console.log('selected chat is :', this.selectedChat);
  }

  ngOnInit () {
  	let isEven = false;

  	console.log('Trying to find chatid ', Messages
  		.find({chatId:this.selectedChat._id})
  		.map((message: Message[]) => {
  			return message[0];
  		}) );

  	this.messages = Messages.find(
  			{chatId: this.selectedChat._id},
  			{sort: {createdAt:1}}
  		).map( (message: Message[]) => { 
  			message.forEach( (message: Message ) => {
  				message.ownership = isEven ? 'mine':'other';

  				isEven = !isEven;
  			});

  			return message;
  		})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

}

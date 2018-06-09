import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import chat object
import { Chat } from 'api/models';
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
export class MessagesPage {
  selectedChat: Chat;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.selectedChat = <Chat> navParams.get('chat');

  	console.log('selected chat is :', this.selectedChat);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }

}

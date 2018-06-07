import { Meteor } from 'meteor/meteor';

import { Chats} from './collections/chats';
import { Messages } from './collections/messages';

import * as moment from 'moment';

import {MessageType} from './models';

Meteor.startup(() => {
  // code to run on server at startup
  if (Chats.find({}).cursor.count() === 0 ) {
  	let chatId;

  	chatId = Chats.collection.insert({
  		title:'Eldane mohan',
  		picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'	
  	});

  	Messages.collection.insert({
  		chatId: chatId,
		content: 'Am on the way',
		createdAt: moment().subtract(1, 'hours').toDate(),
		type: MessageType.TEXT 		
  	});

  	chatId = Chats.collection.insert({
  		title:'Oraveahanrg',
  		picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'	
  	});

  	Messages.collection.insert({
  		chatId: chatId,
		content: 'Bit mount w:-) ',
		createdAt: moment().subtract(2, 'hours').toDate(),
		type: MessageType.TEXT 		
  	});

  	chatId = Chats.collection.insert({ 		
  		title:'Rteaeve ofar',
  		picture: 'https://randomuser.me/api/portraits/thumb/men/3.jpg'	
  	});

  	Messages.collection.insert({
  		chatId: chatId,
		content: 'A week off and next ?',
		createdAt: moment().subtract(2, 'weeks').toDate(),
		type: MessageType.TEXT 		
  	});

  	chatId = Chats.collection.insert({ 		
  		title:'Eveare Ogerre',
  		picture: 'https://randomuser.me/api/portraits/thumb/men/4.jpg'	
  	});

  	Messages.collection.insert({
  		chatId: chatId,
		content: 'Good prood!!',
		createdAt: moment().subtract(3, 'days').toDate(),
		type: MessageType.TEXT 		
  	});

  	chatId = Chats.collection.insert({ 		
  		title:'Ostervena Oguve',
  		picture: 'https://randomuser.me/api/portraits/thumb/men/5.jpg'	
  	});

  	Messages.collection.insert({
  		chatId: chatId,
		content: 'Good Look son eu!',
		createdAt: moment().subtract(1, 'weeks').toDate(),
		type: MessageType.TEXT 		
  	});

  	chatId = Chats.collection.insert({ 		
  		title:'Maeadev evea',
  		picture: 'https://randomuser.me/api/portraits/thumb/men/6.jpg'	
  	});

  	Messages.collection.insert({
  		chatId: chatId,
		content: 'All the way up!!	!',
		createdAt: moment().subtract(5, 'weeks').toDate(),
		type: MessageType.TEXT 		
  	});

  }
});

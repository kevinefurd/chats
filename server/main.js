import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  //console.log(Meteor.settings.public.ga.account);
    Chats._ensureIndex({ "createdAt": 1});

});

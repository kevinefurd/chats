Meteor.publish('chats',function() {
    return Chats.find({},{
		limit: 10,
        sort: { createdAt: -1 }
    });
});
// TODO  disable autopublish
Meteor.publish('recipes',function() {
	return Recipes.find({author: this.userId})
});

Meteor.publish('chats',function() {
    return Chats.find({},{
		limit: 10,
        sort: { createdAt: -1 }
    });
});
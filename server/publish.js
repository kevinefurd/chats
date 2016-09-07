Meteor.publish('recipes',function() {
	return Recipes.find({author: this.userId})
});

Meteor.publish('chats',function() {
    return Chats.find({});
});
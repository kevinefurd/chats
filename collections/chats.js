Chats = new Mongo.Collection('chats');

Chats.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	/*
	update: function(userId, doc) {
		return !!userId;
	}
	*/
});

Chatschema = new SimpleSchema({
	text: {
		type: String,
		label: "Text"
	},
	/*
	ingredients: { 
		type: [Ingredient]
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	*/
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: { type: "hidden" }	}

});

/*
Meteor.methods({
	toggleMenuItem: function(id, curState) {
		Chats.update(id, {
			$set: {
				inMenu: !curState
			}
		});
	},
	deleteRecipe: function(id) {
		Chats.remove(id);
	}
})
*/

Chats.attachSchema(Chatschema);

Template.Chats.onCreated(function() {
	var self = this;
	self.autorun(function () {
		self.subscribe('chats');
	});
});

Template.Chats.helpers({
	chats: ()=> {
		return Chats.find({}, {
		limit: 10,
        sort: { createdAt: -1 }
    })
	}
});

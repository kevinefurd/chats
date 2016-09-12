
Template.Chats.onCreated(function() {
	var self = this;
	self.autorun(function () {
		self.subscribe('chats');
	});
});

Template.Chats.helpers({
	chats: function() {
		return Chats.find({}, {
		limit: 10,
        sort: { createdAt: -1 }
    });
	},
	formatDate: function(date) {
		return moment(date).format('HH.mm:ss YYYY.MM.DD');
	}
});

Template.Chats.events({
    'submit .send-chat': function(event) {
	    event.preventDefault();

	    // Get value from form element
	    const target = event.target;
	    const txt = target.text.value;
	    const handle = target.handle.value;
	    
		if (!txt || !handle)return;
	    // Insert a task into the collection
	    Chats.insert({
	      text: txt,
	      createdAt: new Date(), // current time,
	      author: this.userId,
	      handle: handle
	    });
	 
	    // Clear form
	    target.text.value = '';
	}     
});
// not needed in version i'm using, but leaving in since it was on the tut
if (Meteor.isClient) {
	/*
	Accounts.onLogin(function() {
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
	*/
}
/*
FlowRouter.triggers.enter([function(context,redirect) {

	if (!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);
*/
FlowRouter.route('/', {
	name: 'home',
	action() {
			FlowRouter.go('chats');
/*
		if(Meteor.userId()) {
			FlowRouter.go('chats');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
		*/
	}
});

FlowRouter.route('/chats', {
	name: 'chats',
	action() {
		BlazeLayout.render('ChatsLayout')
	}
});
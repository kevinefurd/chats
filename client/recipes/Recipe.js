Template.Recipe.onCreated(function() {
	this.editMode = new ReactiveVar(false);
	//this.editMode.set(false); // another way of doing the same thing
});

Template.Recipe.helpers({ 
	updateRecipeId: function() {
		return this._id;
		},
		editMode: function() {
			return Template.instance().editMode.get();
		}
});

Template.Recipe.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	// arrow funcion screw up this var, prefer function maybe
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe',this._id);
	},
	'click .fa-pencil': function(event, template) {
		//Session.set('editMode',!Session.get('editMode'));
		template.editMode.set(!template.editMode.get());
	}
});


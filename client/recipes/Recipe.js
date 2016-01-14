Template.Recipe.events({
  'click .toggle-menu': function(event, template) {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  }
});
Template.Recipe.helpers({
  updateRecipeId: function() {
    return this._id;
  }
});

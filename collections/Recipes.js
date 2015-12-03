Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function(userId, doc){
    return !!userId;
  }
});

Ingredient = new SimpleSchema({
  name: {
    type: String
  },
  amount: {
    type: String
  }
})

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },

  description: {
    type: String,
    label: "Description"
  },
  ingredients : {
    type: [Ingredient]
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created at",
    autoValue: function(){
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Recipes.attachSchema( RecipeSchema );

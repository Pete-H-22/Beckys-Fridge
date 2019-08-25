function Ingredient(name) {
    this.name = name;
}

function Recipe(name, ingredients, categories) {
    this.name = name;
    this.ingredients = ingredients;
    this.addIngedient = function(ing){
        this.ingredients.push(ing);
    }
    this.categories = categories;
    this.addCategory = function(cat){
        this.categories.push(cat);
    }
}
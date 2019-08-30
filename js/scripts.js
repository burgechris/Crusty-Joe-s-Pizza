
//Business Logic

//Order/Shopping Cart Object
function Cart(name){
  this.name = name,
  this.items = [],
  this.total = 0
}

//User adds the pizza to the Cart

//Pizza Object
//User chooses what size pizza they would like
function Pizza(size, toppings){
  this.size = size,
  this.toppings = [],
  this.subtotal = 0
}

//User chooses what toppings they would like
Pizza.prototype.toppings = function(){
  this.toppings = addTopping.push(this.toppings)
}






//User-Interface Logic
var newCart = new Cart();

//User enters name

$(document).ready(function() {
  $("button#addToCart").click(function(event){
    event.preventDefault();

  });
});

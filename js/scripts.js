
//Business Logic

//Order/Shopping Cart Object
function Cart(name){
  this.name = name,
  this.items = [],
  this.total = 0
}

//User adds the pizza to the Cart

//Pizza Object
function Pizza(toppings){
  this.toppings = toppings,
  this.subtotal = 0
}
//User chooses what size pizza they would like
//User chooses what toppings they would like





//User-Interface Logic

//User enters name

$(document).ready(function() {
  $("button#addToCart").click(function(event){
    event.preventDefault();

  });
});


//Business Logic

//Order/Shopping Cart Object
// function Cart(name){
//   this.name = name,
//   this.pizzas = [],
//   this.total = 0
// }
//
// //User adds the pizza to the Cart
// Cart.prototype.total = function(){
//   var total = 0;
//
// }

//Pizza Object
//User chooses what size pizza they would like
function Pizza(name, size, toppings){
  this.name = name,
  this.size = size,
  this.sauce = sauce,
  this.toppings = [],
  this.subtotal = 12
}

//User chooses what toppings they would like
Pizza.prototype.toppings = function(){
  this.toppings = addTopping.push(this.toppings);
}

Pizza.prototype.calcToppers = function(){
  this.subtotal = this.toppings.length + 5;
}



//User-Interface Logic

//Creates a new Cart
// var newCart = new Cart();

$(document).ready(function() {
  $("button#addToCart").click(function(event){
    event.preventDefault();
    //User enters name
    var customerName = $("input#custName").val();
    var size = $("input:radio[name=size]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    var toppers = $("input:checkbox[name=topping]:checked").val();
    console.log(customerName, size, sauce, toppers);
    var newPizza = new Pizza(customerName, size, sauce, toppers);

  });
});

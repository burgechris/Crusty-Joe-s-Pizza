
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
function Pizza(name, size, sauce, toppings){
  this.name = name,
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings,
  this.price = 12
}

//User chooses what toppings they would like
// Pizza.prototype.toppings = function(addTops){
//   this.toppings = addTops.push(this.toppings);
// }

Pizza.prototype.calcToppers = function(){
  this.price += (this.toppings.length) * 5;
}
//User-Interface Logic

//Creates a new Cart
// var newCart = new Cart();

function showOrder(pizza) {
  $(".yourName").text(pizza.name);
  $(".yourSize").text(pizza.size);
  $(".yourToppings").text(pizza.toppings)
  $(".yourPrice").text(pizza.price);
}

$(document).ready(function() {
  $("button#addToCart").click(function(event){
    event.preventDefault();
    //User enters name
    var customerName = $("input#custName").val();
    var chosenSize = $("input:radio[name=size]:checked").val();
    var chosenSauce = $("input:radio[name=sauce]:checked").val();
    var chosenTopping = $("input:checkbox[name=topping]:checked").map(function(){
      return this.value;
    }).get();
    var newPizza = new Pizza(customerName, chosenSize, chosenSauce, chosenTopping);
    newPizza.calcToppers();
    showOrder(newPizza);
    console.log(newPizza);

  });
});

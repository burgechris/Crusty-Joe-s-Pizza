
//Business Logic

//Order/Shopping Cart Object
function Cart(){
  this.pizzas = [],
  this.cartTotal = 0,
  this.currentId = 0
}

Cart.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

//User adds the pizza to the Cart
Cart.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Cart.prototype.calcTotal = function(){
  var total = 0;
  this.pizzas.forEach(function(pizza){
    total += pizza.price;
  })
  this.cartTotal = total;
  return total;
}

//Pizza Object
//User chooses what size pizza they would like
function Pizza(name, size, sauce, toppings){
  this.name = name;
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings,
  this.price = 12
}

Pizza.prototype.calcToppers = function(){
  this.price += (this.toppings.length) * 5;
}
//User-Interface Logic

//Creates a new Cart
var newCart = new Cart();

function showOrder(pizza) {
  $(".yourName").text(pizza.name);
  $(".yourSize").text(pizza.size);
  $(".yourToppings").text(pizza.toppings.join(", "));
  $(".yourPrice").text("$" + pizza.price);
};

$(document).ready(function() {
  $("button#checkout").click(function(event){
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
    newCart.addPizza(newPizza);
    newCart.calcTotal();
    console.log(newCart);

  });
});

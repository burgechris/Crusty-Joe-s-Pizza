
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
  this.sauce = sauce,
  this.toppings = [],
  this.subtotal = 12
}

//User chooses what toppings they would like
Pizza.prototype.toppings = function(){
  this.toppings = addTopping.push(this.toppings);
}

Pizza.prototype.calc = function(){
  this.subtotal = this.toppings.length + 5;
}






//User-Interface Logic

//Creates a new Cart
var newCart = new Cart();

$(document).ready(function() {
  $("button#addToCart").click(function(event){
    event.preventDefault();
    //User enters name
    var customerName = $("#custName").val();
    var size = $("input:radio[name=size]:checked").val();
    var saucy = $("input:radio[name=sauce]:checked").val();
    var toppers = $("input:checkbox[name=topping]:checked").val();

    var newPizza = new Pizza(size, saucy, toppers);
    
  });
});

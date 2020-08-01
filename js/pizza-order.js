var small = {name: "Small",price :500};
var medium = {name: "Medium", price: 800};
var large = { name: "Large", price:1000};

var pizzaSize= { name: "Size", type: [small,medium,large]};

var none = {name: "None",price :0};
var crispy = {name: "Crispy", price: 300};
var stuffed = { name: "Stuffed", price:500};
var gluttenFree = { name:"GluttenFree", price:700};

var crust= { name: "Toppings", type: [none,crispy,stuffed,gluttenFree]};

var none = {name: "None",price :0};
var pepperoni = {name: "Pepperoni", price: 500};
var onions= { name: "Onions", price:300};
var mushrooms= { name:"Mushrooms", price:700};
var sausage= { name:"Sausage", price:700};
var bacon= { name:"bacon", price:700};


var toppings= { name: "Toppings", type: [none,pepperoni,onions,bacon,sausage,mushrooms]};

var price = [pizzaSize,crust,toppings];

function Name(first,last){
  this.firstName = first;
  this.lastName= last;
  this.pizzas=[];
}
function Order(size,crust,toppings,number){
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.number=number;
}
Name.prototype.fullName=function() {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function() {
  $("#add-new-pizza").click(function() {
    $("#new-pizzas").append(  '<div class="new-pizza">' +
        '<div class="form-group">'+
        '<label for="choose-pizza-size">Choose pizza size</label>'+
        '<select class="size">'+
          '<option value="small">Small</option>'+
          '<option value="medium">Medium</option>'+
          '<option value="large">Large</option>'+
        '</select>'+
    '</div>'+
    '<div class="form-group">'+
      '<label for="choose-crust">Choose crust</label>'+
      '<select class="crust">'+
        '<option value="crust">None</option>'+
        '<option value="crispy">Crispy</option>'+
        '<option value="stuffed">Stuffed</option>'+
        '<option value="glutten-free">Glutten-Free</option>'+
      '</select>'+
    '</div>'+
    '<div class="form-group">'+
      '<label for="choose-toppings">Choose toppings</label>'+
      '<select class="toppings">'+
        '<option value="none">None</option>'+
        '<option value="pepperoni">Pepperoni</option>'+
        '<option value="mushrooms">Mushrooms</option>'+
        '<option value="onions">Onions</option>'+
        '<option value="sausage">Sausage</option>'+
        '<option value="bacon">Bacon</option>'+
      '</select>'+
    '</div>'+
    '<div class="form-group">'+
      '<label for="amount">Number of Pizzas</label>'+
      '<input type="number" class="form-control number">'+
    '</div>'
  );
});

  $("form#pizza-order").submit(function(event) {
   event.preventDefault();

   var inputtedFirstName = $("input#firstName").val();
   var inputtedLastName = $("input#lastName").val();
   var newName = new Name(inputtedFirstName, inputtedLastName);

   $(".new-pizza").each(function() {
     var inputtedSize = $(this).find("select.size").val();
     var inputtedCrust = $(this).find("select.crust").val();
     var inputtedToppings = $(this).find("select.toppings").val();
     var inputtedNumberOfPizzas=parseInt($(this).find("input.number").val());
     var newPizza = new Order(inputtedSize, inputtedCrust, inputtedToppings,inputtedNumberOfPizzas);
     newName.pizzas.push(newPizza)
   });

   $("ul#summary").append("<li><span class='summary-order'>" + newName.fullName() + "</span></li>");

   $(".summary-order").last().click(function() {
     $("#show-order").show();
     $("#show-order h2").text(newName.fullName());
     $(".first-name").text(newName.firstName);
     $(".last-name").text(newName.lastName);
     $("ul#orders").text("");
     newName.pizzas.forEach(function(order) {
       $("ul#orders").append("<li>" + order.size + ", " + order.crust+ " " + order.toppings + " " +order.number + "</li>");
     });

   });

   $("input#firstName").val("");
   $("input#lastName").val("");
   $("select.size").val("");
   $("select.crust").val("");
   $("select.toppings").val("");
   parseInt($(this).find("input.number").val());

 });
});

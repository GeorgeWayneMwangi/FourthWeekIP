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
    $("#new-pizzas").append('<div class="new-pizza">' +
                                 '<div class="form-group">' +
                                   '<label for="choose-pizza-size">Choose pizza size</label>' +
                                   '<input type="text" class="form-control pizza-size">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="choose-crust">Choose crust</label>' +
                                   '<input type="text" class="form-control crust">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="choose-toppings">Choose toppings</label>' +
                                   '<input type="text" class="form-control toppings">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="amount">Number of Pizzas</label>' +
                                   '<input type="number" class="form-control number">' +
                                 '</div>' +
                               '</div>');
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

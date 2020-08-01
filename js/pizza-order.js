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
     var inputtedSize = $(this).find("input.pizza-size").val();
     var inputtedCrust = $(this).find("input.crust").val();
     var inputtedToppings = $(this).find("input.toppings").val();
     var inputtedNumberOfPizzas=parseInt($(this).find("input.number").val());
     var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedToppings,inputtedNumberOfPizzas);
     newName..push(newPizza)
   });

   $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

   $(".contact").last().click(function() {
     $("#show-contact").show();
     $("#show-contact h2").text(newContact.fullName());
     $(".first-name").text(newContact.firstName);
     $(".last-name").text(newContact.lastName);
     $("ul#addresses").text("");
     newContact.addresses.forEach(function(address) {
       $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.county + "</li>");
     });
   });

   $("input#new-first-name").val("");
   $("input#new-last-name").val("");
   $("input.new-street").val("");
   $("input.new-city").val("");
   $("input.new-county").val("");

 });
});

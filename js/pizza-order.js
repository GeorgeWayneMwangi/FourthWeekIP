
function getValue() {
  var getSize=document.getElementById("size");
  var size=getSize.options[getSize.selectedIndex].value;
  var getCrust=document.getElementById("crust");
  var crust=getCrust.options[getCrust.selectedIndex].value;
  var getToppings=document.getElementById("toppings");
  var toppings=getToppings.options[getToppings.selectedIndex].value;
  var inputtedNumberOfPizzas=parseInt(document.getElementById("number").value);
  var deliveryFee=150;
  var sizeNum=parseInt(size);
  var crustNum=parseInt(crust);
  var toppingNum=parseInt(toppings);
  if(document.getElementById('delivery-yes').checked==true) {
    var totalPriceofOrder=((deliveryFee+sizeNum+crustNum+toppingNum)*inputtedNumberOfPizzas);
    document.getElementById("order-amount").innerHTML="Your total charge:" + totalPriceofOrder;
    alert("The delivery fee will be Kshs" + deliveryFee);
    prompt("Where do you want your pizza delivered?")
  }else if (document.getElementById('delivery-no').checked==true ){
    var totalPriceofOrder=((sizeNum+crustNum+toppingNum)*inputtedNumberOfPizzas)
    document.getElementById("order-amount").innerHTML="Your total charge:" + totalPriceofOrder;
  }}
var small = {name: "Small",price :500};
var medium = {name: "Medium", price: 800};
var large = { name: "Large", price:1000};

var pizzaSize= { name: "Size", types: [small,medium,large]};

var none = {name: "None",price :0};
var crispy = {name: "Crispy", price: 300};
var stuffed = { name: "Stuffed", price:500};
var gluttenFree = { name:"GluttenFree", price:700};

var crust= { name: "Crust", types: [none,crispy,stuffed,gluttenFree]};

var none = {name: "None",price :0};
var pepperoni = {name: "Pepperoni", price: 500};
var onions= { name: "Onions", price:300};
var mushrooms= { name:"Mushrooms", price:700};
var sausage= { name:"Sausage", price:700};
var bacon= { name:"bacon", price:700};


var toppings= { name: "Toppings", types: [none,pepperoni,onions,bacon,sausage,mushrooms]};

var pizzas = [pizzaSize,crust,toppings];

pizzas.forEach(function(pizza) {
  console.log(pizza.name + " prices:");
  pizza.types.forEach(function(type) {
    console.log(type.price);
  });
  console.log("\n");
});

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
        '<select class="size" >'+
          '<option id="small" value="small">Small</option>'+
          '<option id="medium" value="medium">Medium</option>'+
          '<option id="large" value="large">Large</option>'+
        '</select>'+
    '</div>'+
    '<div class="form-group">'+
      '<label for="choose-crust">Choose crust</label>'+
      '<select class="crust">'+
        '<option id="none" value="none">None</option>'+
        '<option id="crispy" value="crispy">Crispy</option>'+
        '<option id="stuffed" value="stuffed">Stuffed</option>'+
        '<option id="glutten" value="glutten-free">Glutten-Free</option>'+
      '</select>'+
    '</div>'+
    '<div class="form-group">'+
      '<label for="choose-toppings">Choose toppings</label>'+
      '<select class="toppings" >'+
        '<option id="none" value="none">None</option>'+
        '<option id="pepperoni" value="pepperoni">Pepperoni</option>'+
        '<option id="mushrooms" value="mushrooms">Mushrooms</option>'+
        '<option id="onions" value="onions">Onions</option>'+
        '<option id="sausage" value="sausage">Sausage</option>'+
        '<option id="bacon" value="bacon">Bacon</option>'+
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
   function getValue() {
     var getSize=document.getElementById("size");
     var size=getSize.options[getSizes.selectedIndex].value;
     var getCrust=document.getElementById("crust");
     var crust=getCrust.options[getCrust.selectedIndex].value;
     var getToppings=document.getElementById("toppings");
     var toppings=getToppings.options[getToppings.selectedIndex].value;
     var sizeNum=parseInt(size);
     var crustNum=parseInt(crust);
     var toppingNum=parseInt(toppings);
     if(document.getElementById('delivery-yes').checked==true) {
       var totalPriceofOrder=((deliveryFee+sizeNum+crustNum+toppingNum)*inputtedNumberOfPizzas);
       document.getElementById("order-amount").innerHTML="Your total charge:" + totalPriceofOrder;
     }else if (document.getElementById('delivery-no').checked==true ){
       var totalPriceofOrder=((sizeNum+crustNum+toppingNum)*inputtedNumberOfPizzas)
       document.getElementById("order-amount").innerHTML="Your total charge:" + totalPriceofOrder;
     }}







   $("ul#summary").append("<li><span class='summary-order'>" + newName.fullName() + "</span></li>");

   $(".summary-order").last().click(function() {
     $("#show-order").show();
     $("#show-order h2").text(newName.fullName());
     $(".first-name").text(newName.firstName);
     $(".last-name").text(newName.lastName);
     $("ul#orders").text("");
     newName.pizzas.forEach(function(order) {
       $("ul#orders").append("<li>" +"SIZE:"+ order.size + " ," +"CRUST:" +order.crust+ ", " +"TOPPINGS:"+ order.toppings + ", "+"NO. OF PIZZAS:" +order.number + "</li>");
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

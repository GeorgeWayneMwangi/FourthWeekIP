var deliveryFee=150;
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
  console.log(pizza.name + " sells:");
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
        '<select class="size" onchange="sizePrice()">'+
          '<option id="small" value="small">Small</option>'+
          '<option id="medium" value="medium">Medium</option>'+
          '<option id="large" value="large">Large</option>'+
        '</select>'+
    '</div>'+
    '<div class="form-group">'+
      '<label for="choose-crust">Choose crust</label>'+
      '<select class="crust" onchange="crustPrice()">'+
        '<option id="none" value="crust">None</option>'+
        '<option id="crispy" value="crispy">Crispy</option>'+
        '<option id="stuffed" value="stuffed">Stuffed</option>'+
        '<option id="glutten" value="glutten-free">Glutten-Free</option>'+
      '</select>'+
    '</div>'+
    '<div class="form-group">'+
      '<label for="choose-toppings">Choose toppings</label>'+
      '<select class="toppings" onchange="toppingsPrice()">'+
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
  function sizeAmount() {
    if(document.getElementsByClassName('size').selected==small) {
      var smallPrice=small.price;
    } else if (document.getElementsByClassName('size').selected==medium) {
      var mediumPrice=medium.price;
    }else {
        var largePrice=large.price
      }


    }
    function crustAmount() {
      if(document.getElementsByClassName('crust').selected==glutten-free) {
        var gluttenPrice=gluttenFree.price;
      } else if (document.getElementsByClassName('crust').selected==crispy) {
        var crispyPrice=crispy.price;
      }else if (document.getElementsByClassName('crust').selected==stuffed) {
        var stuffedPrice=stuffed.price;
      }else {
        var nonePrice=none.price;
      }
    }
    function toppingsAmount() {
      if(document.getElementsByClassName('toppings').selected==bacon) {
        var baconPrice=bacon.price;
      } else if (document.getElementsByClassName('toppings').selected==pepperoni) {
        var pepperoniPrice=pepperoni.price;
      }else if (document.getElementsByClassName('toppings').selected==onions) {
        var onionsPrice=onions.price;
      }else if (document.getElementsByClassName('toppings').selected==mushrooms) {
        var mushroomsPrice=mushrooms.price;
      }else if (document.getElementsByClassName('toppings').selected==sausage) {
        var sausagePrice=sausage.price;
      }
      else {
        var nonePrice=none.price;
      }
    }
    function totalAmount() {
      if(document.getElementById('delivery-yes').checked==true) {
        var totalPriceofOrder=(deliveryFee+crustAmount()+toppingsAmount()+sizeAmount())*inputtedNumberOfPizzas;
      }else if (document.getElementById('delivery-no').checked==true ){
        var totalPriceofOrder=(crustAmount()+toppingsAmount()+sizeAmount())*inputtedNumberOfPizzas;

      }
    }







   $("ul#summary").append("<li><span class='summary-order'>" + newName.fullName() + "</span></li>");

   $(".summary-order").last().click(function() {
     $("#show-order").show();
     $("#show-order h2").text(newName.fullName());
     $(".first-name").text(newName.firstName);
     $(".last-name").text(newName.lastName);
     $(".order-amount").text(totalAmount());
     $("ul#orders").text("");
     newName.pizzas.forEach(function(order) {
       $("ul#orders").append("<li>" + order.size + ", " + order.crust+ ", " + order.toppings + ", " +order.number + "</li>");
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

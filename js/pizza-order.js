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
});

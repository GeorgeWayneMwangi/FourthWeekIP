const selectElement=function(element) {
  return document.querySelector(element);
};

let menuToggler= selectElement('.menu-toggle');
let body= selectElement('body');

menuToggler.addEventListener('click', function() {
  body.classList.toggle('open');
});

window.sr = ScrollReveal();
sr.reveal ('.animate-left', {
  origin:'left',
  duration:1000,
  distance:'25rem',
  delay: 300

});
sr.reveal ('.animate-right', {
  origin:'right',
  duration:1000,
  distance:'25rem',
  delay: 300

});
sr.reveal ('.animate-top', {
  origin:'top',
  duration:1000,
  distance:'25rem',
  delay: 600

});
sr.reveal ('.animate-bottom', {
  origin:'bottom',
  duration:1000,
  distance:'25rem',
  delay: 600

});
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

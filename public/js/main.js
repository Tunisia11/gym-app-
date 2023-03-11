(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);


// Get input elements from the form
const weightInput = document.querySelector('input[placeholder="Weight (KG)"]');
const heightInput = document.querySelector('input[placeholder="Height (CM)"]');
const ageInput = document.querySelector('input[placeholder="Age"]');
const genderInput = document.querySelector('select');

// Get the button element and add a click event listener
const calculateButton = document.querySelector('input[value="Calculate Now"]');
calculateButton.addEventListener('click', calculateBMI);

function calculateBMI() {
  // Get the values from the input fields
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // convert cm to m
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;

  // Calculate the BMI
  const bmi = weight / (height * height);

  // Display the BMI result
 
  document.getElementById('dis').innerHTML = `Your BMI is ${bmi.toFixed(2)} `
}


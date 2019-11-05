//It detects the readiness of your code, the page will not load until its ready for JS.

$(document).ready(function(){
  //This is the main function which hold all the operations.
	function calculator(){

    var sum = "";
    var input = $('#result');

    $("#result").html('Enter a number');
    
    //This function is triggered when you click on the buttons which contain the class (numbers).

    $(".numbers").click(function() {

      //assigning the value of the button to the variable number.

    	var number = $(this).attr('value');
      //Here the operation enabled only after you enter a number.
      $(".operators").attr('disabled', false);
      //adding the number's string to the sum string. 
    	sum += number;
      //Outputting which ever the value of sum is to the result box.
    	$('#result').html(sum);
    });

    //This function is triggered when you click on the buttons which contain the class (operators).
    $(".operators").click(function(event) {
      //This line prevents the function from working if and operator button is pressed before the numbers.
      event.preventDefault();
      //Assigning the value of the operator to the variable operator.
      var operator = $(this).attr('value');

      sum += operator;

      $("#result").html(sum);
      //This line makes the operation buttons unaccesaible when you press them once.
      $('.operators').attr('disabled', true);
    });
    //This function is triggered when you click on the equal button.
    $("#equal").click(function() {
      $(".operators").attr('disabled', false);
      //Using the eval() function to evaluate the string, convert it to numbers and evaluate it. 
      var total =  paraseInt(sum);
      //This line of code if the result has a decimal answer then it shows the first four numbers after the decimal sign.
      if(total % 1 !== 0) {
        total = total.toFixed(4);
      }

      $("#result").html(total)
      sum = total;
    });
    //This function acts when you press the button C and resets every thing.
    $("#clear").click(function() {
      sum = "";
      $(".operators").attr('disabled', false);
      $("#result").html('Enter a number');
    });

    };
    calculator();
});

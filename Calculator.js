$(document).ready(function(){
	function calculator(){

    var sum = "";
    var input = $('#result');
    var counter = 0;

    $("#result").html('Enter a number');

    $(".numbers").click(function() {
    	var number = $(this).attr('value');
      $(".operators").attr('disabled', false);
    	sum += number;
    	$('#result').html(sum);
    });

       
    $(".operators").click(function(event) {
      event.preventDefault();
      var operator = $(this).attr('value');

      sum += operator;

      $("#result").html(sum);
      $('.operators').attr('disabled', true);
    });

    $("#equal").click(function() {
      $(".operators").attr('disabled', false);
      var total =  eval(sum);

      if(total % 1 !== 0) {
        total = total.toFixed(4);
      }

      $("#result").html(total)
    });

    $("#clear").click(function() {
      sum = "";
      $(".operators").attr('disabled', false);
      $("#result").html('Enter a number');
    });

    };
    calculator();
});

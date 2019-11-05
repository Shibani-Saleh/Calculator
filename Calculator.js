$(document).ready(function(){
	function calculator(){
    var sum = "";
    //var divider;
    //var operators = ["+", "-", "*", "/", "%", "."];
    var input = $('#result')
     $("#result").html('Enter a number');

    $(".num").click(function() {
    	var number = $(this).attr('value');
    	sum += number;
       
    	$('#result').html(sum)
       // divider = input.innerHTML.split("");
        
    });

       
    $(".operators").click(function(event) {
      event.preventDefault();
      var operator = $(this).attr('value');
      sum += operator;
      
      $("#result").html(sum);
       // divider = input.innerHTML;
     //if(/(?=(\D{2}))/g.test(sum)) {
        //sum = len.substring(0, divider.length - 1);
        $("#result").html(sum);
        //}

    });

        $("#equal").click(function() {
      var total =  eval(sum);
      $("#result").html(total % 1 != 0 ? total.toFixed(2) : total);

    });

    $("#clear").click(function() {
       sum = "";
        $("#result").html('Enter a number');
    });

    };
          calculator();
});

$(document).ready(function(){
	function calculator(){
    var sum = "";
    var len;
    //var arr= [];
    var operators = ["+", "-", "*", "/", "%"];
    var input = $('#result')
    $(".num").click(function() {
    	var number = $(this).attr('value');
    	sum += number;
       // arr.push(number);
    	$('#result').html(sum)
        len = input.innerHTML.split("");
        //console.log(len);
        //console.log(arr);
    });
    $(".operators").click(function(e) {
      e.preventDefault();
      var operator = $(this).attr('value');
      sum += operator;
      //arr.push(number);
        $("#result").html(sum);
       len = input.innerHTML;
     // if(/(?=(\D{2}))/g.test(sum)) {
        sum = len.substring(0, len.length - 1);
        $("#result").html(sum);
     // }
     // len = input.innerHTML.split("");
        //console.log(len);
        
      //console.log(arr);

    });

        $("#equal").click(function() {
      var total =  eval(sum);
     // $("#result").attr('value', total);
      $("#result").html(total % 1 != 0 ? total.toFixed(2) : total);
    });

    $("#clear").click(function() {
       sum = "";
       arr = [];
        $("#result").html(0);
    });

    };
          calculator();
});

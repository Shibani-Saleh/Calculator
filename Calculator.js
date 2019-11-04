// var input = "";
// var firstNum = "";
// var secondNum = "";
// var answer = "";

// $('.num').click(function(){
// 	$('#result').text(input += $(this).text())
// })

// function oper(){
// 	var firstNum = input;
// 	$('#result').empty()
// 	$('.num').click(function(){
// 		$('result').text(secondNum += $(this).text())
// 	});
// }

// $("#mult").click(function(){
//   if(input !== ""){
//     oper();
//   }
// });

// $("#equal").click(function(){
//   answer = firstNum * secondNum;
//   $("#result").text(answer);
// });

// $("#clear").click(function(){
//   input = "";
//   firstInput = "";
//   secondInput = "";
//   answer ="";
//   $("#result").empty(); 
// });


// // $('#plus').click(function(){
// // 	$('#display').append('+')
// // })
// // $('#equal').click(function(){
// // 	$('#display').append('=')
// // })
// // $('#minus').click(function(){
// // 	$('#display').append('-')
// // })
// // $('#divide').click(function(){
// // 	$('#display').append('÷')
// // })
// // $('#mult').click(function(){
// // 	$('#display').append('*')
// // })

// $("#delete").on("click",function(){
// 	$('#display').empty(); 
// });


$(document).ready(function(){
	function calculator(){
    var sum = "";
    var len;
    //var arr= [];
    var operators = ["+", "-", "*", "/"];
    var input = $('#result')
    $(".num").click(function() {
    	var number = $(this).attr('value');
    	sum = sum + number;
    	$('#result').html(sum)

    }
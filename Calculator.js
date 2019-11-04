$('#9').click(function(){
	$('#output').append('9')
})
$('#8').click(function(){
	$('#output').append('8')
})
$('#7').click(function(){
	$('#output').append('7')
})
$('#6').click(function(){
	$('#output').append('6')
})
$('#5').click(function(){
	$('#output').append('5')
})
$('#4').click(function(){
	$('#output').append('4')
})
$('#3').click(function(){
	$('#output').append('3')
})
$('#2').click(function(){
	$('#output').append('2')
})
$('#1').click(function(){
	$('#output').append('1')
})
$('#0').click(function(){
	$('#output').append('0')
})
$('#plus').click(function(){
	$('#output').append('+')
})
$('#equal').click(function(){
	$('#output').append('=')
})
$('#minus').click(function(){
	$('#output').append('-')
})
$('#divide').click(function(){
	$('#output').append('÷')
})
$('#mult').click(function(){
	$('#output').append('*')
})

$('#clear').click(function(){
	$('#output').remove()
	$('#out').append('<output id="output"></output>')
	
})

function operateOn(firstNumber, operation, secondNumber) {
	var result;

  if(operation === 0) {
  	return result = firstNumber + secondNumber;
  }
  else if(operation === 1) {
  	return result = firstNumber * secondNumber;
  }
  else if(operation === 2) {
  	return result = firstNumber / secondNumber;
  }
  else if(operation === 3) {
  	return result = firstNumber - secondNumber;
  }
  else {
  	return 'Nothing to Operate On';
  }
}
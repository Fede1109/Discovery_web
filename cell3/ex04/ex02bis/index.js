// setTimeout( () => 
// {
//     alert("Please, use me...")
// }, 1000)
function	use()
{
	alert("Please, use me...");
}
setInterval(use, 30000);

const boton = $("#button")
let left = $("#number1")
let right = $("#number2")
let operators = $("#operators")
let result = 0;
boton.click(() => {    
    if (right.val() >= 0 && left.val() >= 0) {
        switch (operators.val()) {
            case "+":
                result = parseInt(left.val()) + parseInt(right.val())
				show_result()
                break;
            case "-":
                result = left.val() - right.val()
				show_result()
                break;
            case "*":
                result = left.val() * right.val()
				show_result()
                break;
            case "/":
                if (right.val() == 0)
                    alert("It’s over 9000!")
                else
                {
                    result = left.val() / right.val()
					show_result()
                }
                break;
            case "%":
                if (right.val() == 0)
                    alert("It’s over 9000!")
                else
                {
                    result = left.val() % right.val()
					show_result()
                }
                    break;
            default:
                alert("Please choose a operator")
                break;
        }
    }
    else
        alert("Error :(");

	function show_result()
	{
		alert(result);
		console.log(`Tu resultado es ${result}`);		
	}
})
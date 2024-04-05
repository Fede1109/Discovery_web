function	use()
{
	alert("Please, use me...");
}
setInterval(use, 30000);

const boton = document.querySelector("#button")
let left = document.querySelector("#number1")
let right = document.querySelector("#number2")
let operators = document.querySelector("#operators")
let result = 0;
boton.addEventListener("click", () => {    
    if (right.value >= 0 && left.value >= 0) {

        switch (operators.value) {
            case "+":
                result = parseInt(left.value) + parseInt(right.value)
				show_result()
                break;
            case "-":
                result = left.value - right.value
				show_result()
                break;
            case "*":
                result = left.value * right.value
				show_result()
                break;
            case "/":
                if (left.value == 0 &&  right.value == 0)
                    alert("It’s over 9000!")
                else
                {
                    result = left.value / right.value
					show_result()
                }
                break;
            case "%":
                if (left.value == 0 &&  right.value == 0)
                    alert("It’s over 9000!")
                else
                {
                    result = left.value % right.value
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
		console.log(result);		
	}
})
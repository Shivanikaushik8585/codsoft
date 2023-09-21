const buttons = document.getElementsByClassName('number');
const inputField=document.getElementById('input');

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',(event)=>{
        // 
        let inputText = inputField.value; // Get the current input value

                switch (event.target.innerHTML) {
                    case 'C':
                        inputText = ''; // Clear the input
                        break;
                    case '=':
                        try {
                            inputText = eval(inputText); // Evaluate the expression
                            if (isNaN(inputText)) {
                                inputText = 'Error'; // Handle non-numeric results
                            }
                        } catch (error) {
                            inputText = 'Error'; // Handle evaluation errors
                        }
                        break;
                    case '->':
                        inputText = inputText.slice(0, -1); // Remove the last character
                        break;
                    default:
                        inputText += event.target.innerHTML; // Append the clicked button's text
                }

                inputField.value = inputText;
        
         inputField.value=inputText;
        //  console.log(inputField)

    
    })

}
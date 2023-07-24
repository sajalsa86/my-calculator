// Get the input field and buttons
const inputField = document.getElementById('input-value');
const buttons = document.querySelectorAll('.btn');

// Attach event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the clicked button value
        const value = button.value;

        // Handle different button actions
        switch (value) {
            case 'C':
                inputField.value = ''; // Clear the input field
                break;
            case 'DEL':
                inputField.value = inputField.value.slice(0, -1); // Delete last character
                break;
            case '=':
                try {
                    // Evaluate the expression and update the input field with the result
                    inputField.value = eval(inputField.value);
                } catch (error) {
                    inputField.value = 'Error'; // In case of invalid expression
                }
                break;
            case '%':
                // Calculate the percentage of the current input value
                try {
                    const currentValue = parseFloat(inputField.value);
                    const result = currentValue / 100;
                    inputField.value = result.toString();
                } catch (error) {
                    inputField.value = 'Error';
                }
                break;
            default:
                // Append the clicked button value to the input field
                inputField.value += value;
                break;
        }
    });
});
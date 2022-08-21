let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');
 
function celTofar(){
    let output = (parseFloat(celsius.value) * 9 /5) + 32 ;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farTocel(){
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9 ;
    celsius.value = parseFloat(output.toFixed(2));
}

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
});
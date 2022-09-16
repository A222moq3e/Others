let input = document.querySelector('input');
let output = document.querySelector('.Result');

function CalcZkah() {
    Result = " زكاتك هي " + (input.value * 0.025) + " ريال";
    output.innerHTML = Result;

}
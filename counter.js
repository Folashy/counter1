const display = document.querySelector("#counter");

const incrementBtn = document.querySelector("#buttonCounter");

incrementBtn.addEventListener('click', increment)
let value = 0; 
    function increment() {
  value += 1;
  display.textContent = value;


// let reset = setTimeout(incrementBtn, 5000);
    window.setTimeout(function() {
    value = 0;
    display.textContent = value ;
        }, 5000)

}

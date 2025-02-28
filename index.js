const home = document.getElementById('homescore');
const guest = document.getElementById('guestscore');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;
let count2 = 0;

function increment(value) {
    count += value;
    home.textContent = count;
    console.log(count)
}

function increment2(value) {
    count2 += value;
    guest.textContent = count2;
    console.log(count2);
}

incrementBtn.addEventListener('click', increment);
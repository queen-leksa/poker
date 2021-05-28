let hand = [];
let cnt = 10;
let el = document.querySelector(".cards");

for (let i = 0; i < cnt; i++) {
    hand.push(cards[i]);
    el.innerHTML += `<div class="card" style="background-image: url(${cards[i].path})"></div>`
}

console.log(hand);
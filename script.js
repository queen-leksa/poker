let hand = [];
let cnt = 15;
let el = document.querySelector(".cards");
let text = document.querySelector(".result");

for (let i = 0; i < cnt; i++) {
    hand.push(cards[i]);
    el.innerHTML += `<div class="card" style="background-image: url(${cards[i].path})"></div>`
}

console.log(hand);
/*
    Старшая карта
    1)Взять последовательность номиналов карт с конца
    2)Взять колоду в руке
    3) Начиная с самого последнего номинала (Туз) и заканчивая самой малнькой картой (6) Проверяем похожую карту в руке
*/

function hightCard(deck) {
    for (let i = series.length - 1; i > 0; i--) {
        for (let j = 0; j < deck.length; j++) {
            if (series[i] === deck[j].rank) {
                return deck[j];
            }
        }
    }
}

function same(deck) {
    let sameCards = {};
    deck.forEach(card => {
        if (sameCards[card.rank]) {
            sameCards[card.rank]++;
        } else {
            sameCards[card.rank] = 1;
        }
    });
    return sameCards;
}
function sameSuits(deck) {
    let sameCards = {};
    deck.forEach(card => {
        // if (sameCards[card.suit]) {
        //     sameCards[card.suit].push(card.rank);
        // } else {
        //     sameCards[card.suit] = [];
        //     sameCards[card.suit].push(card.rank);
        // }
        if (!sameCards[card.suit]) {
            sameCards[card.suit] = [];
        }
        sameCards[card.suit].push(card.rank);
    });
    return sameCards;
}


function getFour(same) {
    for (let k in same) {
        if (same[k] === 4) {
            return k;
        }
    }
}
function getThree(same) {
    for (let k in same) {
        if (same[k] === 3) return k;
    }
}
function getPairs(same) {
    let pairs = [];
    for (let k in same) {
        if (same[k] === 2) pairs.push(k);
    }
    return pairs;
}



const ranksCnt = same(hand);

let hight = hightCard(hand);
let four = getFour(ranksCnt);
let three = getThree(ranksCnt);
let pairs = getPairs(ranksCnt);

if (four) {
    text.innerHTML = `Каре из ${four}`;
} else if (three && pairs.length) {
    text.innerHTML = `Фулл Хаус`;
} else if (three) {
    text.innerHTML = `Трипс из ${three}`;
} else if (pairs.length) {
    text.innerHTML = pairs.length === 2 ? `Две пары из ${pairs[0]} и ${pairs[1]}` : `Пара из ${pairs[0]}`;
} else {
    text.innerHTML = `Старшая карта:<br> ${hight.rank} ${hight.suit}`
}

console.log(sameSuits(hand));
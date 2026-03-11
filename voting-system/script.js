let lionVote = 0;
let dogVote = 0;
let catVote = 0;
const winnerText = document.getElementById('result');
document.getElementById('lionBtn').addEventListener('click', (e) => {
    lionVote += 1;
    updateCount('lionCount', lionVote);
    console.log(lionVote)
})

document.getElementById('dogBtn').addEventListener('click', (e) => {
    dogVote += 1;
    updateCount('dogCount', dogVote);
    console.log(lionVote)
})

document.getElementById('catBtn').addEventListener('click', (e) => {
    catVote += 1;
    updateCount('catCount', catVote);
    console.log(lionVote)
})

const updateCount = (id, countVal) => {
    document.getElementById(id).innerHTML = `<span class="badge badge-info bg-dark">${countVal}</alert>`;
}

document.getElementById('resultBtn').addEventListener('click', (e) => {

    if (lionVote > dogVote && lionVote > catVote) {
        winnerText.textContent = "Winner is Lion 🦁";
    }
    else if (dogVote > lionVote && dogVote > catVote) {
        winnerText.textContent = "Winner is Dog 🐶";
    }
    else if (catVote > lionVote && catVote > dogVote) {
        winnerText.textContent = "Winner is Cat 🐱";
    }
    else {
        winnerText.textContent = "It's a Tie 🤝";
    }
})

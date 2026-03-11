const searchBtn = document.getElementById(`searchBtn`);
const loadBtn = document.getElementById(`loadBtn`);
const search = document.getElementById(`search`);
const alertDiv = document.getElementById(`alert`);
const spinner = document.getElementById(`loader`);
let list = '';

loadBtn.addEventListener('click', () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then((res) => res.json())
        .then(data => {
            console.log(data.results);
            list = data.results;
            let output = "";
            for (let i = 0; i < list.length; i++) {
                output += `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${list[i].name}
                            </h5>
                        </div>
                    </div>
                `
            }

            document.getElementById(`pokemon`).innerHTML = output;
        }).catch(err => console.log(err))
})

searchBtn.addEventListener('click', () => {
    const name = search.value;
    alertDiv.classList.add(`d-none`);
    spinner.classList.remove(`d-none`);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            let output = "";
            output += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${data.name}
                        </h5>
                        <img src="${data.sprites.front_default}" alt="${data.name}">
                        <p>Height: ${data.height}</p>
                        <p>Weight: ${data.weight}</p>
                    </div>
                </div>
            `;
            spinner.classList.add(`d-none`);
            document.getElementById(`pokemon`).innerHTML = output;
        }).catch(err => {
            alertDiv.classList.remove(`d-none`);
            document.getElementById(`pokemon`).innerHTML = "";
            spinner.classList.add(`d-none`);
        })
})


document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const number = Number(document.getElementById('inputNumber').value);
    const resultTable = document.getElementById('result');
    resultTable.innerHTML = ` <tr>
                        <td> <span class="text-muted text-center ">Multiplication Table</span> </td>
                    </tr>`
    for (let i = 1; i <= 10; i++) {
        resultTable.innerHTML += `
        <tr>
            <td>${number} * ${i}  : ${number * i}</td>
        </tr>`
    }
})
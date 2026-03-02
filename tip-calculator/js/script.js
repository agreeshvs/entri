document.getElementById('tipForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const billAmount = Number(document.getElementById('billAmount').value);
    const percentage = Number(document.getElementById('percentage').value);
    const people = Number(document.getElementById('peopleCount').value);


    console.log({
        billAmount,
        percentage,
        people
    })

    let error = document.getElementById("errorMessage");

    const resultTable = document.getElementById("result");

    if (isNaN(billAmount) || isNaN(people) || billAmount <= 0 || people <= 0) {
        error.textContent = "Please Enter Valid data";
    }

    const tipAmont = (billAmount * percentage) / 100;
    const totalAmount = tipAmont + billAmount;
    const person = totalAmount / people;


    resultTable.innerHTML = `
    <tr>
        <td> ${tipAmont.toFixed(2)} </td>
        <td> ${totalAmount.toFixed(2)} </td>
        <td> ${person.toFixed(2)} </td>
    </tr>
    `

})
const num1 = document.getElementById("num1");
const output = document.getElementById("output");

async function isOddOrEven(num1) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/OddOrEven/AddOddOrEven/${num1}`);
    const data = await response.text();
    console.log(data);
    return data;
}

num1.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const value1 = num1.value;
        isOddOrEven(value1).then(paramater => {
            output.innerHTML = paramater;
            document.getElementById('num1').value = '';
        });
    }
});
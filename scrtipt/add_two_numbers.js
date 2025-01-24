const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const submitButton = document.getElementById("submitButton");

const output = document.getElementById("output");

async function addTwoNumbers(num1, num2) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/AddingTwoNumbers/addNumbers/${num1}/${num2}`);
    const data = await response.text();
    console.log(data);
    return data;
}

submitButton.addEventListener('click', function () {
    const value1 = num1.value;
    const value2 = num2.value;
    addTwoNumbers(value1, value2).then(paramater => {
        output.innerHTML = paramater;
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
    });
});
const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const output = document.getElementById("output");

const submitButton = document.getElementById("submit");

async function geaterOrLess(input, input2) {
    const response = await fetch(`https://minichallengetwotofour-endpoints.azurewebsites.net/LessThenGreaterThen/lessThenGreaterThen/${input}/${input2}`);
    const data = await response.text();
    console.log(data);
    return data;
}

submitButton.addEventListener('click', function () {
    const value1 = input.value;
    const value2 = input2.value;
    geaterOrLess(value1, value2).then(paramater => {
        output.innerHTML = paramater;
        document.getElementById('input').value = '';
        document.getElementById('input2').value = '';
    });
});
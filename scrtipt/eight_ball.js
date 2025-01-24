const input = document.getElementById("input");
const output = document.getElementById("output");

async function eightBall(input) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/Magic8Ball/shakeBall/${input}`);
    const data = await response.text();
    console.log(data);
    return data;
}

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const value = input.value;
        eightBall(value).then(paramater => {
            output.innerHTML = paramater;
        });
    }
});

eightBall("Will I be rich?")
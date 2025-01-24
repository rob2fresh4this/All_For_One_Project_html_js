const nameInput = document.getElementById('NameInput');
const timeInput = document.getElementById('TimeInput');
const submitButton = document.getElementById('submitButton');

const output = document.getElementById('output');

async function askQuestion(name, time) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/AskingQuestions/SetReply/${name}/${time}`);
    const data = await response.text();
    console.log(data);
    return data;
}

submitButton.addEventListener('click', function () {
    const name = nameInput.value;
    const time = timeInput.value;
    askQuestion(name, time).then(paramater => {
        output.innerHTML = paramater;
        document.getElementById('NameInput').value = '';
        document.getElementById('TimeInput').value = '';
    });
});


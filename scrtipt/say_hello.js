// Get the input element by its ID
const nameInput = document.getElementById('NameInput');
const helloText = document.getElementById('helloText');


async function sayHello(name) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/SayHello/SayHelloTo?name=${name}`);
    const data = await response.text();
    return data;
}

// Add an event listener for the 'keydown' event
nameInput.addEventListener('keydown', function (event) {
    if(event.key === 'Enter') {
        const name = nameInput.value;
        sayHello(name).then(paramater => {
            helloText.innerHTML = paramater;
            document.getElementById('myInput').value = '';
        });
    }
});

// Get references to all input fields and the start button
const animalInput = document.getElementById("animal");
const container1Input = document.getElementById("container1");
const leastFavColorInput = document.getElementById("leastFavColor");
const bodyCoveringInput = document.getElementById("bodyCovering");
const verb1Input = document.getElementById("verb1");
const favoriteThingInput = document.getElementById("favoriteThing");
const favoriteFoodInput = document.getElementById("favoriteFood");
const activityToDoInput = document.getElementById("activityToDo");
const changeAppearanceInput = document.getElementById("changeAppearance");
const favColorInput = document.getElementById("favColor");
const startButton = document.getElementById("startButton");

const output = document.getElementById("output");
const inputsContainer = document.querySelector(".inputs-container");

async function generateMadLib(data) {
    const apiUrl = `https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/MadLib/MadLib?` +
        `animal1=${data.animal}&container1=${data.container1}&leastFavColor=${data.leastFavColor}` +
        `&bodyCovering=${data.bodyCovering}&verb1=${data.verb1}&favoriteThing=${data.favoriteThing}` +
        `&favoriteFood=${data.favoriteFood}&activityToDo=${data.activityToDo}` +
        `&changeAppearance=${data.changeAppearance}&favColor=${data.favColor}`;

    const response = await fetch(apiUrl);
    const result = await response.text();
    console.log(result);
    return result;
}

function createRestartButton() {
    const restartBtnContainer = document.querySelector(".restartBtn");
    restartBtnContainer.innerHTML = `
        <button class="Back-btn">Restart</button>
    `;
    const restartButton = restartBtnContainer.querySelector(".Back-btn");
    restartButton.addEventListener("click", function () {
        location.reload();
    });
}


startButton.addEventListener("click", function () {
    const madLibData = {
        animal: animalInput.value,
        container1: container1Input.value,
        leastFavColor: leastFavColorInput.value,
        bodyCovering: bodyCoveringInput.value,
        verb1: verb1Input.value,
        favoriteThing: favoriteThingInput.value,
        favoriteFood: favoriteFoodInput.value,
        activityToDo: activityToDoInput.value,
        changeAppearance: changeAppearanceInput.value,
        favColor: favColorInput.value,
    };
    generateMadLib(madLibData).then((result) => {
        output.innerHTML = result;
        inputsContainer.style.display = "none";
        startButton.style.display = "none";
        createRestartButton();
    });
});

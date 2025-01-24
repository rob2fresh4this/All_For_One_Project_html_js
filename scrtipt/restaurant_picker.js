const mexican = document.getElementById("mexican");
const chinese = document.getElementById("chinese");
const japanese = document.getElementById("japanese");

async function getRestaurant(picked) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/RestaurantPicker/pickRestaurant/${picked}`);
    const data = await response.text();
    console.log(data);
    return data;
}

mexican.addEventListener('click', function () {
    getRestaurant('mexican').then(paramater => {
        document.getElementById('output').innerHTML = paramater;
    });
});

chinese.addEventListener('click', function () {
    getRestaurant('chinese').then(paramater => {
        document.getElementById('output').innerHTML = paramater;
    });
});

japanese.addEventListener('click', function () {
    getRestaurant('japanese').then(paramater => {
        document.getElementById('output').innerHTML = paramater;
    });
});
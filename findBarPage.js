
fetch('https://barmakker-api.onrender.com/johnny')
    .then(response => response.json())
    .then(function (bars) {
        renderBars(bars);
        checkboxBars(bars)
        searchBars (bars)
        // filterBars (bars);
    });

function renderBars(bars) {
    const ul = document.querySelector('ul#bars');
    ul.innerHTML = ''
    console.log(ul);
    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        console.log(bar)
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="text"><span> Navn: </span>${bar.bar_name}</p>
            <p class="bar_location"><span> Lokation: </span>${bar.bar_location}</p>
            <p class="bar_city"><span> By: </span>${bar.bar_city}</p>
            <p class="bar_description"><span> Beskrivelse: </span>${bar.bar_description}</p>
            <p class="opening_hours"><span> Åbningstider: </span>${bar.opening_hours}</p>
            <p class="prices"><span> Priser: </span>${bar.prices}</p>
            <p class="games"><span> Spil: </span>${bar.games === 1? '✅' : '❌'}</p>
            <p class="billiard"><span> Billard: </span>${bar.billiard === 1? '✅' : '❌'}</p>
            <p class="smoking_allowed"><span> Rygning indenfor: </span>${bar.smoking_allowed === 1? '✅' : '❌'}</p>
            <p class="happy_hour"><span> Happy Hour: </span>${bar.happy_hour === 1? '✅' : '❌'}</p>
            <p class="viser_sport"><span> Viser sport: </span>${bar.viser_sport === 1? '✅' : '❌'}</p>
        `;
        ul.appendChild(li);
    }
}



function checkboxBars (bars) {
    const vesterbro = document.querySelector('#test1')
    const noerrebro = document.querySelector('#test2')
    const oesterbro = document.querySelector('#test3')
    const koebenhavnK = document.querySelector('#test4')
    const games = document.querySelector('#test5')
    const billard = document.querySelector('#test6')
    const sport = document.querySelector('#test7')
    const smokingAllowed = document.querySelector('#test8')
    const happyHour = document.querySelector('#test9')

    const searchBtn = document.querySelector('#searchBtn')

    searchBtn.addEventListener('click', function () {

        checkBoxedBars = [];
        for (let i = 0; i < bars.length; i++) {
            const bar = bars[i];
            debugger;
            if((billard.checked) == (true) && (bar.billard == 1)) {
                checkBoxedBars.push(bar);
            }
        }
        renderBars(checkBoxedBars);
    })
}

/*
function filterBars (bars) {
    const filterBtn = document.querySelector('#searchBtn')
    filterBtn.addEventListener('click', function () {
        const searchField = document.querySelector('#searchField');
        const barName = searchField.value;
        filteredBars = [];
        for (let i = 0; i < bars.length; i++) {
            const bar = bars[i];
            if((bar.bar_name) === (barName)) {
                filteredBars.push(bar);
            }
        }
         renderBars(filteredBars);
    })
}
 */



function searchBars (bars) {
    const filterBtn = document.querySelector('#searchBtn')
    filterBtn.addEventListener('click', function (){
        let searchedBars = [];
        for (i = 0; i < bars.length; i++) {
            const sBar = bars[i];
            let inputSearch = document.querySelector('#searchField').value
            if (sBar.bar_name.toLowerCase().includes(inputSearch.toLowerCase())) {
                searchedBars.push(sBar)
            }
        }
        renderBars(searchedBars)
    })
}

const filterBtn = document.querySelector('#searchBtn')
let inputSearch = document.querySelector('#searchField').value
inputSearch.addEventListener("keypress", function (event) {
    if(event.key === "Enter"){
        event.preventDefault();
        filterBtn.click()
    }
})




/*

let inputSearch = document.querySelector('#searchField')

inputSearch.addEventListener('input', function (){
    let searchedBars = [];
    for (i = 0; i < bars.length; i++) {
        const sBar = bars[i];
        let inputSearch = document.querySelector('#searchField').value
        if (sBar.bar_name.toLowerCase().includes(inputSearch.toLowerCase())) {
            searchedBars.push(sBar)
        }
    }
    renderBars(searchedBars)
})

 */



/*
//brugeren skal kunne tilføje en bar til databasen
const createBars = {
    bar_name: "Frughan",
    bar_location: "Mulighedsvej",
    bar_city: "København K",
    description: "Den første til at gøre det største"
};
fetch('http://localhost:3000/bars/create', {
    method: "POST",
    body: JSON.stringify(createBars),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then((response) => response.json())
    .then(function (isSuccessfulString) {
        console.log(isSuccessfulString);
    });
//Brugeren skal kunne tilføje bar features til deres netop tilføjede bar
const createBarFeatures = {
    fk_bar_id: 18,
    opening_hours: "Man-Søn",
    prices: "Angiv i $ 1-6",
    games: 1,
    billiard: 1,
    smoking_allowed: 1,
    happy_hour: 1,
    viser_sport: 1
};
fetch('http://localhost:3000/bar_features/create', {
    method: "POST",
    body: JSON.stringify(createBarFeatures),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then((response) => response.json())
    .then(function (isSuccessfulString) {
        console.log(isSuccessfulString);
    });
 */



// Brugeren skal kunne log-in

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const createNewUser = document.querySelector('#signIn')

createNewUser.addEventListener('click', function () {

    const name = nameInput.value
    const email = emailInput.value

    const createUser = {
        user_name: name,
        user_email: email,

    };
    fetch('https://barmakker-api.onrender.com/user/create', {
        method: "POST",
        body: JSON.stringify(createUser),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(function (isSuccessfulString) {
            console.log(isSuccessfulString);
        });
})

// sign in pop up

const openSignInBtn = document.querySelector(`.signIn`)
const closeSignInBtn = document.querySelector(`.closePopUpBtn`)
const showSignInPopUp = document.querySelector(`.signInPopUp`)
const overlay = document.querySelector(`#overlay`)

openSignInBtn.addEventListener
(`click`, function()
    {
        if (showSignInPopUp == null) return
        showSignInPopUp.classList.add(`active`)
        overlay.classList.add(`active`)
    }
)

closeSignInBtn.addEventListener(`click`, function (){
    if (showSignInPopUp == null) return
    showSignInPopUp.classList.remove(`active`)
    overlay.classList.remove(`active`)
})

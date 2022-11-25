
// Find din bar

const findBar = document.querySelector('.findBar button')

findBar.addEventListener('click', function () {
    window.open('findbar.html','_self')
})




// Sign in pop-up

const openSignInBtn = document.querySelector(`.OpenSignIn`)
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

closeSignInBtn.addEventListener(`click`, function ()
    {
        if (showSignInPopUp == null) return
        showSignInPopUp.classList.remove(`active`)
        overlay.classList.remove(`active`)
    }
)

//

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
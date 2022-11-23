

// Find din bar

const findBar = document.querySelector('.findBar button')

findBar.addEventListener('click', function () {
    window.open('findbar.html','_self')
})




// Sign in pop-up

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

closeSignInBtn.addEventListener(`click`, function ()
    {
        if (showSignInPopUp == null) return
        showSignInPopUp.classList.remove(`active`)
        overlay.classList.remove(`active`)
    }
)

//
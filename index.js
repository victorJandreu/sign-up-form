
const formu = document.getElementById("form")
const nameInput = document.getElementById("nombre")
const lastNameInput = document.getElementById("last")
const emailInput = document.getElementById("email")
const contraseñaInput = document.getElementById("contraseña")


let isComplete = true

formu.addEventListener("submit", function(e){
    isComplete = true
    e.preventDefault()
    deleteAdvert()
    if(nameInput.value.length === 0) {
        insertAdvert(nameInput, "First Name cannot be empty")
    }
    if(lastNameInput.value.length === 0) {
        insertAdvert(lastNameInput, "Last Name cannot be empty")
    }
    if(emailInput.value.length === 0) {
        insertAdvert(emailInput, "Looks like this is not an email")
    }
    if(contraseñaInput.value.length === 0) {
        insertAdvert(contraseñaInput, "Looks like this is not an email")
    }

    
if(isComplete) {
    nameInput.value = ""
    lastNameInput.value = ""
    emailInput.value = ""
    contraseñaInput.value = ""
 }
  
})


function insertAdvert(inputelemt, text){
    const input = inputelemt
    let padreDiv = input.closest(".flex");  
    padreDiv.classList.add("icon")
    let parrafo = document.createElement("p")
    parrafo.textContent = text
    parrafo.classList.add("advert")
    padreDiv.after(parrafo)
    isComplete = false
}


function deleteAdvert(){
    const query = document.querySelectorAll(".advert")
    for(let i = 0; i < query.length; i++){
        query[i].remove()
    }
    const icon = document.querySelectorAll(".icon")
    for(let i = 0; i < icon.length; i++){
        icon[i].classList.remove("icon")
    }
}


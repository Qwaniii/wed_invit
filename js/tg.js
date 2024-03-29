const api = new Api()

let nameGuest = document.querySelector("#fist-last-name"),
    buttonSubmit = document.querySelector("#submit"),
    form = document.forms[0];

    let nameToSent = "Имя: "

nameGuest.addEventListener("change", function(e) {
    nameToSent  += e.target.value.toString()
    console.log(nameToSent)
})

// buttonSubmit.addEventListener("click", function(e) {
//     e.preventDefault();
//     api.sendMessage("Ответы на вопросы", nameToSent)
//         .then(res => res.json())
//         .then(data => {
//             if (data.ok === true) {
//                 form.reset()
//             }
//         })

// })

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let bodyIn = "Хотим кушать ";
    let bodyDrink = "Хотим пить ";
    for (let i = 0; i < form.length; i++) {
    
        if(form[i].checked) {
            form[i].type === "radio" ? bodyIn += `\n` + form[i].value.toString() : bodyDrink += `\n` + form[i].value.toString()
        }
        
    }
    console.log(bodyIn + `\n` + bodyDrink + `\n` +  nameToSent)
    
})

// let formFood = document.querySelector(".form-drink")

// formFood.addEventListener("change", function(e) {
//     e.preventDefault()
//     console.log(form[1].checked)
// })
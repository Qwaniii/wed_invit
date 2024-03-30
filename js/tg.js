const api = new Api()

let nameGuest = document.querySelector("#first-last-name"),
    nameCancel = document.querySelector("#no-first-last-name"),
    buttonSubmitCancel = document.querySelector("#submit-second"),
    form = document.forms[0],
    formSecond = document.forms[1],
    nameToSent = "Имя: ",
    nameToCancelSent = "Имя: ";

formSecond.addEventListener("submit", function(e) {
    e.preventDefault();
    for (let i = 0; i < formSecond.length; i++) {
            if(formSecond[i].name === "name") {           
                nameToCancelSent += formSecond[i].value
            }
        }

    api.sendMessage(`Не получится прийти%0A`, nameToCancelSent)
    .then(res => res.json())
    .then(data => {
        if (data.ok === true) {
            anchorMesDontGo = true
            visibleMesDontGo("success")
            formSecond.reset()    
        } else {
            anchorMesDontGo = true
            visibleMesDontGo("error")
        }
    })
})


form.addEventListener("submit", function(e) {
    e.preventDefault();
    let bodyIn = "Хотим кушать ";
    let bodyDrink = "Хотим пить ";
    for (let i = 0; i < form.length; i++) {
    
        if(form[i].checked) {
            form[i].type === "radio" ? bodyIn += `%0A` + form[i].value.toString() : bodyDrink += `%0A` + form[i].value.toString()
        }
        
        if(form[i].name === "name") {
            nameToSent += form[i].value
        }
    }

    api.sendMessage(`Анкета гостя%0A`, bodyIn + `%0A%0A` + bodyDrink + `%0A%0A` +  nameToSent)
        .then(res => res.json())
        .then(data => {
            if (data.ok === true) {
                anchorMessage = true;
                // closePopup.click()
                visibleMessage("success");
                form.reset();
            } else {
                anchorMessage = true;
                visibleMessage("error");
            }
        })
})

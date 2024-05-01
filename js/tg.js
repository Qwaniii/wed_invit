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
    let bodyIn = "Предпочитаем блюдо ";
    let bodyDrink = "Предпочитаем алкоголь ";
    let aloneMan = ""
    for (let i = 0; i < form.length; i++) {
        if(form[i].name === "select") {
            aloneMan = form[i].value
        }
    
        if(form[i].checked) {
            form[i].name === "food" ? bodyIn += `%0A` + form[i].value.toString() : bodyDrink += `%0A` + form[i].value.toString()
        }  
        
        if(form[i].name === "name") {
            nameToSent += form[i].value
        }
    }

    api.sendMessage(`Анкета гостя%0A`, nameToSent + `%0A` + aloneMan + `%0A%0A` + bodyIn + `%0A%0A` + bodyDrink)
        .then(res => res.json())
        .then(data => {
            if (data.ok === true) {
                anchorMessage = true;
                visibleMessage("success");
                form.reset();
                nameToSent = "Имя: "
                if(inpRadio[0].type = "checkbox") {
                    for (let i=0; i < inpRadio.length; i++) {
                        inpRadio[i].type = "radio"
                    }
                    for (let i=0; i< inpRadioInside.length; i++) {
                        inpRadioInside[i].classList.add("check")
                        inpRadioInside[i].classList.remove("select")
                    }
                    selectEat.innerText = "Какое блюдо предпочитаете?"
                    nameGuest.previousElementSibling.innerText = "Ваше имя и фамилия"
                    nameGuest.placeholder = "Иван Николаев"
                }
            } else {
                anchorMessage = true;
                visibleMessage("error");
            }
        })
})

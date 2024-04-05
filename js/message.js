let successMessageVisible = document.querySelector("#success-message"),
    mainForm = document.querySelector("#main-form-visible"),
    errorMessageVisible = document.querySelector("#error-message"),
    messageDontGo = document.querySelector("#message-dont-go"),
    formDontGo = document.querySelector("#form-dont-go"),
    anchorMessage = false,
    anchorMesDontGo = false,
    defaultMes = "Заполните, пожалуйста, форму, чтобы мы знали, что у вас не получится прийти.",
    selectChange = document.querySelector("select"),
    inpRadio = document.querySelectorAll(".inp-radio"),
    inpRadioInside = document.querySelectorAll(".inside"),
    selectEat = document.querySelector("#selectEat");

    function visibleMessage(status) {
        if(anchorMessage === true && status === "success") {
            successMessageVisible.style.display = "block";
            mainForm.style.display = "none"
        } else if(anchorMessage === true && status === "error") {
            errorMessageVisible.style.display = "block";
            mainForm.style.display = "none"
        } else {
            errorMessageVisible.style.display = "none";
            successMessageVisible.style.display = "none";
            mainForm.style.display = "block"
        }
    }

    function visibleMesDontGo(status) {
        if(anchorMesDontGo === true && status === "success") {
            messageDontGo.innerText = "Спасибо!";
            formDontGo.style.display = "none"
        } else if(anchorMesDontGo === true && status === "error") {
            messageDontGo.innerText = "Ошибка... Сообщение не отправлено. Попробуйте еще раз";
            formDontGo.style.display = "none"
        } else {
            messageDontGo.innerText = defaultMes;
            formDontGo.style.display = "flex"
        }

    }


    selectChange.addEventListener("change", function(e) {
        if(e.target.value === "Буду с парой / семьей") {
            for (let i=0; i < inpRadio.length; i++) {
                inpRadio[i].type = "checkbox"
            }
            for (let i=0; i< inpRadioInside.length; i++) {
                inpRadioInside[i].classList.remove("check")
                inpRadioInside[i].classList.add("select")
            }
            selectEat.innerText = "Какие блюда предпочитаете?"
        } else {
            for (let i=0; i < inpRadio.length; i++) {
                inpRadio[i].type = "radio"
            }
            for (let i=0; i< inpRadioInside.length; i++) {
                inpRadioInside[i].classList.add("check")
                inpRadioInside[i].classList.remove("select")
            }
            selectEat.innerText = "Какое блюдо предпочитаете?"

        }

    })







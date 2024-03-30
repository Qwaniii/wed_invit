let successMessageVisible = document.querySelector("#success-message"),
    mainForm = document.querySelector("#main-form-visible"),
    errorMessageVisible = document.querySelector("#error-message"),
    messageDontGo = document.querySelector("#message-dont-go"),
    formDontGo = document.querySelector("#form-dont-go"),
    anchorMessage = false,
    anchorMesDontGo = false,
    defaultMes = "Заполните, пожалуйста, форму, чтобы мы знали, что у вас не получится прийти.";

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
            messageDontGo.innerText = "Спасибо. Увидимся в следующий раз!";
            formDontGo.style.display = "none"
        } else if(anchorMesDontGo === true && status === "error") {
            messageDontGo.innerText = "Ошибка... Сообщение не отправлено. Попробуйте еще раз";
            formDontGo.style.display = "none"
        } else {
            messageDontGo.innerText = defaultMes;
            formDontGo.style.display = "flex"
        }

    }




let addTo = document.querySelector("#add").querySelectorAll("a")

addTo.forEach(add => {
    add.addEventListener("click", function(e) {
        api.addToCalendar(e.target.alt)
            .then(res => res.json())
    })
})
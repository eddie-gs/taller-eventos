const Div = document.getElementById("div-button")

Div.addEventListener("click", function() {
    this.onclick(alert('Hola! Soy el div'))
})
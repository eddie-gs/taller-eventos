const Div = document.getElementById("div-button")
const Button = document.getElementById("button")

Div.addEventListener("click", function() {
    this.onclick(alert('Hola! Soy el div'))    
})

Button.addEventListener("click", (event) => {
    event.stopPropagation();
})
const img = document.querySelector(".qrcode"),
    input = document.getElementById("url"),
    button = document.getElementById("button")
    api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=",

button.addEventListener('click', () => {
    img.src = `${api}${input.value}`
})

function rede(parametro){
    img.src = `${api}https://${parametro}`
    // alert(` https:// ${parametro}`)
}


const parScreen = document.querySelector(".par-screen")
const on = document.getElementById("on")
on.addEventListener("click",(eo) => {
    parScreen.classList.remove("opc")
    
})

const headerShift = document.querySelector(".shift")
const shift = document.getElementById("shift")
const headerAlpha = document.querySelector(".alpha")
const alpha = document.getElementById("alpha")
shift.addEventListener("click",(eo) => {
    if (!parScreen.classList.contains("opc")) {
        headerShift.classList.toggle("opc")
        headerAlpha.classList.add("opc")
    }
})

alpha.addEventListener("click",(eo) => {
    if (!parScreen.classList.contains("opc")) {
        headerAlpha.classList.toggle("opc")
        headerShift.classList.add("opc")
    }
})

const off = document.getElementById("off")
const logo = document.getElementById("logo")
off.addEventListener("click",(eo) => {
    
    if (!headerShift.classList.contains("opc")) {
        parScreen.classList.add("opc")
        logo.classList.remove("opc")
        headerAlpha.classList.add("opc")
        headerShift.classList.add("opc")
        setTimeout(() => {
        logo.classList.add("opc")
            
        }, 500);
    }
})



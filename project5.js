const create = document.querySelector(".create");
const result = document.getElementById("result");
const parScreen = document.querySelector(".par-screen");
const col = document.querySelector(".col");
const on = document.getElementById("on");

const audio = new Audio();
audio.src = "./click.mpeg";

on.addEventListener("click", (eo) => {
  parScreen.classList.remove("opc");
});

const headerShift = document.querySelector(".shift");
const shift = document.getElementById("shift");
const headerAlpha = document.querySelector(".alpha");
const alpha = document.getElementById("alpha");
shift.addEventListener("click", (eo) => {
  if (!parScreen.classList.contains("opc")) {
    headerShift.classList.toggle("opc");
    headerAlpha.classList.add("opc");
  }
});

alpha.addEventListener("click", (eo) => {
  if (!parScreen.classList.contains("opc")) {
    headerAlpha.classList.toggle("opc");
    headerShift.classList.add("opc");
  }
});

const off = document.getElementById("off");

const logo = document.getElementById("logo");
off.addEventListener("click", (eo) => {
  col.classList.remove("dn");
  result.classList.add("dn");
  if (!headerShift.classList.contains("opc")) {
    parScreen.classList.add("opc");
    logo.classList.remove("opc");
    headerAlpha.classList.add("opc");
    headerShift.classList.add("opc");
    setTimeout(() => {
      logo.classList.add("opc");
    }, 500);
  }

  create.innerText = "";
  result.innerText = "";
});

const del = document.getElementById("del");
del.addEventListener("click", (eo) => {
  if (!result.classList.contains("dn")) {
  } else {
    create.lastChild.remove();
    result.lastChild.remove();
  }
});

const resultBtn = document.getElementById("resultBtn");

resultBtn.addEventListener("click", (eo) => {
  if (result.innerText == "") {
  } else {
    result.innerText = eval(result.innerText);
    col.classList.add("dn");
    result.classList.remove("dn");
    audio.play();
  }
});

const numbers = document.querySelector(".numbers");
let newNumber;

numbers.addEventListener("click", (eo) => {
  if (!result.classList.contains("dn")) {
    // console.log("ok");
    if (
      eo.target.dataset.nmb == "0" ||
      eo.target.dataset.nmb == "1" ||
      eo.target.dataset.nmb == "2" ||
      eo.target.dataset.nmb == "3" ||
      eo.target.dataset.nmb == "4" ||
      eo.target.dataset.nmb == "5" ||
      eo.target.dataset.nmb == "6" ||
      eo.target.dataset.nmb == "7" ||
      eo.target.dataset.nmb == "8" ||
      eo.target.dataset.nmb == "9" ||
      eo.target.dataset.nmb == "(" ||
      eo.target.dataset.nmb == ")"
      
    ) {
      create.innerText = "";
      result.innerText = "";
      col.classList.remove("dn");
      result.classList.add("dn");
    } else if (eo.target.getAttribute("data-symbole")) {
      console.log("object");
      create.innerText = eval(result.innerText);
      result.classList.add("dn");
      col.classList.remove("dn")
    }
  }
  if (!parScreen.classList.contains("opc")) {
    if (eo.target.dataset.nmb == undefined) {
    } else {
      if (eo.target.getAttribute("data-symbole")) {
        // console.log(create.lastChild);
        // if (eo.target = create.lastChild) {
        
        // console.log("ok");
        // } else{
        //   console.log("no");
          
        // }
        create.append(eo.target.dataset.symbole);
        
        // console.log(create.lastChild);
      } else {
        create.append(eo.target.dataset.nmb);
       
      }
      result.append(eo.target.dataset.nmb);
      audio.play();
      
    
    }
  }
  // if (result.classList.contains("dn")) {
  // } else {
  //   console.log("no");
    
  // }
});


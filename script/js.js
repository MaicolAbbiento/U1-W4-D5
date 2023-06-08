let valus = document.querySelector("#tombola")
let number = Number(valus.innerHTML)

let numeroTombola = document.createElement("div")
let arr = []

for (let i = 0; i < 72; i++) {
  let newCas = i + 1
  arr.push(newCas)
}
arr.forEach(function (e) {
  let divCasella = document.createElement("div")
  divCasella.classList.add("casella")
  let pCasella = document.createElement("p")
  let casella = document.createTextNode(e)
  pCasella.appendChild(casella)
  divCasella.appendChild(pCasella)
  valus.appendChild(divCasella)
})

let numeriArr = []
const selzionaNumero = function () {
  let numeroRandom = Math.round(Math.random() * 71) + 1
  arr.forEach((e) => {
    if (e === numeroRandom) {
      if (!numeriArr.includes(numeroRandom)) {
        let casella = document.getElementsByClassName("casella")
        casella[e].classList.add("casellaSelezionata")
        numeriArr.push(numeroRandom)
      } else {
        button.addEventListener("click", function () {
          arr.forEach((e) => {
            if (e === numeroRandom) {
              if (!numeriArr.includes(numeroRandom)) {
                let casella = document.getElementsByClassName("casella")
                casella[e].classList.add("casellaSelezionata")
                numeriArr.push(numeroRandom)
              }
            }
          })
        })
      }
    }
  })
}
let button = document.querySelector("button")
button.addEventListener("click", selzionaNumero)

let giocatore = document.createElement("div")
let nuovogiocatore = []
let kyBord = document.createElement("div")
kyBord.classList.add("giocatore")

valus.appendChild(kyBord)
for (let i = 0; i < 30; i++) {
  let newCas = Math.round(Math.random() * 71) + 1
  arr.push(newCas)
}
arr.forEach(function (e) {
  let divCasella = document.createElement("div")
  divCasella.classList.add("play")

  let pCasella = document.createElement("p")

  let casella = document.createTextNode(e)
  pCasella.appendChild(casella)
  divCasella.appendChild(pCasella)
  kyBord.appendChild(divCasella)
})

let seleziona = document.getElementsByClassName("play")
let arry = Array.from(seleziona)
arry.forEach((e) => {
  e.addEventListener("click", function () {
    e.classList.toggle("casellaSelezionata")
  })
})

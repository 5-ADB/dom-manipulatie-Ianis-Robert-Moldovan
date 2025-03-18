const gebruikers = [
  { id: 1, login: "karel.kleintjes", leeftijd: 14 },
  { id: 2, login: "els.dotjes", leeftijd: 30 },
  { id: 3, login: "piet.pieters", leeftijd: 20 },
  { id: 4, login: "jos.teugels", leeftijd: 13 },
  { id: 5, login: "piet.pollekes", leeftijd: 27 },
];

// gebruiker maken
const login = document.querySelector("#login")
const leeftijd = document.querySelector("#leeftijd")
const toevoegenBtn = document.querySelector("#toevoegen")

toevoegenBtn.addEventListener("click", () => {
gebruikers.push({ id: gebruikers.length + 1, login: login.value, leeftijd: leeftijd.value })
console.log(gebruikers);
})

// knop ouder
const ouderBtn = document.querySelector("#ouderBtn")
const filterLeeftijdInt = document.querySelector("#filterLeeftijd")

ouderBtn.addEventListener("click", () => {
  
})

// knop jonger
const jongerBtn = document.querySelector("#jongerBtn")

jongerBtn.addEventListener("click", () => {
  
})
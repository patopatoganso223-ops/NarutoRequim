const clas = [
  "Uchiha",
  "Hyuga",
  "Senju",
  "Uzumaki",
  "Nara",
  "Akimichi",
  "Yamanaka",
  "Inuzuka",
  "Aburame",
  "Hatake"
]

const kekkeiGenkai = [
  "Mokuton",
  "Hyoton",
  "Shoton",
  "Jiton",
  "Bakuton",
  "Futton",
  "Yoton",
  "Ranton",
  "Shakuton",
  "Jinton"
]

function randomItem(lista) {
  return lista[Math.floor(Math.random() * lista.length)]
}

function girarCla() {
  return `🎲 Seu clã é: ${randomItem(clas)}`
}

function girarKG() {
  return `🔥 Sua Kekkei Genkai é: ${randomItem(kekkeiGenkai)}`
}

console.log(girarCla())
console.log(girarKG())

let countLost = document.getElementById("lost")
let countDead = document.getElementById("dead")


for (let index = 1; index < 9; index++) {
  let hole = document.getElementById("hole" + index)
  hole.onclick = () => {
    if (hole.className.includes( 'hole_has-mole' )) {
      countDead.textContent = Number(countDead.textContent) + 1
      if (countDead.textContent == 10) {
        countLost.textContent = 0
        countDead.textContent = 0
        alert("Вы победили!")}}
    else {
      countLost.textContent = Number(countLost.textContent) + 1
      if (countLost.textContent == 5) {
        countLost.textContent = 0
        countDead.textContent = 0
        alert("Вы проиграли!")}}
    }
}




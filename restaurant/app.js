let container = document.getElementById('container')
for (let index = 0; index < dishes.length; index++) {
  let dish = document.createElement('div')
  dish.className = `${dishes[index].course}`
  dish.id = `${dishes[index].id}`
  let title = `<li id="title">${dishes[index].title}</li>`
  let price = `<li id="price">${dishes[index].price}</li>`
  let description = `<li id="description">${dishes[index].description}</li>`
  let image = `<img id="image" src="${dishes[index].imageURL}"/>`
  dish.insertAdjacentHTML('beforeend',description)
  dish.insertAdjacentHTML('beforeend',title)
  dish.insertAdjacentHTML('beforeend',price)
  dish.insertAdjacentHTML('beforeend',image)
  container.append(dish)
}
let buttons = document.getElementById('buttons')
let startersButton = `<button onClick='filterStarters()'>Starters</button>`
buttons.insertAdjacentHTML('beforeend',startersButton)

function filterStarters() {
  document.getElementById('14').style.display = 'none'
  document.getElementById('9').style.display = 'none'
  document.getElementById('12').style.display = 'none'
  document.getElementById('13').style.display = 'none'
  document.getElementById('15').style.display = 'none'
  document.getElementById('16').style.display = 'none'
  document.getElementById('17').style.display = 'none'
  document.getElementById('2').style.display = 'grid'
  document.getElementById('10').style.display = 'grid'
}

let entreesButton = `<button onClick='filterEntrees()'>Entrees</button>`
buttons.insertAdjacentHTML('beforeend',entreesButton)

function filterEntrees() {
  document.getElementById('2').style.display = 'none'
  document.getElementById('10').style.display = 'none'
  document.getElementById('14').style.display = 'none'
  document.getElementById('13').style.display = 'none'
  document.getElementById('15').style.display = 'none'
  document.getElementById('9').style.display = 'grid'
  document.getElementById('12').style.display = 'grid'
  document.getElementById('16').style.display = 'grid'
  document.getElementById('17').style.display = 'grid'
}

let dessertsButton = `<button onClick='filterDesserts()'>Desserts</button>`
buttons.insertAdjacentHTML('beforeend',dessertsButton)

function filterDesserts() {
  document.getElementById('2').style.display = 'none'
  document.getElementById('10').style.display = 'none'
  document.getElementById('9').style.display = 'none'
  document.getElementById('12').style.display = 'none'
  document.getElementById('16').style.display = 'none'
  document.getElementById('17').style.display = 'none'
  document.getElementById('14').style.display = 'grid'
  document.getElementById('13').style.display = 'grid'
  document.getElementById('15').style.display = 'grid'
}

let allButton = `<button onClick='filterAll()'>All</button>`
buttons.insertAdjacentHTML('beforeend',allButton)

function filterAll() {
  document.getElementById('2').style.display = 'grid'
  document.getElementById('10').style.display = 'grid'
  document.getElementById('14').style.display = 'grid'
  document.getElementById('13').style.display = 'grid'
  document.getElementById('15').style.display = 'grid'
  document.getElementById('9').style.display = 'grid'
  document.getElementById('12').style.display = 'grid'
  document.getElementById('16').style.display = 'grid'
  document.getElementById('17').style.display = 'grid'
}

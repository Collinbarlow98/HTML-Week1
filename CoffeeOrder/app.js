const url = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

let request = new XMLHttpRequest()

request.open("GET", url)

request.onload = function() {
  let orders = JSON.parse(this.responseText)

  for(let property in orders){
    let value = orders[property]
    let orderItems = `<ul class="order">
                      <li>${property}</li>
                      <li>${value.coffee}</li>
                      <button id="deleteButton" onClick='deleteItem(this)'>Delete</button>
                      </ul>`
    ordersUL.innerHTML += orderItems
  }
}
request.send()

let emailInput = document.getElementById('emailInput')
let orderInput = document.getElementById('orderInput')

addButton.addEventListener('click',() => {

    let emailName = emailInput.value
    let orderName = orderInput.value

    let request = new XMLHttpRequest()
    request.open('POST', url)
    request.setRequestHeader("Content-Type", "application/json");

    let body = { emailAddress: emailName, coffee: orderName}

    request.send(JSON.stringify(body))

    let orderItems = `<ul class="order">
                      <li>${emailName}</li>
                      <li>${orderName}</li>
                      <button id="deleteButton" onClick='deleteItem(this)'>Delete</button>
                      </ul>`

    ordersUL.innerHTML += orderItems
})

let searchInput = document.getElementById('searchInput')

searchButton.addEventListener('click',() => {
  let searchName = searchInput.value
  document.body.removeChild(ordersUL)
  let searchUL = document.createElement('ul')
  searchUL.setAttribute("id", "searchUL")

  request.open("GET", url)

  request.onload = function() {
    let orders = JSON.parse(this.responseText)

    for(let property in orders){
      let value = orders[property]
      if(searchName == value) {
        let orderItems = `<ul class="order">
                          <li>${property}</li>
                          <li>${value.coffee}</li>
                          <button id="deleteButton" onClick='deleteItem(this)'>Delete</button>
                          </ul>`
        searchUL.innerHTML += orderItems
    }
    }
  }
})

function deleteItem(obj) {
  let li = obj.parentElement
  ordersUL.removeChild(li)
}

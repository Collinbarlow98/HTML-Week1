
let groceryStore = document.getElementById('groceryStore')
let itemName = document.getElementById('itemName')
let storeListUL = document.getElementById('storeListUL')

let database = firebase.database();
let root = database.ref()
let shoppingList = root.child('Shopping List')

addItem.addEventListener('click', () => {
  let storeName = groceryStore.value
  let item = itemName.value
  let store = shoppingList.child(storeName)
  let item_name = store.child(item)
  item_name.set({
    item: item
  })
})

function displayStores(stores) {
  let storeItems = stores.map((store) => {
    return `<li>${store.storeName}</li>`
  })
  storeListUL.innerHTML = storeItems.join('')
}

function setupObservers() {
  shoppingList.on('value', (snapshot) => {
    let stores = []
    let snapshotValue = snapshot.val()

    for(let key in snapshotValue) {
      let store = snapshotValue[key]
      stores.push(store)
    }
    displayStores(stores)
  })
}

setupObservers()

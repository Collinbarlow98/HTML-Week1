let textbox = document.getElementById('textbox')
let addButton = document.getElementById('addButton')
let ulList = document.getElementById('ulList')
let ulListDone = document.getElementById('ulListDone')

function removeItem(obj) {
  let li = obj.parentElement
  ulList.removeChild(li)
}

function moveCompleted(obj) {
  let li = obj.parentElement
  if (li.parentElement == ulList){
  ulListDone.append(li)
} else {
  ulList.append(li)
}
}

addButton.addEventListener('click',function() {
  let taskName = textbox.value
  let liItem = `<li id="liItem">
                  <input id="chkbx" type="checkbox" onClick='moveCompleted(this)'/>
                  <label>${taskName}</label>
                  <button id="removeButton" onClick='removeItem(this)'>Remove</button>
                </li>`
  //ulList.innerHTML += liItem
  ulList.insertAdjacentHTML('beforeend',liItem)
})

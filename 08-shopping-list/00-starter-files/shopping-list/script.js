function addItem() {
  var input = document.getElementById('item-input').value;

  var newItem = document.createElement('li');
  newItem.textContent = input;

  var list = document.getElementById('item-list');
  list.appendChild(newItem);
}

function addItem() {
  const input = document.getElementById('item-input').value;

  const newItem = document.createElement('li');
  newItem.innerHTML = `${input}   <button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`;
  // newItem.textContent = input;

  const list = document.getElementById('item-list');
  list.appendChild(newItem);
}

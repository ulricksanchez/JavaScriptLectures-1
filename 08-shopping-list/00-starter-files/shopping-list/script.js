// function addItem() {
//   const input = document.getElementById('item-input').value;

//   const newItem = document.createElement('li');
//   newItem.innerHTML = `${input}   <button class="remove-item btn-link text-red">
//   <i class="fa-solid fa-xmark"></i>
// </button>`;
//   // newItem.textContent = input;

//   const list = document.getElementById('item-list');
//   list.appendChild(newItem);
// }

const clearBtn = document.querySelector('#clear');

// function onClear() {
//   alert('Clear Items from function');
// }

//################################################
//clearing them all
function onClear() {
  const itemList = document.querySelector('ul');
  itemList.innerHTML = '';
}
//################################################

function onClear() {
  const itemList = document.querySelector('ul');
  const items = document.querySelectorAll('li');

  //forEach
  items.forEach((item) => item.remove());
}

//Javascript Event Listener
// clearBtn.onlick = function () {
//   alert('Clearn Items');
// };

//addEventListener()
// clearBtn.addEventListener('click', function () {
//   alert('Clear Items');
// });

//arrow function to shorten
// clearBtn.addEventListener('click', () => alert('Clear Items'));
// clearBtn.addEventListener('click', () => console.log('Clear Items'));

//named function
clearBtn.addEventListener('click', onClear);

//removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);
//after 5 seconds, the event listener is now removed
//it will not work anymore

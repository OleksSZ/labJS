const form = document.getElementById('addForm');
const input = document.getElementById('messageInput');
const list = document.getElementById('messagesList');
const fixedItem = document.querySelector('.fixed-item');
const clearBtn = document.getElementById('clearBtn');   // ← нова змінна

// Масив для збереження повідомлень
let messages = JSON.parse(localStorage.getItem('userMessages')) || [];

// Функція для створення та вставки нового елемента ПЕРЕД фіксованим
function addMessage(text) {
  const li = document.createElement('li');
  li.textContent = text;

  fixedItem.parentNode.insertBefore(li, fixedItem);

  messages.unshift(text); 
  localStorage.setItem('userMessages', JSON.stringify(messages));
}

// При завантаженні сторінки — відновлюємо всі повідомлення
function loadMessages() {
  list.innerHTML = '';  // очищаємо список перед завантаженням
  messages.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    fixedItem.parentNode.insertBefore(li, fixedItem);
  });
}


function clearAllData() {
  // очищаємо масив
  messages = [];
  
  // очищаємо localStorage
  localStorage.removeItem('userMessages');
  
  // очищаємо список на сторінці
  list.innerHTML = '';
  

  alert("Всі повідомлення очищено!");
}

// Обробка форми
form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    addMessage(text);
    input.value = '';
  }
});

// Обробник кнопки "Очистити дані"
clearBtn.addEventListener('click', () => {
  if (confirm("Ви дійсно хочете видалити ВСІ збережені повідомлення?")) {
    clearAllData();
  }
});

loadMessages();
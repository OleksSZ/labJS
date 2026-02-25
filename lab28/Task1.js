// Знаходимо елементи
const form = document.getElementById('addForm');
const input = document.getElementById('messageInput');
const list = document.getElementById('messagesList');
const fixedItem = document.querySelector('.fixed-item');

// Масив для збереження повідомлень (завантажуємо з localStorage(з Браузера))
let messages = JSON.parse(localStorage.getItem('userMessages')) || [];

// Функція для створення та вставки нового елемента ПЕРЕД фіксованим
function addMessage(text) {
  const li = document.createElement('li');
  li.textContent = text;

  // Вставляємо новий <li> ПЕРЕД фіксованим елементом
  fixedItem.parentNode.insertBefore(li, fixedItem);

  messages.unshift(text); 
  localStorage.setItem('userMessages', JSON.stringify(messages));
}

// При завантаженні сторінки — відновлюємо всі повідомлення
function loadMessages() {
  list.innerHTML = '';
  messages.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    fixedItem.parentNode.insertBefore(li, fixedItem);
  });
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

// При завантаженні сторінки - показуємо збережені повідомлення
loadMessages();
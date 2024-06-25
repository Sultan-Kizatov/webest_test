// Модальное окно
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.close');
const detailsButtons = document.querySelectorAll('.details-btn');

detailsButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    modal.style.display = 'flex';
    // Получение данных товара из data-атрибутов
    const title = event.target.getAttribute('data-title');
    const description = event.target.getAttribute('data-description');
    const image = event.target.getAttribute('data-image');
    
    // Заполнение модального окна данными товара
    modalContent.querySelector('h2').textContent = title;
    modalContent.querySelector('p').textContent = description;
    modalContent.querySelector('img').src = image;
    
    quantity = 1; // сброс количества при открытии модального окна
    quantitySpan.textContent = quantity;
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Счетчик товаров в модальном окне
let quantity = 1; // начальное количество товара
const quantitySpan = document.getElementById('quantity');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');

decreaseButton.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
  }
});

increaseButton.addEventListener('click', () => {
  quantity++;
  quantitySpan.textContent = quantity;
});

// Добавление в корзину
const addToCartButton = document.getElementById('addToCart');
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
const cartCounter = document.getElementById('cartCounter');

addToCartButton.addEventListener('click', () => {
  cartCount += quantity;
  localStorage.setItem('cartCount', cartCount);
  updateCartCounter();
  modal.style.display = 'none'; // закрытие модального окна после добавления в корзину
});

function updateCartCounter() {
  if (cartCount > 0) {
    cartCounter.textContent = cartCount;
    cartCounter.style.display = 'flex';
  } else {
    cartCounter.style.display = 'none';
  }
}

// Проверяем и обновляем счетчик при загрузке страницы
updateCartCounter();
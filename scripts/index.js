// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const cardContainer = document.querySelector(".places__list");
// @todo: Функция создания карточки
function createCard(card, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => deleteCard(cardElement));

  return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard(item) {
  item.remove();
}
// @todo: Вывести карточки на страницу

function renderCard(cardElement) {
  cardContainer.append(cardElement);
}

initialCards.forEach(function(card) {
  renderCard(createCard(card, deleteCard));
});

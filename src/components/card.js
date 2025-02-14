// @todo: Функция создания карточки
// @todo: Темплейт карточки

export function createCard(card, deleteCard, handleLikeButton, openImagePopup) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__title").textContent = card.name;
  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = card.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => deleteCard(cardElement));

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", handleLikeButton);

  const cardImageElement = cardElement.querySelector(".card__image");
  cardImageElement.addEventListener("click", () => openImagePopup(card));

  return cardElement;
}

// @todo: Функция удаления карточки
export function deleteCard(item) {
  item.remove();
}

// @todo: Функция лайка карточки
export function handleLikeButton(e) {
  e.target.classList.toggle("card__like-button_is-active");
}

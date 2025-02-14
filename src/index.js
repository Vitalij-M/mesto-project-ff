import "./pages/index.css";
import { initialCards } from "./cards.js";
import {
  openModal,
  closeModal,
  initPopupCloseListeners,
} from "./components/modal.js";
import { createCard, deleteCard, handleLikeButton } from "./components/card.js";

const cardContainer = document.querySelector(".places__list");
const formEditProfile = document.querySelector('.popup__form[name="edit-profile"]');
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(".popup__input_type_description");
const formAddCard = document.querySelector(".popup_type_new-card .popup__form");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const popupImage = document.querySelector(".popup_type_image");

function handleOpenFormSubmit(evt) {
  evt.preventDefault();
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popUpEdit);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popUpEdit);
}

// открытие модального окна по кнопе редактирования
const profileEditBtn = document.querySelector(".profile__edit-button");
const popUpEdit = document.querySelector(".popup_type_edit");
profileEditBtn.addEventListener("click", () => openModal(popUpEdit));
profileEditBtn.addEventListener("click", handleOpenFormSubmit);
formEditProfile.addEventListener("submit", handleEditFormSubmit);

//открытие модального окна по кнопе +
const profileAddBtn = document.querySelector(".profile__add-button");
const popUpNewCard = document.querySelector(".popup_type_new-card");
profileAddBtn.addEventListener("click", () => openModal(popUpNewCard));

const popupImageElement = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

function openImagePopup(card) {
  popupImageElement.alt = card.name;
  popupImageElement.src = card.link;
  popupCaption.textContent = card.name;
  openModal(popupImage);
}

// @todo: Обработчик события submit (сохранение новой карточки)
const cardNameInput = formAddCard.querySelector(".popup__input_type_card-name");
const cardLinkInput = formAddCard.querySelector(".popup__input_type_url");

const handleAddCardSubmit = (e) => {
  e.preventDefault();

  const newCard = createCard(
    { name: cardNameInput.value, link: cardLinkInput.value },
    deleteCard,
    handleLikeButton,
    openImagePopup
  );

  cardContainer.prepend(newCard);
  formAddCard.reset();
  closeModal(popUpNewCard);
};

formAddCard.addEventListener("submit", handleAddCardSubmit);

// @todo: Вывести карточки на страницу

initialCards.forEach((card) => {
  const cardElement = createCard(
    card,
    deleteCard,
    handleLikeButton,
    openImagePopup
  );
  cardContainer.append(cardElement);
});

document.querySelectorAll(".popup").forEach((popup) => {
  initPopupCloseListeners(popup);
});

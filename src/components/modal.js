const handleEscKeyUp = (e) => {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened"); // находим открытый попап
    closeModal(popup);
  }
};

export const openModal = (modal) => {
  modal.classList.add("popup_is-opened"); // добавить класс открытия попапа
  document.addEventListener("keydown", handleEscKeyUp); // добавить слушатель на кнопку Escape
  modal.classList.add("popup_is-animated"); //класс плавного открытия и закрытия
};

export const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened"); // удалить класс открытия попапа
  document.removeEventListener("keydown", handleEscKeyUp); // удалить слушатель на кнопку Escape
  modal.classList.remove("popup_is-animated");
};

export const initPopupCloseListeners = (popup) => {
  popup.addEventListener("mousedown", (e) => {
    if (e.target === popup) {
      closeModal(popup);
    }
  });
  popup.querySelector(".popup__close").addEventListener("click", () => {
    closeModal(popup);
  });
};

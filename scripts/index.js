import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
const elementCards = [
  {
    title: 'Bring Technology To Your Comfrotable Home',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo : new URL('/image/element1.svg', import.meta.url)
  },
  {
    title: 'Make Your business To Be Better Famous In Internet',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo : new URL('/image/element2.svg', import.meta.url)
  },
  {
    title: 'Build Your Digital Product That Suitable For Your Need',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo : new URL('/image/element3.svg', import.meta.url)
}];
const elementBox = document.querySelector('.whatwedo');
const popup = document.querySelector('.popup_form');
const popupGood = document.querySelector('.popup_good');
const popupOpen = document.querySelector('.footer__one-btn');
const form = document.forms.form;
const validationParams = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__sumButton',
  inputErrorClass: 'popup__input_error',
  ButtonNonActive: 'popup__sumButton_nonactive',
};
const formValidator = new FormValidator(document.querySelector('.popup__form') ,validationParams);



elementCards.forEach(createCard);
popupOpen.addEventListener('click',()=>{
  form.reset();
  formValidator.resetValidation();
  togglePopup(popup);
});
form.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  togglePopup(popup);
  togglePopup(popupGood);
});

function createCard(cardData){
  const element = getCard(cardData)
  elementBox.prepend(element);
}
function getCard(item) {
  const element = new Card(item, '.template');
  return element.generateCard();
}
function togglePopup(popup){
  popup.classList.toggle('popup_opened');
  if(popup.classList.contains('popup_opened')){
    document.body.style.overflow = "hidden";
    document.addEventListener('mousedown', closeByOverlay);
  }
  else{
    document.body.style.overflow = "";
    document.removeEventListener('mousedown', closeByOverlay);
  }
}
function closeByOverlay(evt){
  if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__closeIcon')) 
    togglePopup(evt.target.closest('.popup')); 
}


formValidator.enableValidation();
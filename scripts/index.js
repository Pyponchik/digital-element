import Card from "./Card.js";
const elementCards = [
  {
    title: 'Bring Technology To Your Comfrotable Home',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo : 'image/element1.svg'
  },
  {
    title: 'Make Your business To Be Better Famous In Internet',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo : 'image/element2.svg'
  },
  {
    title: 'Build Your Digital Product That Suitable For Your Need',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    logo : 'image/element3.svg'
}];
const elementBox = document.querySelector('.whatwedo');



elementCards.forEach(createCard);
function createCard(cardData){
  const element = getCard(cardData)
  elementBox.prepend(element);
}
function getCard(item) {
  const element = new Card(item, '.template');
  return element.generateCard();
}
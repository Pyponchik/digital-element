
export default class Card{
  constructor(cardData, template){
    this._title = cardData.title;
    this._paragraph = cardData.paragraph;
    this._logo = cardData.logo;
    this._template = template;
    this._element = this._getTemplate();
    this._elementTitle =this._element.querySelector('.element__title');
    this._elementLogo =this._element.querySelector('.element__logo');
    this._elementParagraph =this._element.querySelector('.element__paragraph');
  }
  _getTemplate() {
    const templateElement = document
    .querySelector(this._template)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return templateElement;
  }
  generateCard() {
    this._elementTitle.textContent = this._title;
    this._elementLogo.src = this._logo;
    this._elementParagraph.textContent = this._paragraph;
    return this._element;
  }
}
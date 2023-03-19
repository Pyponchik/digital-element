export default class FormValidator {
  constructor(form, validationParams){
    this.form = form;
    this.validationParams = validationParams;
    this._button = this.form.querySelector(this.validationParams.submitButtonSelector);
    this._inputs = this.form.querySelectorAll(this.validationParams.inputSelector);
  }
  _toggleButtonState(){
    if(this.form.checkValidity()){
      this._button.classList.remove(this.validationParams.ButtonNonActive);
      this._button.removeAttribute('disabled');
    }else{
      this._disableButton();
    }
  }
  resetValidation(){
    this._disableButton();
  }
  _toggleButtonState(){
    if(this.form.checkValidity()){
      this._button.classList.remove(this.validationParams.ButtonNonActive);
      this._button.removeAttribute('disabled');
    }else{
      this._disableButton();
    }
  }
  _disableButton(){
    this._button.classList.add(this.validationParams.ButtonNonActive);
    this._button.setAttribute('disabled', true);
  }
  enableValidation() {
    this._inputs.forEach((input)=>{
      this._toggleButtonState();
      input.addEventListener('input', (evt)=>{
        this.symbol = evt.target;
        this._toggleButtonState();
      });
    })
  }
}
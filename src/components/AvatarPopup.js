import React from 'react';

import PopupWithForm from './PopupWithForm';

function AvatarPopup(props) {
  const {
    isOpen,
    onClose
  } = props;


  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      submitButtonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}

    >
      <label>
        <input type="url" name="link" className="popup__input popup__input_info_avatar" defaultValue="" id="src-input" placeholder="Ссылка на аватар" required />
        <span className="popup__input-error" id="src-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AvatarPopup;
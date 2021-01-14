import React from 'react';

import PopupWithForm from './PopupWithForm';

function ProfilePopup(props) {
  const {
    isOpen,
    onClose
  } = props;


  return (
    <PopupWithForm
      name='profile'
      title='Редактировать профиль'
      submitButtonText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="popup__field">
        <input type="text" name="profileName" className="popup__input  popup__input_info_name-profile" id="name-input" defaultValue="" required ="2" maxLength="40" />
        <span className="popup__input-error" id="name-input-error"></span>
      </label>
      <label className="popup__field">
        <input type="text" name="about" className="popup__input popup__input_info_about-profile" id="about-input" defaultValue="" required minLength="2" maxLength="200" />
        <span className="popup__input-error" id="about-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default ProfilePopup;
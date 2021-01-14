import React from 'react';

import PopupWithForm from './PopupWithForm';

function CardPopup(props) {
    const {
        isOpen,
        onClose
    } = props;


    return (
        <PopupWithForm
            name='card'
            title='Новое место'
            submitButtonText='Создать'
            isOpen={isOpen}
            onClose={onClose}

        >
            <label>
                <input type="text" name="name" className="popup__input popup__input_info_name-photo" defaultValue="" id="img-name-input" placeholder="Название" required minLength="2" maxLength="30" />
                <span className="popup__input-error" id="img-name-input-error"></span>
            </label>
            <label>
                <input type="url" name="link" className="popup__input popup__input_info_link-photo" defaultValue="" id="url-input" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error" id="url-input-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default CardPopup;
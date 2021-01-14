import React from 'react';

function PopupWithForm(props) {
    const {
        isOpen,
        name,
        title,
        children,
        submitButtonText,
        onClose
    } = props;
    return (

        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <form className={`popup__form popup__form_type_${name}`} name="info" noValidate>
                    <button className={`popup__close popup__close_type_${name}`} type="button" onClick={onClose}></button>
                    <h2 className={`popup__edit popup__edit popup__edit_type_${name}`}>{title}</h2>
                    {children}
                    <button type="submit" className={`popup__save popup__save_type_${name}`} >{submitButtonText}</button>
                </form>
            </div>
        </div>

        /* 
        <div className="popup popup_type_confirm">
            <figure>
                <div className="popup__container">
                    <form className="popup__form popup__form_type_confirm" name="info" novalidate>
                        <button className="popup__close popup__close_type_confirm" type="button"></button>
                        <h2 className="popup__edit popup__edit_type_confirm">Вы уверены?</h2>
                        <button type="submit" className="popup__save popup__save_type_confirm">Да</button>
                    </form>
                    </div>
            </figure> 
        </div>

        */
    );
}

export default PopupWithForm;

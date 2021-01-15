import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AvatarPopup from './AvatarPopup';
import ProfilePopup from './ProfilePopup';
import CardPopup from './CardPopup';
import ImagePopup from './ImagePopup';



function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({
        open: false,
        link: '',
        name: '',
    });

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({
            open: false,
            link: '',
            name: '',
          });
    }

    function handleCardClick(card) {
        const { link, name } = card;
        setSelectedCard({
            open: true,
            link: link,
            name: name
        });
    }


    return (
        <div className="root">
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />

            <Footer />

            <AvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            />

            <ProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}

            />

            <CardPopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}

            />

            <ImagePopup
                isOpen={selectedCard.open}
                name={selectedCard.name}
                link={selectedCard.link}
                onClose={closeAllPopups}
            />
        </div>
    );
}

export default App;

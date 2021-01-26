import React, { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({
        open: false,
        link: '',
        name: '',
    });
    const [currentUser, setCurrentUser] = useState({});
    const [currentCard, setCurrentCard] = useState([]);

    useEffect(() => {
        api
            .getInfoAndAvatar()
            .then((result) => {
                setCurrentUser(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        api
            .getCards()
            .then((result) => {
                setCurrentCard(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    function handleUpdateUser(newInfo) {
        api
            .updateInfo(newInfo)
            .then((result) => {
                setCurrentUser(result);
            })
    }

    function handleUpdateAvatar(newInfo) {
        api
            .updateAvatar(newInfo)
            .then((result) => {
                setCurrentUser(result);
            });
    }

    function handleAddPlaceSubmit(newCard) {
        console.log(newCard);
        api.newCard(newCard)
            .then((result) => {
                setCurrentCard([result, ...currentCard]);
            });
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some((element) =>
            element._id === currentUser._id);

        if (!isLiked) {
            api
                .countLikeApi(card)
                .then((newCard) => {
                    const newCards = currentCard.map((element) =>
                        element._id === card._id ? newCard : element);
                    setCurrentCard(newCards);
                });
        } else {

            api
                .deleteLike(card)
                .then((newCard) => {
                    const newCards = currentCard.map((element) =>
                        element._id === card._id ? newCard : element);
                    setCurrentCard(newCards);
                })
        }
    }

    function handleCardDelete(card) {
        api.deleteCard(card);
        setCurrentCard(currentCard.filter((element) =>
            element !== card

        ));
    }

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
            <CurrentUserContext.Provider value={currentUser}>
                <Main
                    onCardDelete={handleCardDelete}
                    cards={currentCard}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                />

                <Footer />

                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                />

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}

                />

                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}

                />

                <ImagePopup
                    isOpen={selectedCard.open}
                    name={selectedCard.name}
                    link={selectedCard.link}
                    onClose={closeAllPopups}
                />
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AvatarPopup from './AvatarPopup';
import ProfilePopup from './ProfilePopup';
import CardPopup from './CardPopup';
import ImagePopup from './ImagePopup';

import { api } from '../utils/Api';


function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [profileInfoAndAva, setInfoAndAva] = useState({});
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState({
        open: false,
        link: '',
        name: '',
    });
    React.useEffect(() => {
        api
            .getInfoAndAvatar()
            .then((result) => {
                setInfoAndAva(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    React.useEffect(() => {
        api
            .getCards()
            .then((result) => {
                setCards(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setAddPlacePopupOpen(false);
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
                info={profileInfoAndAva}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                cards={cards}
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

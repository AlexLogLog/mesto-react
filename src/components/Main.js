import React, { useState } from 'react';
import Card from './Card';
import { api } from '../utils/api';

function Main(props) {

  const {
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick
  } = props;


  const [profileInfoAndAva, setProfileInfoAndAva] = useState({});
  const [cards, setCards] = useState([]);
  const userName = profileInfoAndAva.name;
  const userDescription  = profileInfoAndAva.about;
  const userAvatar = profileInfoAndAva.avatar;
  

  React.useEffect(() => {
      api
          .getInfoAndAvatar()
          .then((result) => {
            setProfileInfoAndAva(result);
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

  return (
    <main>
      <section className="profile">

        <div className="profile__list">
          <div className="profile__list-about">
            <div className="profile__icon" onClick={onEditAvatar}>
              <img className="profile__image" src={userAvatar} alt="Аватар" />
            </div>

            <div className="profile__all">
              <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__button-red" type="button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__about">{userDescription}</p>
            </div>
          </div>
          <button className="profile__button-new" type="button" onClick={onAddPlace}></button>
        </div>


      </section>

      <section className="card">

        {cards.map((card) => (
          <Card key={card._id}
            card={card}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;

import React from 'react';
import Card from './Card';

function Main(props) {

  const {
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    info,
    cards,
    onCardClick
  } = props;

  return (
    <main>
      <section className="profile">

        <div className="profile__list">
          <div className="profile__list-about">
            <div className="profile__icon" onClick={onEditAvatar}>
              <img className="profile__image" src={info.avatar} alt="Аватар" />
            </div>

            <div className="profile__all">
              <div className="profile__info">
                <h1 className="profile__name">{info.name}</h1>
                <button className="profile__button-red" type="button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__about">{info.about}</p>
            </div>
          </div>
          <button className="profile__button-new" type="button" onClick={onAddPlace}></button>
        </div>


      </section>

      <section className="card">

        {cards.map((card, i) => (
          <Card key={i}
            card={card}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;

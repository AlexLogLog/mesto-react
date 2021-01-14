import React from 'react';

function Card(props) {

    const {
        card,
        onCardClick
    } = props;

    function handleClick() {
        onCardClick(card);
      }

    return (
        <div className="card__id">
            <div className="card__element">
                <button className="card__basket" type="button"></button>
                <img className="card__img" src={card.link} alt={card.name} onClick={handleClick} />
                <div className="card__about">
                    <h3 className="card__name">{card.name}</h3>
                    <div>
                        <button className="card__like" type="button"></button>
                        <p className="card__like-number">{card.likes.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
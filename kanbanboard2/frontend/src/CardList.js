import React from 'react';
import Card from './Card';
import styles from './assets/scss/CardList.scss';

function CardList({title, cards}) {
    console.log("vvv", cards)
    return (
        <div className={styles.CardList}>
            <h1>
                {title}
            </h1>
            {
                cards.map((card) => {
                    console.log("aaaa", card)
                    return (<Card key={card.no} card={card}/>)
            
            })
            }

        </div>
    );
}

export default CardList;
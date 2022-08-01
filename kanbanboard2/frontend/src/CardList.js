import React from 'react';
import Card from './Card';
import styles from "./assets/css/CardList.css";

function CardList({title, cards}) {
    console.log(title, ":", cards)
    return (
        <div className={styles.CardList}>
            <h1>{title}</h1>
            {cards.map(c => <Card
                key = {c.no}
                title = {c.title}
                description = {c.description}
                status = {c.status}
                tasks = {c.tasks} />)}
        </div>
    );
}

export default CardList;
import React, { useEffect, useState } from 'react';
import CardList from './CardList'
import styles from './assets/scss/KanbanBoard.scss';

function KanbanBoard() {

    const [cards, setCards] = useState([]);

    useEffect(async () => {
        try {
          const response = await fetch('/api', {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: null
          });
    
          if(!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
    
          const json = await response.json();
          
          if(json.result !== 'success') {
            throw new Error(`${json.result} ${json.message}`);  
          }
    
          setCards(json.data);
        } catch(err) {
          console.log(err);
        }
        
      }, []);

    return (
        <div className={styles.KanbanBoard}>
            <CardList 
                title={'ToDo'} 
                cards={cards.filter( e => e.status === 'ToDo')} />
            <CardList 
                title={'Doing'} 
                cards={cards.filter( e => e.status === 'Doing')} />
            <CardList 
                title={'Done'} 
                cards={cards.filter( e => e.status === 'Done')} />
        </div>
    );
}

export default KanbanBoard;
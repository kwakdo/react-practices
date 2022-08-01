import React from 'react';
import cards from './assets/json/data.json'
import CardList from './CardList'

function KanbanBoard() {
    return (
        <div className={'KanbanBoard'}>
            <CardList 
                key={'ToDo'}
                title={'ToDo'} 
                cards={cards.filter( e => e.status === 'ToDo')} />
            <CardList 
                key={'Doing'}
                title={'Doing'} 
                cards={cards.filter( e => e.status === 'Doing')} />
            <CardList 
                key={'Done'}
                title={'Done'} 
                cards={cards.filter( e => e.status === 'Done')} />
        </div>
    );
}

export default KanbanBoard;
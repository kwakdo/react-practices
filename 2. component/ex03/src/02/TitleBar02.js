import React from 'react';

export default function TitelBar02() {
    const onClickHandler = e => {
        console.log('TItleBar02 Clicked')
    }
    return (
        <h1 
                onClick={onClickHandler}
                style={{
                    cursor: 'pointer'
                }}>
                Function Handler(Functional Component)
            </h1>
    )
}
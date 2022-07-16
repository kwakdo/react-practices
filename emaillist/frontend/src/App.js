import React from 'react';
import emails from './assets/json/data.json';
import Emaillist from './Emaillist';
import SearchBar from './SearchBar';
import style from './assets/css/styles.css';

function App() {
    
    return (
        <div id={style.App}>
            <SearchBar />
            <Emaillist emails ={emails}/>
        </div>
    );
}

export default App;
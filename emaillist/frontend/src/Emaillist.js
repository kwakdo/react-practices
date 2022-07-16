import React from 'react';
import style from './assets/css/styles.css';

function Emaillist({emails}) {
    return (
        <div>
             <ul className={style.Emaillist}>{emails.map((email) => 
                (<li key={email.no}>
                        {email.firstName+email.lastName}
                        <br/>
                        {email.email}  
                </li> ))}
            </ul>
        </div>
    );
}

export default Emaillist;
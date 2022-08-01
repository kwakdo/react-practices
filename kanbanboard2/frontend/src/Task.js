import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './assets/css/Task.css';

export default function Task({no, name, done, notifyChangeTaskDone}) {
    const [checked, setChecked] = useState(false);
    const onChangeCheckBox = e => {setChecked(checked => !checked)}

    return (
        <li className={styles.Task}>
            <input 
                type='checkbox' 
                checked={checked}
                onChange= {onChangeCheckBox}/>
            {name}
            <a href='#' className={styles.Task__remove}/>
        </li>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired
}
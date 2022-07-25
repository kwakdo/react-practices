import React, {useState} from 'react';
import styles from './assets/scss/Task.scss';

export default function Task({task}) {
    const {no, name, done} = task;
    const [checkBox, setCheckBox] = useState(done);
    const OnChangeCheckBox = () => {
        setCheckBox(prevCheckBox => !prevCheckBox)
    }

    return (
        <li className={styles.TaskList__Task}>
            <input type='checkbox' checked={checkBox} onChange={OnChangeCheckBox}/>
            {name}
        <a href='#' className={styles.TaskList__Task__remove}></a>
        </li>
    );
}
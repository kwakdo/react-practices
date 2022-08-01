import React from 'react';
import Task from './Task'
import styles from './assets/scss/TaskList.scss';

export default function TaskList({tasks}) {
    
    return (
        <div className={styles.TaskList}>
            <ul>
                {tasks.map((task) => <Task key={task.no} task={task} />)}
            </ul>
            <input
                type='text'
                className={styles.TaskList__add_task}
                placeholder='태스크 추가'/>
        </div>
    );
}

import React, {useState} from 'react';
import TaskList from './TaskList'
import styles from './assets/scss/Card.scss';

export default function Card({card}) {
    const {no, title, description, status, tasks} = card;
    const [detail, setDetail] = useState(true);
    const styleColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0,
            bottom: 0,
            width: 3,
            backgroundColor: status === 'ToDo' ? '#bd8D31' : (status === 'Doing' ? '#3a7e28' : '#222') 
    }

    const onClickDetail = () => {
      setDetail((prevDetail) => !prevDetail );
    }

    return (
        <div className={styles.Card}>
          <div style={styleColor}/>
          <div 
            className={detail ? styles.Card__Title : [styles.Card__Title, styles.Card__Title__Open].join(" ")} 
            onClick={onClickDetail}>{title}
          </div>
          { 
           
                    
            <div className='Card__Details'>
              {description}
              {detail ? 
              null :   
              <TaskList tasks={tasks}/>
              }
            </div>
          }

        </div>
    );
}

import React from 'react'
import KanbanBoard from './KanbanBoard'
import styles from './assets/scss/App.scss';

const App = () => {

  return (
    <div id={styles.App}>
      <KanbanBoard />
    </div>
  )
}

export default App
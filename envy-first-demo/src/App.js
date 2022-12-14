import './App.css';
import styles from './styles/styles.module.scss';
import { useState } from 'react';
import StartMenu from './components/StartMenu/StartMenu'
import CityMode from './components/CityMode/CityMode'
function App() {

  const [mode, setMode] = useState('start');

  return (
    <div className={styles.main}>
      {mode == 'start' && <StartMenu onStartClick={() => setMode('city')}></StartMenu>}

      {mode == 'city' && <CityMode></CityMode>}

      {mode == 'trip' && <>Trip Mode</>}

      {mode == 'dialog' && <>Dialog Mode</>}

      {mode == 'battle' && <>Battle Mode</>}

      {mode == 'gameOver' && <>Game Over</>}
    </div>
  );
}

export default App;
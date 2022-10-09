import './App.scss';
import styles from './styles/styles.module.scss';
import { useState } from 'react';
import StartMenu from './components/StartMenu/StartMenu';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [mode, setMode] = useState('start');

  
  return (
    <div class={`container-fluid min-vh-100 d-flex flex-column ${styles.mainBackground}`}>

      <div class="row">
        <div class="col">
            <h1 class={`${styles.h1} mb-3`}>Silêncio</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-1">
          {mode == 'start' && <StartMenu gameTitle="Silêncio"></StartMenu>}

          {/* {mode == 'city' && <CityMode></CityMode>} */}

          {mode == 'trip' && <>Trip Mode</>}

          {mode == 'dialog' && <>Dialog Mode</>}

          {mode == 'battle' && <>Battle Mode</>}

          {mode == 'gameOver' && <>Game Over</>}
        </div>
      </div>
    </div>
  );
}

export default App;
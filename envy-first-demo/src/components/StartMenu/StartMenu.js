import { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import styles from "./styles.module.scss";
import ListGroup from 'react-bootstrap/ListGroup';

const StartMenu = ({ onStartClick }) => {
    
    /* const [items, setItems] = useState([
        <h4 onClick={onStartClick}>Continuar</h4>,
        <h4>Novo Jogo</h4>,
        <h4>Estatisticas</h4>,
        <h4>Options</h4>,
        <h4>Créditos</h4>,
        <h4>Exit</h4>
    ]) */

    const [items, setItems] = useState([
        'Continuar',
        'Novo Jogo',
        'Estatisticas',
        'Options',
        'Créditos',
        'Exit'
    ])

    const listTransitions = useTransition(items, {
        config: config.gentle,
        from: { opacity: 0, transform: "translate3d(-25%, 0px, 0px)" },
        enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
        trail:250,
        keys: items.map((item, index) => index)
      });

    return (
        <>
        <nav>
            
        </nav>
        <ListGroup as="ul">
            {listTransitions((stylesOfTransition, item) => (
                <animated.button style={stylesOfTransition} className={styles.startButton}>{item}</animated.button>
            ))}
        </ListGroup>
      </>
    );
};

export default StartMenu;

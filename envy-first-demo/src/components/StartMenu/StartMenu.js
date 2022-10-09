import { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'


const StartMenu = ({ onStartClick }) => {
    
    const [items, setItems] = useState([
        <button onClick={onStartClick}>Continuar</button>,
        <button onClick={onStartClick}>Novo Jogo</button>,
        <button onClick={onStartClick}>Estatisticas</button>,
        <button>Options</button>,
        <button>Créditos</button>,
        <button>Exit</button>
    ])


/* //transform: "translate3d(25%, 0px, 0px)" },
        //.to(y => `translate3d(0,${y}px,0)`), */

        let a = 250;

    const listTransitions = useTransition(items, {
        delay: a++,
        config: config.gentle,
        from: { opacity: 0, transform: "translate3d(-25%, 0px, 0px)" },
        enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
        trail:250,
        keys: items.map((item, index) => index)
      });

    return (
        <ul>
        {listTransitions((styles, item) => (
          <animated.li style={styles}>{item}</animated.li>
        ))}
      </ul>
    );
};

export default StartMenu;

import styles from "./styles.module.scss"

const StartMenu = ({ onStartClick }) => {
    return (
        <div className={styles.menuList}>
            <button>Continuar</button>
            <button onClick={onStartClick}>Novo Jogo</button>
            <button>Estatisticas</button>
            <button>Options</button>
            <button>Créditos</button>
            <button>Exit</button>
        </div>
    );
};

export default StartMenu;

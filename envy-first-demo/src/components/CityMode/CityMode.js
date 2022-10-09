import styles from "./styles.module.scss"

const CityMode = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);

    return <div className="styles.main">City Component</div>


   

    
};



export default CityMode;
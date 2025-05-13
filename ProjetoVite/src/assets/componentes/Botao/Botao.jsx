import React from "react";
import './Botao.css'

const Botao = () => {
    // const handleClick = () => {
    //  <a  href=""></a>

    // }
    return(
        //<button className="botao" onClick={"youtu.be/nbtmsJQQpAM?si=-nFkBpnLPSgi5lAo"}>Latidos</button>
        <a href="https://www.youtube.com/watch?v=nbtmsJQQpAM" target="_blank" rel="noopener noreferrer">
            <button type="button">youtube</button>
        </a>
    )
}

export default Botao

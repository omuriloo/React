import React from "react";
import './Botao.css'

const Botao = () => {
    const handleClick = () => {
        alert ('Você clicou no botão!')
    }
    return(
        <button className="botao" onClick={handleClick}></button>
    )
}

export default Botao
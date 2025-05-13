import React from "react";

const Lista = () =>{
    const tarefas = ['Latir', 'Latir', 'Latir', 'Latir', 'Latir']
    return(
        <ul className="lista">
            {tarefas.map((tarefas, index) => (
                <li key={index}>{tarefas}</li>
            ))}
        </ul>
    )
}

export default Lista
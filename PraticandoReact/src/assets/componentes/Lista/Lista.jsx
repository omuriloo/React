import React from "react";

const Lista = () =>{
    const tarefas = ['Comer', 'estudar', 'procurar emprego', 'malhar', 'Organizar a casa']
    return(
        <ul className="lista">
            {tarefas.map((tarefas, index) => (
                <li key={index}>{tarefas}</li>
            ))}
        </ul>
    )
}

export default Lista
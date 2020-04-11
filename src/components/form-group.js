import React from 'react'

//vou criar este componente como componente funcional para saber que existe também esta opção (já que ele é mais símples)

function FormGroup(props){
    return(
        <div className="form-group">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
        </div>
    )
}

export default FormGroup
import './textfield.css'

function CampoDeTexto(props){

    const aoDigitar = (even) =>{
        props.valorAlterado(even.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div> 
    )
}

export default CampoDeTexto
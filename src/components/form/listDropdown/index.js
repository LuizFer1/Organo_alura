import "./listDropDown.css"

function SquadLists(props) {
     
    
    return(
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select onChange={e => props.valorAlterado(e.target.value)} required={props.required} value={props.valor}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}


export default SquadLists
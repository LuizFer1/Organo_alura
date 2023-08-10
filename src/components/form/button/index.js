import './button.css'

function Botao(p){
    return(
        <button className="botao">
            {p.label}
        </button>
    )
}

export default Botao
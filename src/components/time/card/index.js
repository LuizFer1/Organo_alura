import './card.css'

function Card({nome, cargo, img, cor}){
    return(
        <div className="colaborador">
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={img} alt={nome} />
            </div>
            <div className='rodape'>   
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Card;
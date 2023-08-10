import Card from "./card";
import "./time.css";

export default function Time(props) {
  return (
        (props.jogadores.length > 0) && <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.jogadores.map((jogador, index) => (
                <Card
                    key={index}
                    nome={jogador.nome}
                    cargo={jogador.cargo}
                    img={jogador.imagem}
                    cor={props.corPrimaria}
                />
                ))}
            </div>
        </section>
  );
}

import CampoDeTexto from "./input/index.js";
import "./form.css";
import SquadLists from "./listDropdown/index.js";
import Botao from "./button/index.js";
import { useState } from "react";

function Formulario(props) {

  const [nome, setNome] = useState("");

  const [cargo, setCargo] = useState("");

  const [imagem, setImagem] = useState("");

  const [time, setTime] = useState("")

  const aoSalvar = (e) => {
    e.preventDefault();
    props.novoPlayer({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome('')
    setCargo('')
    setTime('')
    setImagem('')
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2 className="titulo">Preencha os dados abaixo</h2>
        <CampoDeTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite Seu Nome"
          valor={nome}
          valorAlterado={(valor) => setNome(valor)}
        />
        <CampoDeTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Informe seu cargo"
          valor={cargo}
          valorAlterado={(valor) => setCargo(valor)}
        />
        <CampoDeTexto
          label="Imagem"
          placeholder="Informe O Diretorio Da Sua Foto"
          valor={imagem}
          valorAlterado={(valor) => setImagem(valor)}
        />
        <SquadLists label="Função" itens={props.times} 
        valor ={time}
        valorAlterado={(time) => setTime(time)}/>
        <Botao label="Criar Card" />
      </form>
    </section>
  );
}

export default Formulario;
